import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import MainNavbar from '../../Components/MainNavbar'
import { BagContext } from '../../Contexts/BagContext'
import { Button, Flex } from '@chakra-ui/react'
import style from "./bag.module.css"
import axios from 'axios'
import { useToast } from '@chakra-ui/react'
import { AuthContext } from '../../Contexts/AuthContext'




const Bag = () => {
   
  const {cartLength, handleCartLength, total} = useContext(BagContext)
  const {state} = useContext(AuthContext)
  const toasts = useToast()
  const navigate = useNavigate()
  


  const handleRemove = (id) =>{
    
    axios.delete(`https://yoox-server.onrender.com/${id}`)
    .then(()=>{
      handleCartLength()
    })

    toasts({
      title: 'ITEM REMOVED.',
      description: "1 item has been removed from your bag",
      status: 'success',
      duration: 7000,
      isClosable: true,
      position: "top-right"
    })
  }

  const handleUserToShipping = () =>{
      navigate("/checkout")
  }

 
  return (
    <div>
        <MainNavbar/>
         <div className={style.bagHeaderDiv}>
             <h1>SHOPPING BAG</h1>
             <div>
             <h2>
              <Link to="/men">
                 BACK TO SHOPPING
              </Link>
              </h2>
              <Button onClick={handleUserToShipping}>PROCEED WITH YOUR ORDER</Button>
             </div>
         </div>
         <div className={style.bagHeaderShowDiv}></div>
         <div className={style.BagMainDiv}>
           <h1>1 | ITEMS ADDED TO YOUR SHOPPING BAG ({cartLength.length})</h1>
           <div>
              {
                cartLength.map((elem)=>(
                  <div key={elem.id} className={style.BagMainInnerDiv}>
                       
                       <Flex alignItems="center" gap="15px"  w="65%" justifyContent="left">
                          <img src={elem.image1} alt="c" />
                          <div>
                                <h2>{elem.name}</h2>
                                <h3>{elem.category}</h3>
                          </div>
                       </Flex>
                       <Flex alignItems="center" gap="150px"  w="35%"  justifyContent="space-between">
                            <Button 
                             onClick={()=>handleRemove(elem.id)}
                             bg="white"
                             size="sm" 
                            >REMOVE</Button>
                            <h3>US$ {elem.price}</h3>
                       </Flex>
                  </div>
                ))
              }
           </div>
         </div>
         <div className={style.bagHeaderShowDiv}></div>
         <div className={style.OrderSummeryDiv}>
            <div>
                 <h2>TOTAL FOR ITEMS</h2>
                 <h2>US$ {total}</h2>
            </div>
            <div>
                <h2>Local Taxes and Duties</h2>
                 <h2>0.00</h2>
            </div>
            <div>
                 <h2>SHIPPING</h2>
                 <h2>0.00</h2>
            </div>
            <div>
                 <h2>PAYMENT</h2>
                 <h2>Free</h2>
            </div>
             <hr/>
            <div>
                 <h1>ORDER TOTAL</h1>
                 <h1>US$ {total}</h1>
            </div>
         </div>
         <hr />
         <div className={style.bagHeaderDiv}>
             <div>
             <h2>
              <Link to="/men">
                 BACK TO SHOPPING
              </Link>
              </h2>
              <Button onClick={handleUserToShipping} >PROCEED WITH YOUR ORDER</Button>
             </div>
         </div>
    </div>
  )
}

export default Bag