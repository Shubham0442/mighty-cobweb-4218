import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Bag from '../Pages/Bag/Bag'
import CustomerCare from '../Pages/CustomerCare'
import Dream from '../Pages/Dream/Dream'
import Home from '../Pages/Home/Home'
import Login from '../Pages/Login/Login'
import Clothing from '../Pages/Men/Clothing'
import Men from '../Pages/Men/Men'
import Product from '../Pages/Product/Product'
import Register from "../Pages/Register/Register"

const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/customercare" element={<CustomerCare/>}></Route>
            <Route path="/register" element={<Register/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/men" element={<Men/>}></Route>
            <Route path="/bag" element={<Bag/>}></Route>
            <Route path="/dream" element={<Dream/>}></Route>
            <Route path="/clothing" element={<Clothing/>}></Route>
            <Route path="/clothing/:id" element={<Product/>}></Route>
        </Routes>
    </div>
  )
}

export default AllRoutes