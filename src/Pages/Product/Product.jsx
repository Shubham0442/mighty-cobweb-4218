import React, { useContext, useEffect, useState } from 'react'
import MainNavbar from '../../Components/MainNavbar'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useParams } from 'react-router-dom';
import axios from 'axios';
import style from "./product.module.css"
import { Button } from '@chakra-ui/react';
import { BagContext } from '../../Contexts/BagContext';

const ProductDisplay = ({productData}) =>{

    console.log(productData)
    const settings = {
        customPaging: function(i) {
          return (
            <a>
              <img src={`${productData.image2}/abstract0${i+1}.jpg`} alt="s"/>
            </a>
          );
        },
        dots: true,
        dotsClass: "slick-dots slick-thumb",
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
      return (
        <div>
          
          <Slider {...settings}>
            <div>
              <img src={productData.image1 + "/abstract01.jpg"} />
            </div>
            <div>
              <img src={productData.image2 + "/abstract02.jpg"} />
            </div>
            <div>
              <img src={productData.image3 + "/abstract03.jpg"} />
            </div>
            <div>
              <img src={productData.image4 + "/abstract04.jpg"} />
            </div>
          </Slider>
        </div>
      );
    }
  
const Product = () => {

    const [productData, setProductData] = useState({});
    const [load, setLoad] = useState(false)

    const {cartLength, handleCartLength} = useContext(BagContext)
    
    
    const {id} = useParams()

    useEffect(()=>{
       
        if(id)
        {
            axios.get(`https://yoox-server.onrender.com/${id}`)
            .then((res)=>{
                setProductData(res.data)
            })
            .catch((error)=>{
                console.log(error)
               
            })
        }
    },[])

    const handleAddtoBag = (productData) =>{
         axios.post(`https://yoox-server.onrender.com/bag`, {
            image1: productData.image1,
            name: productData.name,
            category:productData.category,
            price:productData.price
         })
         .then(()=>{
            console.log()
            handleCartLength()
            
         })

         setLoad(true)
         setTimeout(()=>{
         setLoad(false)
         },3000)
    }

  return (
    <div>
        <MainNavbar/>
        <div className={style.MainProductDiv}>
            <div className={style.SliderProductDiv}>
               <ProductDisplay productData={productData}/>
            </div>
            <div className={style.ProductInfoDiv}>
                    <h3>{productData.name}</h3>
                    <h4>{productData.category}</h4>
                    <p>US$ {productData.price}</p>

                    <div>
                        <Button 
                        onClick = {()=>handleAddtoBag(productData)}
                        bg="#333333" color="white"
                        isLoading={load}  
                        >
                          ADD TO SHOPPING BAG
                          </Button>
                    </div>
                    <div className={style.ProductDreamBtn}>
                        <Button bg="#f3f3f3" >ADD TO DREAM BOX</Button>
                    </div>
            </div>
        </div>    
    </div>
  )
}

export default Product