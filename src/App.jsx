import React, { useContext, useEffect } from 'react'
// import Header from './components/Header/Header'
import HeaderMain from './components/Header/HeaderMain'
import HeroCarousel from './components/carousel/HeroCarousel'
import Category from './components/Category/Category'
import Product from './components/Product/Product'
import Routing from './Routing'
import { DataContext } from './components/DataProvider/DataProvider'
import { auth } from './components/Utility/firebase'



const App = () => {
  const [{user}] = useContext(DataContext)

  // useEffect(()=>{
  //   auth.onAuthStateChanged((authUser) => {
  //     if(authUser){

  //     }
  //   })
  // })
  return (
    <div>
        <Routing/>
    </div>
  )
}

export default App
