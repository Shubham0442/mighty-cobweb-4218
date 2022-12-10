import React, { useContext, useState } from 'react'
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverArrow,
    PopoverCloseButton,
    Button,
    Input
  } from '@chakra-ui/react'

  import style from "./nav.module.css";
  import { FcGoogle } from 'react-icons/fc';
import axios from 'axios';
import { AuthContext } from '../Contexts/AuthContext';
import { useToast } from '@chakra-ui/react'



const Login = () => {

    const [loginUser, setloginUser] = useState({
        email: "",
        password:""
    })

    const {state, HandleLoginContext, HandleLogoutContext} = useContext(AuthContext)
    const toastss = useToast()

    console.log(state)

    const handleChangeLogin = (e) =>{
        
        let {name, value} = e.target 
         setloginUser({
            ...loginUser,
            [name] : value 
         })   
    }


    const handleLogin = (e) =>{
        e.preventDefault()

        axios.get(`https://yoox-server.onrender.com/user`)
        .then((res)=>{
            
            let flag = false
            for(let i = 0; i < res.data.length; i++)
            {
               if(loginUser.email === res.data[i].email && loginUser.password === res.data[i].password)
               { 
                   flag = true;
                   HandleLoginContext(res.data[i].firstname)
                   toastss({
                    title: 'Login Successful',
                    description: `Welcome ${res.data[i].firstname}`,
                    status: 'success',
                    duration: 7000,
                    isClosable: true,
                    position: "top"
                  })
                   break;
               }
            }

            if(flag == false)
            {
                toastss({
                    title: 'Login Fail',
                    description: `Please check your Login Crendiential`,
                    status: 'success',
                    duration: 7000,
                    isClosable: true,
                    position: "top",
                    status:"error"
                  })
            }
        })
    }

  return (
    <div>
        <Popover>
        <PopoverTrigger>
            <Button mt="-3px" w="20px" size="sm" bg="white" fontSize="12px" fontWeight="bolder">Login</Button>
        </PopoverTrigger>
          <PopoverContent borderColor='blue.800'>
            <PopoverArrow />
            <PopoverCloseButton />
            <PopoverHeader>Login</PopoverHeader>
            <PopoverBody>
               <div className={style.buttonsSocialDiv}>
                 <p>Login with</p>
                  <div className={style.googlebtnDivNav}>
                      <div>
                        <Button  w="140px" colorScheme='facebook'>facebook</Button>
                      </div>
                      <div>
                        <Button w="140px"><FcGoogle/></Button>
                      </div> 
                  </div>
                  <p>or with your e-mail address</p>
               </div>

               <div className={style.LoginFormDiv}>
                  <form >
                      <div>
                        <Input w="290px" type="email" name="email" placeholder='E-MAIL' onChange={handleChangeLogin} value={loginUser.email}/>
                      </div>
                      <div>
                        <Input w="290px" type="password" name="password" placeholder='PASSWORD' onChange={handleChangeLogin}  value={loginUser.password}/>
                      </div>
                      <div>
                           <Button w="290px" type="submit" onClick = {handleLogin}>LOGIN</Button>
                      </div>
                  </form>
               </div>
            </PopoverBody>
          </PopoverContent>
        </Popover>
    </div>
  )
}

export default Login