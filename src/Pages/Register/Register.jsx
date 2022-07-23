import { Button, Input, RadioGroup, Radio, Stack, InputLeftElement, InputGroup, Checkbox } from '@chakra-ui/react'
import { PhoneIcon } from '@chakra-ui/icons'
import React, { useState } from 'react'
import MainNavbar from '../../Components/MainNavbar'
import style from './register.module.css'
import { FcGoogle } from 'react-icons/fc';
import axios from 'axios'
import { useToast } from '@chakra-ui/react'

const Register = () => {

  const [registerUser, setRegisterUser] = useState({
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      gender:"",
      mobile: "",
  })
  const toast = useToast()
  

  const handleChange = (e) =>{
     let {name, value, type, checked} = e.target 
     

     const newType = type === "checkbox" ? checked : value;

     setRegisterUser({
      ...registerUser,
      [name]: newType
     })

  }

  const handleRegister = (e) =>{
     
    e.preventDefault();

     axios.post(`https://yoox-server.herokuapp.com/user`, {

     firstname:registerUser.firstname,
     lastname:registerUser.lastname,
     email:registerUser.email,
     password:registerUser.password,
     gender:registerUser.gender,
     mobile:registerUser.mobile
     })
     .then((res)=>{
      console.log(res.data)
     })

     toast({
      title: 'REGISTRATION SUCCESSFUL.',
      description: "User has been registered successfully",
      status: 'success',
      duration: 7000,
      isClosable: true,
      position: "top-right"
    })

    

  }


  return (
    <div>
      <MainNavbar/>
      <div className={style.upperHeaderRegi}>
          <h2>MYOOX</h2>
          <h3>REGISTRATION</h3>
          <p>Take advantage of a faster checkout and enjoy promotions for registered customers only</p>
      </div>
      <div className={style.SOCIALRegi}>
          <div>
            <h2>REGISTER WITH YOUR SOCIAL MEDIA ACCOUNT</h2>
          </div>
          <div>
             <Button  w="400px" colorScheme='facebook'>facebook</Button>
          </div>
          <div className={style.googlebtnDiv}>
              <Button w="400px"><FcGoogle/></Button>
          </div> 
      </div>
      <div className={style.RegiformDiv}>
          <div>
            <h2>OR WITH YOUR EMAIL</h2>
          </div>
        <form>
          <div>
             <Input w="400px" type="text" name="firstname" variant='filled' placeholder='FIRST NAME' onChange={handleChange} value = {registerUser.firstname}/>
          </div>
          <div>
             <Input w="400px" type="text" name="lastname" variant='filled' placeholder='LAST NAME' onChange={handleChange} value={registerUser.lastname} />
          </div>
          <div>
             <Input w="400px" type="email" name="email" variant='filled' placeholder='E-MAIL' onChange={handleChange} value={registerUser.email}/>
          </div>
          <div>
             <Input w="400px" type="password" name="password" variant='filled' placeholder='PASSWORD' onChange={handleChange}  value={registerUser.password}/>
          </div>
          <div className={style.RadioDiv}>
             <RadioGroup w="400px" defaultValue='1'>
                <Stack  spacing={4} direction='row'>
                  <Radio name = "gender" value='FEMALE' onChange={handleChange}>FEMALE</Radio>
                  <Radio name = "gender" value='MALE' onChange={handleChange}>MALE</Radio>
                </Stack>
              </RadioGroup>
          </div>
          <div className={style.mobileDiv}>
            <InputGroup w="400px">
            <InputLeftElement
              pointerEvents='none'
              children={<PhoneIcon color='gray' />}
             />
             <Input w="400px" type='number' name="mobile"  placeholder='MOBILE NUMBER' onChange={handleChange} value={registerUser.mobile}/>
             </InputGroup>
          </div>
          <div className={style.checkboxDiv}>
             <Checkbox size='sm' colorScheme='green' fontSize = "8px" value=''>I agree to the use of my personal data in order to be updated on new arrivals, informed about exclusive items and contacted as part of targeted marketing initiatives related to services offered by YOOX.
                     By analyzing my personal data, order history and browsing habits, YOOX can improve my shopping experience with suggestions that correspond to my interests.</Checkbox>
          </div>

          <div className={style.RegisterBtnDiv}>
            <Button type="submit" onClick={handleRegister}>REGISTER</Button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Register