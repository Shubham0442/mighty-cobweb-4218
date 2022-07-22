import React from 'react'
import MainNavbar from '../../Components/MainNavbar'
import NewArrival from '../../Components/NewArrival'
import style from './mens.module.css'

const Men = () => {
  return (
    <div>
        <MainNavbar/>
        <div className={style.upperMenDiv}>
            <div className={style.banner1Div}>
                <img src="https://www.yoox.com/images/yoox80/banners/6824_1_SuitCase_Main.png?634485886601286852#width=1380&height=637" alt="1" />
            </div>
            <div className={style.shopNowDiv}>
                <h1>WHATS YOUR TRAVEL TYPE?</h1>
                <p>Pack your bags!</p>
                <div>
                    <h3>SHOP NOW</h3>
                    <h3>DISCOVER MORE</h3>
                </div>
            </div>
            <div className={style.designerDiv}>
                <div>
                   <img src="https://www.yoox.com/images/yoox80/banners/6944_1_DesignerOnSale_HL_M_ENG.png?634485886601286852#width=430&height=600" alt="1" />
                   <div>
                      <h1>DOLCE & GABBANA, MSGM AND MANY MORE</h1>
                      <p>Get your hands on the most coveted brands</p>
                      <h3>SHOP NOW</h3>
                   </div>
                </div>
                <div>
                    <img src="https://www.yoox.com/images/yoox80/banners/5460_1_TheGivingMovement_HL_M.jpg?634485886601286852#width=430&height=600" alt="2" />
                    <div>
                        <h1>THE GIVING MOVEMENT X YOOX</h1>
                        <p>The exclusive capsule collection</p>
                        <div>
                            <h3>GET INSPIRED</h3>
                            <h3>SHOP NOW</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.designerListDiv}>
                    <h2>DESIGNERS</h2>
                    <p>ACNE STUDIOS</p>
                    <p>BALENCIAGA</p>
                    <p>BOTTEGAVENETA</p>
                    <p>BURBERRY</p>
                    <p>CALVIN KLEIN</p>
                    <p>THIS PAST WEEK</p>
                    <p>GCDS</p>
                    <p>DOLCE AND GABBANA</p>
                    <p>MAISON MERGIELA</p>
                    <p>VELENTO</p>
                    <p>VERSCE</p>
                    <p>SANTOLI</p>
            </div>
            <div className={style.NewArrivalDiv}>
                <div className={style.NewArrival1st}>
                    <h1>NEW ARRIVALS</h1>
                    <p>VIEW ALL</p>
                </div> 
                 <div className={style.NewArrivalSlider}>
                    <NewArrival />
                </div>          
            </div>
        </div>
        <div className={style.watchHeartDiv}>
            <div>
                <img src="https://www.yoox.com/images/yoox80/banners/6825_3_BaumeMercier_Tris_W.png?634485886601286852#width=473&height=660" alt="1" />
                <h2>BAUME & MERCIER</h2>
                <p>Dont't miss our selection of watches</p>
            </div>
            <div className={style.watchHeartMidDiv}>
                <img src="https://www.yoox.com/images/yoox80/banners/6825_3_Seletti_Tris.png?634485886601286852#width=473&height=660" alt="2" />
                <h2>SELETTI</h2>
                <p>Pure creativity</p>
           </div>
            <div>
                <img src="https://www.yoox.com/images/yoox80/banners/6825_2_NewBalance_Tris_M.jpg?634485886601286852#width=473&height=660" alt="3" />
                <h2>NEW BALENCE</h2>
                <p>XC-72: Perfecty paring past and present</p>
            </div>     
        </div>
    </div>
  )
}

export default Men