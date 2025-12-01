import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Landing from './pages/Landing/Landing'
import Auth from './pages/Auth/Auth'
import Payment from './pages/Payment/Payment'
import Orders from './pages/Orders/Orders'
import Cart from './pages/Cart/Cart'
import Results from './pages/Results/Results'
import ProductDetail from './pages/ProductDetail/ProductDetail'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'


const Routing = () => {
    return (
        <Routes>
            <Route path='/' element={<Landing />} />
            <Route path='/auth' element={<Auth />} />
            <Route path='/payments' element={
                <ProtectedRoute msg="Please sign in to proceed to payment" redirect="/payments"> 
                <Payment />
            </ProtectedRoute>
            } />
            <Route path='/orders' element={
                <ProtectedRoute msg="Please sign in to view your orders" redirect="/orders">
                <Orders />
                </ProtectedRoute>
                } />
            <Route path='/category/:categoryName' element={<Results/>}/>
            <Route path='/product/:productId' element={<ProductDetail/>}/>
            <Route path='/cart' element={<Cart />} />
        </Routes>
    )
}

export default Routing
