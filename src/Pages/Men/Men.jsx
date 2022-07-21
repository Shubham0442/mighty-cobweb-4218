import React from 'react'
import MainNavbar from '../../Components/MainNavbar'
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
        </div>
    </div>
  )
}

export default Men