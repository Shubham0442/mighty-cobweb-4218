import React,{useContext} from "react";
import { Link } from "react-router-dom";
import style from "./nav.module.css";
import { UnlockIcon } from '@chakra-ui/icons'
import { BsFillPencilFill } from "react-icons/bs";
import { GoTriangleDown } from "react-icons/go";
import { FaUserAlt } from "react-icons/fa";
import Login from "./Login";
import { AuthContext } from '../Contexts/AuthContext';
import { Button } from "@chakra-ui/react";
import { useToast } from '@chakra-ui/react'

const Navbar = () => {

  const {state, HandleLoginContext, HandleLogoutContext} = useContext(AuthContext)
  const toastsss = useToast()

  const handleLogoutAuth = () =>{
    HandleLogoutContext()
    toastsss({
      title: 'Logout Successful',
      description: ``,
      status: 'success',
      duration: 7000,
      isClosable: true,
      position: "top"
    })
  }
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

     {
       state.isAuth ? 
           
       <div className={style.forIcon}>
          <FaUserAlt/>
          <h2>MYOOX</h2>
        </div>
        :
        <div className={style.forIcon}>
          <BsFillPencilFill/>
          <Link to="/register">REGISTER</Link>
        </div>
     }
       
        {
          state.isAuth ? 
          <div className={style.forIcon}>
          <Button onClick={handleLogoutAuth} mt="-3px" w="20px" size="sm" bg="white" fontSize="12px" fontWeight="bolder">Logout</Button>
        </div> :
          
          <div className={style.forIcon}>
          <UnlockIcon/>
          <Login/>
        </div>

        }
        
      </div>
    </div>
  );
};

export default Navbar;
