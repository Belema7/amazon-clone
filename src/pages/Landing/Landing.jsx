import React from 'react'
import HeroCarousel from './components/carousel/HeroCarousel'
import Category from './components/Category/Category'
import Product from './components/Product/Product'
import LayOut from '../../components/LayOut/LayOut'

const Landing = () => {
    return (
        <LayOut>
            <HeroCarousel />
            <Category />
            <Product />
        </LayOut>
    )
}

export default Landing
