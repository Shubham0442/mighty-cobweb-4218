import React from "react";
import { Link } from "react-router-dom";
import style from "./nav.module.css";
import { UnlockIcon } from '@chakra-ui/icons'
import { BsFillPencilFill } from "react-icons/bs";
import { GoTriangleDown } from "react-icons/go";

const Navbar = () => {
  return (
    <div className={style.Nav}>
      <div className={style.inbox1}>
        <div className={style.forIcon}>
            <Link to="/">INDIA</Link>
            <GoTriangleDown/>
        </div>
        <div>
          <Link to="/customercare">CUSTOMER CARE</Link>
        </div>
      </div>
      <div className={style.inbox2}>
        <div className={style.forIcon}>
          <BsFillPencilFill/>
          <Link to="/register">REGISTER</Link>
        </div>
        <div className={style.forIcon}>
          <UnlockIcon/>
          <Link to="/login">LOGIN</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
