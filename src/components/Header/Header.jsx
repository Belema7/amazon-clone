import { NavLink, Link, useNavigate } from 'react-router-dom';
import React, { useContext, useState, useEffect } from 'react';
import {
  MapPin,
  Search,
  ChevronDown,
  ShoppingCart,
  Menu,
  X,
  User,
  Package,
  Home,
} from 'lucide-react';
import { DataContext } from '../DataProvider/DataProvider';
import { auth } from '../Utility/firebase';
import { signOut } from 'firebase/auth';
import { Type } from '../Utility/action.type';

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);
  const [{ basket, user }, dispatch] = useContext(DataContext);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
      if (window.innerWidth >= 640) {
        setShowSearch(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      dispatch({ type: Type.SET_USER, user: null });
      navigate('/');
      setShowMobileMenu(false);
    } catch (err) {
      console.error('Sign out error:', err);
    }
  };

  return (
    <>
      {/* Top Header */}
      <header className="bg-[#FF6200] text-white sticky top-0 z-50">
        <div className="flex items-center justify-between px-3 sm:px-4 py-2 max-w-screen-2xl mx-auto">
          {/* Left Section - Mobile Hamburger & Logo */}
          <div className="flex items-center space-x-3 sm:space-x-4">
            <button
              className="sm:hidden p-2 hover:bg-[#e55a00] rounded-md transition-all"
              onClick={() => setShowMobileMenu(!showMobileMenu)}
              aria-label="Menu"
            >
              {showMobileMenu ? <X size={22} /> : <Menu size={22} />}
            </button>

            <Link
              to="/"
              className="flex items-center hover:opacity-90 transition-all"
              onClick={() => setShowMobileMenu(false)}
            >
              <img
                src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt="Amazon Logo"
                className="h-7 sm:h-8 w-auto object-contain"
              />
              {isMobile && (
                <span className="text-xs ml-1 font-semibold text-gray-100">
                  .in
                </span>
              )}
            </Link>

            {/* Deliver to - Desktop */}
            <NavLink
              to="/location"
              className="hidden sm:flex items-center space-x-1 hover:bg-[#e55a00] px-3 py-2 rounded-md transition-all"
            >
              <MapPin size={18} className="text-gray-200" />
              <div className="text-xs leading-tight">
                <p className="text-gray-300">Deliver to</p>
                <p className="font-bold text-sm">Ethiopia</p>
              </div>
            </NavLink>
          </div>

          {/* Search Bar - Desktop */}
          <div className="hidden sm:flex flex-1 max-w-2xl mx-4">
            <div className="flex w-full">
              <select className="bg-gray-100 text-gray-800 text-xs px-3 py-2.5 rounded-l-md border border-r-0 border-gray-300 hover:bg-gray-200 cursor-pointer">
                <option>All</option>
                <option>All Departments</option>
                <option>Books</option>
                <option>Electronics</option>
              </select>
              <input
                type="text"
                placeholder="Search Amazon"
                className="flex-1 px-4 py-2 bg-white text-black text-sm outline-none border border-gray-300"
              />
              <button className="bg-[#febd69] hover:bg-[#f3a847] px-4 rounded-r-md transition-all">
                <Search size={20} className="text-gray-800" />
              </button>
            </div>
          </div>

          {/* Mobile Search Toggle */}
          {isMobile && !showSearch && (
            <button
              onClick={() => setShowSearch(true)}
              className="flex-1 max-w-xs mx-3"
              aria-label="Search"
            >
              <div className="flex items-center bg-[#f5f5f5] rounded-md px-3 py-2">
                <Search size={18} className="text-gray-500 mr-2" />
                <span className="text-gray-500 text-sm truncate">
                  Search Amazon
                </span>
              </div>
            </button>
          )}

          {/* Right Section - Icons */}
          <div className="flex items-center space-x-3 sm:space-x-4">
            {/* Account - Desktop */}
            {user ? (
              <div className="hidden sm:flex flex-col px-3 py-2 hover:bg-[#e55a00] rounded-md cursor-pointer">
                <p className="text-xs text-gray-300">Hello, {user?.email?.split('@')[0]}</p>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-sm flex items-center">
                    Account & Lists <ChevronDown size={14} className="ml-1" />
                  </span>
                  <button
                    onClick={handleSignOut}
                    className="text-xs ml-2 text-gray-200 hover:text-gray-100"
                  >
                    Sign Out
                  </button>
                </div>
              </div>
            ) : (
              <NavLink
                to="/auth"
                className={({ isActive }) =>
                  `hidden sm:flex flex-col hover:bg-[#e55a00] px-3 py-2 rounded-md transition-all ${isActive ? 'bg-[#e55a00]' : ''}`
                }
              >
                <p className="text-xs text-gray-300">Hello, sign in</p>
                <p className="font-bold text-sm flex items-center">
                  Account & Lists <ChevronDown size={14} className="ml-1" />
                </p>
              </NavLink>
            )}

            {/* Orders - Desktop */}
            <NavLink
              to="/orders"
              className={({ isActive }) =>
                `hidden sm:flex flex-col hover:bg-[#e55a00] px-3 py-2 rounded-md transition-all ${isActive ? 'bg-[#e55a00]' : ''}`
              }
            >
              <p className="text-xs text-gray-300">Returns</p>
              <p className="font-bold text-sm">& Orders</p>
            </NavLink>

            {/* Mobile Icons */}
            {isMobile && (
              <>
                <NavLink
                  to="/auth"
                  className={({ isActive }) =>
                    `p-2 rounded-md ${isActive ? 'bg-[#e55a00]' : 'hover:bg-[#e55a00]'}`
                  }
                >
                  <User size={22} />
                </NavLink>
                <NavLink
                  to="/orders"
                  className={({ isActive }) =>
                    `p-2 rounded-md ${isActive ? 'bg-[#e55a00]' : 'hover:bg-[#e55a00]'}`
                  }
                >
                  <Package size={22} />
                </NavLink>
              </>
            )}

            {/* Cart - Always Visible */}
            <NavLink
              to="/cart"
              className={({ isActive }) =>
                `relative flex items-center p-2 rounded-md transition-all ${isActive ? 'bg-[#e55a00]' : 'hover:bg-[#e55a00]'}`
              }
              onClick={() => {
                setShowMobileMenu(false);
                setShowSearch(false);
              }}
            >
              <div className="relative">
                <ShoppingCart size={isMobile ? 26 : 32} strokeWidth={1.5} />
                <span className="absolute -top-1 -right-1 bg-[#ff9900] text-[#131921] font-bold rounded-full w-5 h-5 text-xs flex items-center justify-center">
                  {basket.length}
                </span>
              </div>
              {!isMobile && (
                <span className="font-bold text-sm ml-1 mt-1">Cart</span>
              )}
            </NavLink>
          </div>
        </div>

        {/* Mobile Search Expanded */}
        {showSearch && isMobile && (
          <div className="sm:hidden px-3 py-2 bg-[#FF6200] border-t border-[#e55a00]">
            <div className="flex items-center">
              <button
                onClick={() => setShowSearch(false)}
                className="p-2 mr-2 hover:bg-[#e55a00] rounded-md"
                aria-label="Close search"
              >
                <X size={20} />
              </button>
              <div className="flex flex-1">
                <input
                  type="text"
                  placeholder="What are you looking for?"
                  className="flex-1 px-4 py-3 bg-white text-black text-base outline-none border border-gray-300 rounded-l-md"
                  autoFocus
                />
                <button className="bg-[#febd69] hover:bg-[#f3a847] px-4 rounded-r-md transition-all">
                  <Search size={22} className="text-gray-800" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Deliver to - Mobile (if not showing search) */}
        {!showSearch && isMobile && (
          <div className="sm:hidden px-3 py-2 bg-[#FF6200] border-t border-[#e55a00]">
            <NavLink
              to="/location"
              className="flex items-center space-x-2 text-sm"
              onClick={() => setShowMobileMenu(false)}
            >
              <MapPin size={16} className="text-gray-200" />
              <span className="font-medium">Deliver to Ethiopia</span>
            </NavLink>
          </div>
        )}
      </header>

      {/* Mobile Menu Overlay */}
      {showMobileMenu && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
            onClick={() => setShowMobileMenu(false)}
          />
          <div className="fixed top-0 left-0 h-full w-80 bg-white text-black z-50 lg:hidden overflow-y-auto shadow-2xl">
            {/* Menu Header */}
            <div className="bg-[#232f3e] text-white p-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                  {user ? (
                    <span className="font-bold text-lg">
                      {user.email?.charAt(0).toUpperCase()}
                    </span>
                  ) : (
                    <User size={22} />
                  )}
                </div>
                <div>
                  {user ? (
                    <>
                      <p className="font-bold">Hello, {user.email?.split('@')[0]}</p>
                      <button
                        onClick={handleSignOut}
                        className="text-sm text-gray-300 hover:text-white mt-1"
                      >
                        Sign Out
                      </button>
                    </>
                  ) : (
                    <>
                      <p className="font-bold">Hello, sign in</p>
                      <NavLink
                        to="/auth"
                        className="text-sm text-gray-300 hover:text-white block mt-1"
                        onClick={() => setShowMobileMenu(false)}
                      >
                        Sign in / Register
                      </NavLink>
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* Menu Content */}
            <div className="p-4">
              <h3 className="font-bold text-lg mb-4">Menu</h3>
              
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `flex items-center space-x-3 p-3 rounded-lg mb-2 ${isActive ? 'bg-gray-100' : 'hover:bg-gray-50'}`
                }
                onClick={() => setShowMobileMenu(false)}
              >
                <Home size={20} className="text-gray-600" />
                <span className="font-medium">Home</span>
              </NavLink>

              <NavLink
                to="/orders"
                className={({ isActive }) =>
                  `flex items-center space-x-3 p-3 rounded-lg mb-2 ${isActive ? 'bg-gray-100' : 'hover:bg-gray-50'}`
                }
                onClick={() => setShowMobileMenu(false)}
              >
                <Package size={20} className="text-gray-600" />
                <span className="font-medium">Your Orders</span>
              </NavLink>

              <NavLink
                to="/location"
                className={({ isActive }) =>
                  `flex items-center space-x-3 p-3 rounded-lg mb-2 ${isActive ? 'bg-gray-100' : 'hover:bg-gray-50'}`
                }
                onClick={() => setShowMobileMenu(false)}
              >
                <MapPin size={20} className="text-gray-600" />
                <span className="font-medium">Your Addresses</span>
              </NavLink>

              {/* Departments Section */}
              <div className="mt-8">
                <h4 className="font-bold text-gray-700 mb-3">Shop by Department</h4>
                <div className="space-y-2">
                  {['Electronics', 'Books', 'Fashion', 'Home & Kitchen', 'Beauty', 'Sports'].map(
                    (dept) => (
                      <button
                        key={dept}
                        className="block w-full text-left p-2 hover:bg-gray-50 rounded"
                        onClick={() => {
                          setShowMobileMenu(false);
                          // Add navigation logic for departments
                        }}
                      >
                        {dept}
                      </button>
                    )
                  )}
                </div>
              </div>

              {/* Settings Section */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h4 className="font-bold text-gray-700 mb-3">Settings</h4>
                <div className="space-y-2">
                  <button className="block w-full text-left p-2 hover:bg-gray-50 rounded">
                    Language: English
                  </button>
                  <button className="block w-full text-left p-2 hover:bg-gray-50 rounded">
                    Country: Ethiopia
                  </button>
                  <button className="block w-full text-left p-2 hover:bg-gray-50 rounded">
                    Customer Service
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Header;