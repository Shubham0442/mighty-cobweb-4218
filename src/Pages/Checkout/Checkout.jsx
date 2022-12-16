import { Input, Button, Checkbox, Heading} from '@chakra-ui/react'
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import MainNavbar from '../../Components/MainNavbar'
import { BagContext } from '../../Contexts/BagContext'
import { useToast } from '@chakra-ui/react'

import style from './checkout.module.css'
import axios from 'axios'


const Checkout = () => {

    const {cartLength, setCartLength, handleCartLength, total} = useContext(BagContext)
    const navigates = useNavigate()
    const [showload, showSetLoad] = useState(false)

    //const [ show , setShow ] = useState(false)
    const toast1 = useToast()
    const toast2 = useToast()


    // const changeToPayment = (e) =>{
    //     e.preventDefault()
    //     setShow(!show)
    // }

    const handleCheckoutData =(e)=>{
        e.preventDefault()

        showSetLoad(true)
        setTimeout(()=>{
        showSetLoad(false)

        axios.get(`https://yoox-server.onrender.com/bag`)
        .then((res)=>{
             
            const cart = res.data;
            
            for( let i = 0; i < cart.length; i++ )
            {
                axios.delete(`https://yoox-server.onrender.com/bag/${cart[i].id}`)
                .then((res)=>{
                   handleCartLength();
                   setCartLength(cart)
                })
                .catch((error)=>{
                    console.log(error)
                })
            }
             
        })


        
            toast2({
                title: ' YOUR ORDER HAS BEEN PLACED!',
                description: "",
                status: 'success',
                duration: 7000,
                isClosable: true,
                position: "top"
              })
    
              toast1({
                title: 'PAYMENT SUCCESSFUL!',
                description: "",
                status: 'success',
                duration: 7000,
                isClosable: true,
                position: "top"
              })
    
              navigates("/")

        },5000)
       
        
    }


  return (
    <div >
        <MainNavbar/>
        <div className={style.mainContainerCheckout}>
            <div className={style.NintyPerceDiv}> 
            
                <div className={style.SeventyPerDiv}>
                    <h1>Shipping</h1>
                    <p>Enter shipping Details</p>
                    <div  className={style.FormDiv}>
                     <form >

                        <div>
                            <Input type = "text" placeholder='FIRST NAME'/>
                        </div>
                        <div>
                            <Input type = "text" placeholder='LAST NAME'/>
                        </div>
                        <div>
                            <Input type = "text" placeholder='C/O'/>
                        </div>
                        <div>
                            <Input type = "number" placeholder='TELEPHONE'/>
                        </div>
                        <div>
                            <Input type = "text" placeholder='STREET NAME AND NUMBER'/>
                        </div>

                        <div>
                            <Input type = "number" placeholder='ZIPCODE'/>
                        </div>
                        <div>
                            <Input type = "text" placeholder='CITY'/>
                        </div>
                        <div>
                            <Input type = "text" placeholder='STATE'/>
                        </div>
                        <div>
                            <Input type = "text" placeholder='INDIA'/>
                        </div>
                        <div></div>
                        <div></div>
                    </form>
                  </div>
                
                   

                   
                    <h1>Payment</h1>
                    <p>Select Payment Method</p>
                    <div  className={style.FormDiv}>
                     <form >
                     <div className={style.cardDiv}>
                            <Checkbox size="sm" >Credit Card</Checkbox> 
                            <img src="https://irp-cdn.multiscreensite.com/0ae76a2e/dms3rep/multi/tablet/creditcards.png" alt="cards" />
                            <h3>Free</h3>
                        </div>
                        <div></div>

                        <div>
                            <Input type = "number" placeholder='ENTER CARD NUMBER'/>
                        </div>
                        <div>
                            <label >Enter expiration date</label>
                            <Input type = "month" placeholder='Month'/>
                        </div>
                        <div>
                            <Input type = "number" placeholder='CVV'/>
                        </div>
                        <div>
                            <Input type = "text" placeholder='CARD HOLDER NAME'/>
                        </div>
                        <div>
                            <Input type = "text" placeholder='ADDRESS'/>
                        </div>
                        <div>
                            <Input type = "text" placeholder='CITY'/>
                        </div>
                        <div>
                            <Input type = "number" placeholder='ZIPCODE'/>
                        </div>
                        <div>
                           
                        </div>
                        <div>
                            <Input type = "text" placeholder='INDIA'/>
                        </div>
                        <div></div>
                        <div></div>
                        <div>
                            <Button type="submit" bg={"#333333"} isLoading={showload} onClick = {handleCheckoutData}>MAKE A PAYMENT</Button>
                        </div>
                    </form>
                    </div>
                </div>
                
                <div className={style.threetyPerDiv}>
                    <div>
                            <div className={style.CartLengthShowDivFirst} >
                                <h1>Your order </h1>
                                <h2>{cartLength.length} items</h2>
                            </div> 
                            <div>
                                <h2>TOTAL FOR ITEMS</h2>
                                <p>US$ {total}</p>
                            </div>
                            <div>
                                <h2>SHIPPING</h2>
                                <p>Express 3-6 business days</p>
                            </div> 
                            <div>
                                <h2>SHIPPING COST</h2>
                                <p>US$ 0.00</p>
                            </div> 
                            <div>
                                <h2>PAYMENT</h2>
                                <p>Free - Credit Card</p>
                            </div> 
                            <div>
                                <h2>LOCAL TAXES AND DUTIES</h2>
                                <p>US$ 0.00</p>
                            </div> 
                            <div className={style.CartLengthShowDivLast}>
                                <h2>ORDER TOTAL</h2>
                                <h2>US$ {total}</h2>
                            </div>
                    </div>
                    
                    <hr />
                    <div className={style.productDisplayDiv}>
                     <h5>YOU ARE PURCHASING:</h5>
                    {
                        cartLength.map((elem)=>(
                            <div className={style.productInfoCheck}>
                                <img src={elem.image1} alt="ss" />
                                <div key={elem.id} >
                                    <h3>{elem.name}</h3>
                                    <p>{elem.category}</p>
                                    <h3>US$ {elem.price}</h3>
                                </div>
                            </div>
                        ))
                    }
                </div>
                </div>
                

                
            </div>  
       </div>
    </div>
  )
}

export default Checkout 

{/* <div className={style.FlexDiv}>
               <div className={style.mainContainerCheck}>
                
         </div>
        </div>  */}