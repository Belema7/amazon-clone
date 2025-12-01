import { NavLink, Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { 
  Menu,
  MapPin,
  ChevronLeft,
  ChevronRight,
  X,
  Home,
  Tag,
  HeadphonesIcon,
  Gift,
  CreditCard,
  Monitor,
  BookOpen
} from 'lucide-react';

const LowerHeader = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const navRef = React.useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const checkScrollButtons = () => {
    if (!navRef.current) return;
    
    const { scrollLeft, scrollWidth, clientWidth } = navRef.current;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  };

  const scrollLeft = () => {
    if (navRef.current) {
      navRef.current.scrollBy({ left: -200, behavior: 'smooth' });
      setTimeout(checkScrollButtons, 300);
    }
  };

  const scrollRight = () => {
    if (navRef.current) {
      navRef.current.scrollBy({ left: 200, behavior: 'smooth' });
      setTimeout(checkScrollButtons, 300);
    }
  };

  useEffect(() => {
    checkScrollButtons();
    const currentRef = navRef.current;
    currentRef?.addEventListener('scroll', checkScrollButtons);
    
    return () => {
      currentRef?.removeEventListener('scroll', checkScrollButtons);
    };
  }, []);

  const navigationItems = [
    { to: "/", label: "Home", icon: Home, mobileOnly: true },
    { to: "/categories", label: "All", icon: Menu, mobileLabel: "Menu" },
    { to: "/location", label: "Delivery", icon: MapPin, mobileOnly: true },
    { to: "/deals", label: "Today's Deals", icon: Tag },
    { to: "/customer-service", label: "Customer Service", icon: HeadphonesIcon },
    { to: "/registry", label: "Registry", icon: Gift, breakpoint: "md" },
    { to: "/gift-cards", label: "Gift Cards", icon: CreditCard, breakpoint: "lg" },
    { to: "/sell", label: "Sell", icon: CreditCard, breakpoint: "lg" },
    { to: "/electronics", label: "Electronics", icon: Monitor, breakpoint: "md" },
    { to: "/books", label: "Books", icon: BookOpen, breakpoint: "sm" },
  ];

  return (
    <div className="sticky top-0 z-40">
      {/* Main Navigation Bar */}
      <div className="bg-[#FF9946] px-2 sm:px-4 py-2 relative">
        {/* Scroll Buttons for Desktop */}
        {!isMobile && (
          <>
            {canScrollLeft && (
              <button
                onClick={scrollLeft}
                className="absolute left-0 top-0 h-full w-8 bg-gradient-to-r from-[#FF9946] to-transparent flex items-center justify-center z-10"
                aria-label="Scroll left"
              >
                <ChevronLeft size={20} className="text-white" />
              </button>
            )}
            {canScrollRight && (
              <button
                onClick={scrollRight}
                className="absolute right-0 top-0 h-full w-8 bg-gradient-to-l from-[#FF9946] to-transparent flex items-center justify-center z-10"
                aria-label="Scroll right"
              >
                <ChevronRight size={20} className="text-white" />
              </button>
            )}
          </>
        )}

        {/* Navigation Items Container */}
        <div 
          ref={navRef}
          className="flex items-center space-x-2 sm:space-x-3 md:space-x-4 overflow-x-auto scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {navigationItems.map((item) => {
            const shouldShow = !item.breakpoint || 
              (item.breakpoint === "sm" && !isMobile) ||
              (item.breakpoint === "md" && window.innerWidth >= 768) ||
              (item.breakpoint === "lg" && window.innerWidth >= 1024);
            
            const showMobile = isMobile && (item.mobileOnly || !item.breakpoint);
            
            if (shouldShow || showMobile) {
              return (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    `flex items-center space-x-1.5 sm:space-x-2 px-3 py-2.5 rounded-md transition-all whitespace-nowrap flex-shrink-0 ${
                      isActive 
                        ? 'bg-[#e55a00] text-white shadow-sm' 
                        : 'hover:bg-[#e55a00] hover:text-white'
                    }`
                  }
                >
                  {item.icon && <item.icon size={isMobile ? 16 : 18} />}
                  <span className="font-medium text-sm">
                    {isMobile && item.mobileLabel ? item.mobileLabel : item.label}
                  </span>
                </NavLink>
              );
            }
            return null;
          })}
        </div>

        {/* Mobile Menu Toggle Button */}
        {isMobile && (
          <button
            onClick={() => setShowMobileMenu(true)}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 bg-[#e55a00] rounded-md"
            aria-label="Show all categories"
          >
            <Menu size={18} />
          </button>
        )}
      </div>

      {/* Mobile Full-Screen Menu */}
      {showMobileMenu && isMobile && (
        <>
          {/* Overlay */}
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-50"
            onClick={() => setShowMobileMenu(false)}
          />
          
          {/* Menu Panel */}
          <div className="fixed inset-y-0 right-0 w-full sm:w-96 bg-white z-50 transform transition-transform duration-300 ease-out">
            {/* Menu Header */}
            <div className="bg-[#FF9946] text-white p-4 flex items-center justify-between">
              <h2 className="text-xl font-bold">All Categories</h2>
              <button
                onClick={() => setShowMobileMenu(false)}
                className="p-2 hover:bg-[#e55a00] rounded-md"
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>

            {/* Menu Content */}
            <div className="p-4 overflow-y-auto h-[calc(100vh-64px)]">
              <div className="grid grid-cols-2 gap-3">
                {navigationItems.map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    onClick={() => setShowMobileMenu(false)}
                    className={({ isActive }) =>
                      `flex flex-col items-center justify-center p-4 rounded-lg border transition-all ${
                        isActive 
                          ? 'bg-[#FF9946] text-white border-[#FF9946]' 
                          : 'bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100 hover:border-gray-300'
                      }`
                    }
                  >
                    <item.icon size={24} className="mb-2" />
                    <span className="text-sm font-medium text-center">
                      {item.mobileLabel || item.label}
                    </span>
                  </NavLink>
                ))}
              </div>

              {/* Additional Categories */}
              <div className="mt-8">
                <h3 className="text-lg font-bold text-gray-800 mb-4">More Categories</h3>
                <div className="space-y-2">
                  {[
                    "Fashion",
                    "Home & Kitchen", 
                    "Beauty & Personal Care",
                    "Sports & Outdoors",
                    "Toys & Games",
                    "Automotive",
                    "Health & Household",
                    "Pet Supplies",
                    "Baby Products",
                    "Movies & TV"
                  ].map((category) => (
                    <button
                      key={category}
                      className="w-full text-left p-3 rounded-lg hover:bg-gray-100 text-gray-700 transition-colors"
                      onClick={() => {
                        setShowMobileMenu(false);
                        // Add navigation logic here
                      }}
                    >
                      <span className="font-medium">{category}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Settings Section */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h3 className="text-lg font-bold text-gray-800 mb-4">Settings</h3>
                <div className="space-y-3">
                  <button className="flex items-center justify-between w-full p-3 rounded-lg hover:bg-gray-100">
                    <span className="text-gray-700">Language Settings</span>
                    <span className="text-[#FF9946] font-medium">English</span>
                  </button>
                  <button className="flex items-center justify-between w-full p-3 rounded-lg hover:bg-gray-100">
                    <span className="text-gray-700">Location</span>
                    <span className="text-[#FF9946] font-medium">Ethiopia</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Scroll Indicator for Mobile */}
      {isMobile && (
        <div className="h-1 bg-gray-200 w-full">
          <div 
            className="h-full bg-[#e55a00] transition-all duration-300"
            style={{ 
              width: `${(navRef.current?.scrollLeft || 0) / (navRef.current?.scrollWidth || 1) * 100}%` 
            }}
          />
        </div>
      )}
    </div>
  );
};

export default LowerHeader;