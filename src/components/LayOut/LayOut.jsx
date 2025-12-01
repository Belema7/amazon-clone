import React, { useState, useEffect } from 'react'
import Header from '../Header/Header'
import HeaderMain from '../Header/HeaderMain'

const Layout = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)

  // Handle scroll to top visibility
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Main Header */}
      <header className="sticky top-0 z-50">
        <HeaderMain />
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {isLoading ? (
          <div className="flex items-center justify-center min-h-[60vh]">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#FF6200]"></div>
          </div>
        ) : (
          <div className="max-w-screen-2xl mx-auto w-full px-3 sm:px-4 md:px-6">
            {children}
          </div>
        )}
      </main>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-4 sm:right-6 z-40 p-3 bg-[#FF6200] text-white rounded-full shadow-lg hover:bg-[#e55a00] transition-all duration-300 hover:scale-110 active:scale-95"
          aria-label="Scroll to top"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M5 10l7-7m0 0l7 7m-7-7v18" 
            />
          </svg>
        </button>
      )}

      {/* Footer (Optional - Add your footer component here) */}
      {/* <Footer /> */}
    </div>
  )
}

export default React.memo(Layout)