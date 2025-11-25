import React from 'react'
import Header from '../Header/Header'
import HeaderMain from '../Header/HeaderMain'

const LayOut = ({children}) => {
  return (
    <div>
      {/* <Header/> */}
      <HeaderMain/>
      {children}
    </div>
  )
}

export default LayOut
