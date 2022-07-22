import React from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import style from './nav.module.css'

const NewArrival = () => {
   
        const settings = {
          dots: true,
          infinite: true,
          speed: 600,
          slidesToShow: 3,
          slidesToScroll: 3,
          autoplay: true,
        };
        return (
          <div className={style.sliderDiv}>
            <Slider {...settings}>
              <div className={style.sliderDivInner}>
                <img src="https://www.yoox.com/images/items/12/12857035VN_14_f.jpg?impolicy=crop&width=306&height=390" alt="1" />
                <h3>MARNI</h3>
                <p>t-shirt</p>
                <h4>US$ 381,00</h4>
              </div>
              <div className={style.sliderDivInner}>
                <img src="https://www.yoox.com/images/items/45/45684525LS_14_f.jpg?impolicy=crop&width=306&height=390" alt="2" />
                <h3>MARNI</h3>
                <p>Backpack and fanny pack</p>
                <h4>US$ 141,00</h4>
              </div>
              <div className={style.sliderDivInner}>
                <img src="https://www.yoox.com/images/items/12/12856467BM_14_f.jpg?impolicy=crop&width=306&height=390" alt="3" />
                <h3>RICK OWENS</h3>
                <p>t-shirt</p>
                <h4>US$ 198,00</h4>
              </div>
              <div className={style.sliderDivInner}>
                <img src="https://www.yoox.com/images/items/17/17314395IW_14_f.jpg?impolicy=crop&width=306&height=390" alt="4" />
                <h3>Dolce & GABBANA</h3>
                <p>Sneaker</p>
                <h4>US$ 565,00</h4>
              </div>
              <div className={style.sliderDivInner}>
                <img src="https://www.yoox.com/images/items/12/12843693RR_14_f.jpg?impolicy=crop&width=306&height=390" alt="5" />
                <h3>ROBERTO CAVALLI</h3>
                <p>Solid color Shirt</p>
                <h4>US$ 299,00</h4>
              </div>
              <div className={style.sliderDivInner}>
                <img src="https://www.yoox.com/images/items/13/13821610BJ_14_f.jpg?impolicy=crop&width=306&height=390" alt="6" />
                <h3>DSQUARED2</h3>
                <p>Cargo</p>
                <h4>US$ 872,00</h4>
              </div>
              <div className={style.sliderDivInner}>
                <img src="https://www.yoox.com/images/items/12/12857340KI_14_f.jpg?impolicy=crop&width=306&height=390" alt="7" />
                <h3>MARCELO BUROLN</h3>
                <p>Sweatshirt</p>
                <h4>US$ 284,00</h4>
              </div>
              <div className={style.sliderDivInner}>
                <img src="https://www.yoox.com/images/items/45/45676720OI_14_f.jpg?impolicy=crop&width=306&height=390" alt="8" />
                <h3>DOLCE & GABAAANA</h3>
                <p>Backpack and fanny pack</p>
                <h4>US$ 1.495,00</h4>
              </div>
              <div className={style.sliderDivInner}>
                <img src="https://www.yoox.com/images/items/12/12780809BF_14_f.jpg?impolicy=crop&width=306&height=390" alt="9" />
                <h3>MSGM</h3>
                <p>Shirt</p>
                <h4>US$ 213,00</h4>
              </div>
            </Slider>
          </div>
        );
      }
    


export default NewArrival