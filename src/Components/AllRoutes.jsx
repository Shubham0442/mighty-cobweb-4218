import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CustomerCare from '../Pages/CustomerCare'
import Home from '../Pages/Home/Home'
import Login from '../Pages/Login/Login'
import Register from "../Pages/Register/Register"

const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/customercare" element={<CustomerCare/>}></Route>
            <Route path="/register" element={<Register/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
        </Routes>
    </div>
  )
}

export default AllRoutes