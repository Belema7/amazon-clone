import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Landing from './pages/Landing/Landing'
import Signup from './pages/Auth/Signup'
import Payment from './pages/Payment/Payment'
import Orders from './pages/Orders/Orders'
import Cart from './pages/Cart/Cart'
import Results from './pages/Results/Results'

const Routing = () => {
    return (
        <Routes>
            <Route path='/' element={<Landing />} />
            <Route path='/auth' element={<Signup />} />
            <Route path='/payments' element={<Payment />} />
            <Route path='/orders' element={<Orders />} />
            <Route path='/category/:categoryName' element={<Results/>}/>
            <Route path='/cart' element={<Cart />} />
        </Routes>
    )
}

export default Routing
