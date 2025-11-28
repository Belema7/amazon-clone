import React from 'react'
import Header from './Header'
import LowerHeader from './LowerHeader'

const HeaderMain = () => {
  return (
    <div className="sticky top-0 z-[100]"
>
      <Header/>
      <LowerHeader/>
    </div>
  )
}

export default HeaderMain
