import React, { useState, useEffect } from 'react'
import MainNavbar from '../../Components/MainNavbar'
import style from './mens.module.css'
import { GrFormAdd } from 'react-icons/gr';
import { HiMinus } from 'react-icons/hi';
import { Spinner } from '@chakra-ui/react'

import {
    Button,
    Select
  } from "@chakra-ui/react";

  import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    Box
  } from '@chakra-ui/react'
import axios from 'axios';
import { Link } from 'react-router-dom';

const Clothing = () => {

    const [cloth, setCloth] = useState([]);
    const [ loading, setLoading] = useState(false)
    const [ error, setError] = useState(false) 
    const [filterData, setfilterData] = useState([])

    const showData = () =>{
        setLoading(true)
        axios.get('https://yoox-server.herokuapp.com/clothData')
        .then((res)=>{
            setCloth(res.data)
            setLoading(false)
        })
        .catch((error)=>{
            console.log(error)
            setError(true)
            setLoading(false)
        })
    }

    

    const handlePrice = (e)=>{

        e.preventDefault()

        let x = e.target.value

        setLoading(true)

        axios.get(`https://yoox-server.herokuapp.com/clothData?_sort=price&_order=${x}`)
        .then((res)=>{
            setCloth(res.data)
            setLoading(false)
        })
        .catch((error)=>{
            console.log(error)
            setError(true)
            setLoading(false)
        })
    }

    const handlefilterData=(x)=>{
        setLoading(true)

        axios.get(`https://yoox-server.herokuapp.com/clothData?category=${x}`)
        .then((res)=>{
            setCloth(res.data)
            setLoading(false)
        })
        .catch((error)=>{
            console.log(error)
            setError(true)
            setLoading(false)
        })
    }



    useEffect(()=>{  
        showData()
    }, [])

    
    


    console.log(cloth)

  return (
    <div>
        <MainNavbar/>
        <div className={style.clothHeader}>
               <p>HOME / MEN / CLOTHING</p>
               <h1>CLOTHING</h1>
               <h6>T-shirt or shirt? Blazer or biker? Sneakers or derby shoes? No need to choose just one, if finding everything you need is easier than ever before. When in doubt, start from the bottom: chino, cargo, straight-leg, and slim-fit pants have got every man's wardrobe covered...VIEW MORE</h6>
               <div>
                    <h4>SAVE SEARCH</h4>
                    <p>1500+ items</p>
                    <Box>
                        <Select placeholder='SORT BY' onChange = {handlePrice}>
                            <option value='asc'>LOWEST PRICE</option>
                            <option value='desc'>HIGHEST PRICE</option>
                        </Select>
                    </Box>
               </div>
        </div>
        <div className={style.clothHeaderStrip}></div>
        <div className={style.mainClothDiv}>
            <div className={style.FiltersDiv}>
                <img src="https://www.yoox.com/images/yoox80/banners/6833_1_8byyoox_WM_TY_ENG.jpg?634485886601286852" alt="ad" />
              <Accordion allowMultiple >
                        <AccordionItem>
                            {({ isExpanded }) => (
                            <>
                                <h2>
                                <AccordionButton bg="#f5f5f5">
                                    <Box flex='1' textAlign='left'>
                                    CATEGORIES
                                    </Box>
                                    {isExpanded ? (
                                    <HiMinus fontSize='20px' />
                                    ) : (
                                    <GrFormAdd fontSize='20px' />
                                    )}
                                </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4} textAlign='left'>
                                    <Box>
                                    <Button bg="white" onClick={()=>handlefilterData("t-shirt")}>T-shirts</Button>
                                    </Box>
                                    <Box>
                                    <Button bg="white"  onClick={()=>handlefilterData("sweatshirts")}>Sweatshirts</Button>
                                    </Box>
                                    <Box>
                                    <Button bg="white" onClick={()=>handlefilterData("Blazers")}>Blazers</Button>
                                    </Box>
                                    <Box>
                                    <Button bg="white" onClick={()=>handlefilterData("shirts")}>Shirts</Button>
                                    </Box>
                                    <Box>
                                    <Button bg="white">Jeans and Denim</Button>
                                    </Box>
                                    <Box>
                                    <Button bg="white">Coats and jackets</Button>
                                    </Box>
                                </AccordionPanel>
                            </>
                            )}
                        </AccordionItem>
                        <AccordionItem>
                            {({ isExpanded }) => (
                            <>
                                <h2>
                                <AccordionButton bg="#f5f5f5">
                                    <Box flex='1' textAlign='left'>
                                    DESIGNERS
                                    </Box>
                                    {isExpanded? (
                                    <HiMinus fontSize='20px' />
                                    ) : (
                                    <GrFormAdd fontSize='20px' />
                                    )}
                                </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4} textAlign='left'>
                                <h3>AQUAASCUTUM</h3>
                                <h3>ALEXANDER MCQUEEN</h3>
                                <h3>BALMAIN</h3>
                                <h3>GIORGIO ARMANI</h3>
                                <h3>GUCCI</h3>
                                <h3>ADIDAS</h3>
                                </AccordionPanel>
                            </>
                            )}
                        </AccordionItem>
                        <AccordionItem>
                            {({ isExpanded }) => (
                            <>
                                <h2>
                                <AccordionButton bg="#f5f5f5">
                                    <Box flex='1' textAlign='left'>
                                    PRICE RANGE
                                    </Box>
                                    {isExpanded? (
                                    <HiMinus fontSize='20px' />
                                    ) : (
                                    <GrFormAdd fontSize='20px' />
                                    )}
                                </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4} textAlign='left'>
                                <h3>UP TO US$ 75,00</h3>
                                <h3>UP TO US$ 150,00</h3>
                                <h3>UP TO US$ 200,00</h3>
                                <h3>UP TO US$ 300,00</h3>
                                </AccordionPanel>
                            </>
                            )}
                        </AccordionItem>
                        <AccordionItem>
                            {({ isExpanded }) => (
                            <>
                                <h2>
                                <AccordionButton bg="#f5f5f5">
                                    <Box flex='1' textAlign='left'>
                                    SIZES
                                    </Box>
                                    {isExpanded? (
                                    <HiMinus fontSize='20px' />
                                    ) : (
                                    <GrFormAdd fontSize='20px' />
                                    )}
                                </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4} textAlign='left'>
                                <div>XXS</div>
                                <div>XS</div>
                                <div>S</div>
                                <div>M</div>
                                <div>L</div>
                                <div>XL</div>
                                </AccordionPanel>
                            </>
                            )}
                        </AccordionItem>
                        <AccordionItem>
                            {({ isExpanded }) => (
                            <>
                                <h2>
                                <AccordionButton bg="#f5f5f5">
                                    <Box flex='1' textAlign='left'>
                                    COLORS
                                    </Box>
                                    {isExpanded? (
                                    <HiMinus fontSize='20px' />
                                    ) : (
                                    <GrFormAdd fontSize='20px' />
                                    )}
                                </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4} textAlign='left'>
                                    <div>
                                        <div>
                                            <input type="checkbox" name="" id=""/>
                                            <label >Blue</label>
                                        </div>
                                        <div>
                                            <input type="checkbox" name="" id=""/>
                                            <label >Gray</label>
                                       </div>
                                       <div>
                                            <input type="checkbox" name="" id=""/>
                                            <label >Gold</label>
                                       </div>
                                       <div>
                                            <input type="checkbox" name="" id=""/>
                                            <label >Red</label>
                                       </div>
                                       <div>
                                            <input type="checkbox" name="" id=""/>
                                            <label >Pink</label>
                                       </div>
                                       <div>
                                            <input type="checkbox" name="" id=""/>
                                            <label >white</label>
                                       </div>
                                       <div>
                                            <input type="checkbox" name="" id=""/>
                                            <label >Black</label>
                                       </div>
                                    </div>
                                </AccordionPanel>
                            </>
                            )}
                        </AccordionItem>
                        <AccordionItem>
                            {({ isExpanded }) => (
                            <>
                                <h2>
                                <AccordionButton bg="#f5f5f5">
                                    <Box flex='1' textAlign='left'>
                                     PRINTS
                                    </Box>
                                    {isExpanded? (
                                    <HiMinus fontSize='20px' />
                                    ) : (
                                    <GrFormAdd fontSize='20px' />
                                    )}
                                </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4} textAlign='left'>
                                <div>
                                        <div>
                                            <input type="checkbox" name="" id=""/>
                                            <label >Animal Print</label>
                                        </div>
                                        <div>
                                            <input type="checkbox" name="" id=""/>
                                            <label >Camouflage</label>
                                       </div>
                                       <div>
                                            <input type="checkbox" name="" id=""/>
                                            <label >Checks</label>
                                       </div>
                                       <div>
                                            <input type="checkbox" name="" id=""/>
                                            <label >Floral</label>
                                       </div>
                                       <div>
                                            <input type="checkbox" name="" id=""/>
                                            <label >One color</label>
                                       </div>
                                       <div>
                                            <input type="checkbox" name="" id=""/>
                                            <label >Polka dot</label>
                                       </div>
                                       <div>
                                            <input type="checkbox" name="" id=""/>
                                            <label >Stripes</label>
                                       </div>
                                    </div>
                                </AccordionPanel>
                            </>
                            )}
                        </AccordionItem>
                        <AccordionItem>
                            {({ isExpanded }) => (
                            <>
                                <h2>
                                <AccordionButton bg="#f5f5f5">
                                    <Box flex='1' textAlign='left'>
                                    MATERIALS
                                    </Box>
                                    {isExpanded? (
                                    <HiMinus fontSize='20px' />
                                    ) : (
                                    <GrFormAdd fontSize='20px' />
                                    )}
                                </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4} textAlign='left'>
                                <div>
                                        <div>
                                            <input type="checkbox" name="" id=""/>
                                            <label >Cashmere</label>
                                        </div>
                                        <div>
                                            <input type="checkbox" name="" id=""/>
                                            <label >Cotton</label>
                                       </div>
                                       <div>
                                            <input type="checkbox" name="" id=""/>
                                            <label >Leather</label>
                                       </div>
                                       <div>
                                            <input type="checkbox" name="" id=""/>
                                            <label >Linen</label>
                                       </div>
                                       <div>
                                            <input type="checkbox" name="" id=""/>
                                            <label >Organic</label>
                                       </div>
                                       <div>
                                            <input type="checkbox" name="" id=""/>
                                            <label >Silk</label>
                                       </div>
                                       <div>
                                            <input type="checkbox" name="" id=""/>
                                            <label >Wool</label>
                                       </div>
                                    </div>
                                </AccordionPanel>
                            </>
                            )}
                        </AccordionItem>
                        <AccordionItem>
                            {({ isExpanded }) => (
                            <>
                                <h2>
                                <AccordionButton bg="#f5f5f5">
                                    <Box flex='1' textAlign='left'>
                                    SUSTAINABILITY
                                    </Box>
                                    {isExpanded? (
                                    <HiMinus fontSize='20px' />
                                    ) : (
                                    <GrFormAdd fontSize='20px' />
                                    )}
                                </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4} textAlign='left'>
                                        <div>
                                            <input type="checkbox" name="" id=""/>
                                            <label >Yooxygen</label>
                                       </div>
                                </AccordionPanel>
                            </>
                            )}
                        </AccordionItem>
                        <AccordionItem>
                            {({ isExpanded }) => (
                            <>
                                <h2>
                                <AccordionButton bg="#f5f5f5">
                                    <Box flex='1' textAlign='left'>
                                    SMART SALE GUIDE
                                    </Box>
                                    {isExpanded? (
                                    <HiMinus fontSize='20px' />
                                    ) : (
                                    <GrFormAdd fontSize='20px' />
                                    )}
                                </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4} textAlign='left'>
                                <div>
                                        <div>
                                            <input type="checkbox" name="" id=""/>
                                            <label >Highest Discounts</label>
                                        </div>
                                        <div>
                                            <input type="checkbox" name="" id=""/>
                                            <label >Last Pieces</label>
                                       </div>
                                       <div>
                                            <input type="checkbox" name="" id=""/>
                                            <label >New reductions</label>
                                       </div>
                                       <div>
                                            <input type="checkbox" name="" id=""/>
                                            <label >Top brands</label>
                                       </div>
                                       <div>
                                            <input type="checkbox" name="" id=""/>
                                            <label >Under $100</label>
                                       </div>
                                    </div>
                                </AccordionPanel>
                            </>
                            )}
                        </AccordionItem>
                        </Accordion>
                        <img src="https://www.yoox.com/images/yoox80/banners/6830_1_teleyoox_DM_ROWHK.png?634485886601286852" alt="ad1" />
            </div>
            <div className={style.MainProductsDiv}>
                { loading && <Spinner
                        thickness='4px'
                        speed='0.65s'
                        emptyColor='gray.200'
                        color='blue.500'
                        size='xl'
                />}
                {
                    cloth.map((elem)=>(
                        <Link to={`/clothing/${elem.id}`}>
                        <div key = {elem.id} className={style.clothingDivBox}>
                            <img src={elem.image1} alt="c" />
                            <hr />
                            <h4>{elem.name}</h4>
                            <h5>{elem.category}</h5>
                            <h6>US$ {elem.price}</h6>
                        </div>
                        </Link>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Clothing