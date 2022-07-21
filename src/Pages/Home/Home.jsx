import React from "react";
import { Link } from "react-router-dom";
import style from "./home.module.css";

const Home = () => {
  return (
    <div>
      <img
        className={style.logoBlack}
        src="https://logos-download.com/wp-content/uploads/2016/11/YOOX_logo_logotype-700x314.png"
        alt="logo"
      />
      <div className={style.tagline}>
        <h2>SHOP FASHION / DESIGN+ART</h2>
      </div>
      <div className={style.MWKDContainer}>
        <div>
          <img src="/Home-images/plash_W.webp" alt="w" />
          <div>
            <h3>WOMEN</h3>
          </div>
        </div>
        <Link to="/men">
        <div >
          <img src="/Home-images/splash_M.webp" alt="M" /> 
          <div className={style.menDivHome}>
            <h3>MEN</h3>
          </div> 
        </div>
        </Link>
        <div>
          <img src="/Home-images/_splash_K.jpg" alt="k" />
          <div>
            <h3>KIDS</h3>
          </div>
        </div>
        <div>
          <img src="/Home-images/splash_D.webp" alt="d" />
          <div>
            <h3>DESIGN+ART</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
