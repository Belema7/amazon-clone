import React from 'react'
// import Header from './components/Header/Header'
import HeaderMain from './components/Header/HeaderMain'
import HeroCarousel from './components/carousel/HeroCarousel'
import Category from './components/Category/Category'
import Product from './components/Product/Product'



const App = () => {
  return (
    <div>
        <HeaderMain/>
        <HeroCarousel/>
        <Category/>
        <Product/>
    </div>
  )
}

export default App
