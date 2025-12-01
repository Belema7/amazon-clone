import React, { useState, useEffect } from 'react'
import Header from './Header'
import LowerHeader from './LowerHeader'

const HeaderMain = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)

  // Add scroll effect for subtle shadow on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleResize)
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div 
      className={`sticky top-0 z-[100] transition-all duration-300 ${
        isScrolled ? 'shadow-lg' : 'shadow-md'
      }`}
    >
      <Header/>
      <LowerHeader/>
      
      {/* Scroll Progress Indicator (Mobile Only) */}
      {isMobile && (
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-200">
          <div 
            className="h-full bg-[#FF9946] transition-all duration-200"
            style={{ 
              width: `${Math.min(
                (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100, 
                100
              )}%` 
            }}
          />
        </div>
      )}
    </div>
  )
}

export default React.memo(HeaderMain)