import { NavLink, Link } from 'react-router-dom';
import React, { useContext, useState } from 'react';
import { 
  MapPin, 
  Search, 
  ChevronDown, 
  ShoppingCart,
  Menu 
} from 'lucide-react';
import { DataContext, DataProvider } from '../DataProvider/DataProvider';

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const[{basket}, dispatch] = useContext(DataContext)
  console.log(basket)
  return (
    <>
      {/* Top Black Bar */}
      <header className="bg-[#FF6200] text-white">
        <div className="flex items-center justify-between px-2 sm:px-4 py-2 max-w-screen-2xl mx-auto">
          
          {/* Left Section: Logo + Delivery */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden p-2 hover:border border-white rounded-sm transition-all"
              onClick={() => setShowMobileMenu(!showMobileMenu)}
            >
              <Menu size={20} />
            </button>

            {/* Amazon Logo */}
            <Link 
              to="/" 
              className="flex items-center hover:border border-white rounded-sm transition-all p-1"
            >
              <img 
                src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" 
                alt="Amazon Logo" 
                className="h-6 sm:h-8 w-auto object-contain"
              />
            </Link>

            {/* Delivery Location */}
            <NavLink 
              to="/location" 
              className="hidden sm:flex items-center space-x-1 hover:border border-white px-2 py-1.5 rounded-sm transition-all"
            >
              <MapPin size={18} className="text-gray-200" />
              <div className="text-xs leading-tight">
                <p className="text-gray-300">Deliver to</p>
                <p className="font-bold text-sm">Ethiopia</p>
              </div>
            </NavLink>
          </div>

          {/* Center: Search Bar */}
          <div className="flex flex-1 max-w-2xl mx-2 sm:mx-4">
            <div className="flex w-full">
              <select className="hidden sm:block bg-gray-100 text-gray-800 text-xs px-2 py-2.5 rounded-l-md border border-r-0 border-gray-300 hover:bg-gray-200 transition cursor-pointer">
                <option>All</option>
                <option>All Departments</option>
                <option>Books</option>
                <option>Electronics</option>
              </select>
              <input 
                type="text" 
                placeholder="Search Amazon" 
                className="flex-1 px-3 py-2 bg-white text-black text-sm outline-none border border-gray-300"
              />
              <button className="bg-[#febd69] hover:bg-[#f3a847] px-3 sm:px-4 rounded-r-md transition-all">
                <Search size={20} className="text-gray-800" />
              </button>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-1 sm:space-x-2 lg:space-x-4">
            
            {/* Account & Lists */}
            <NavLink 
              to="/auth" 
              className={({ isActive }) => 
                `hidden sm:block hover:border border-white px-2 py-1.5 rounded-sm transition-all ${isActive ? 'border border-white' : ''}`
              }
            >
              <p className="text-xs text-gray-300">Hello, sign in</p>
              <p className="font-bold text-sm flex items-center">
                Account & Lists <ChevronDown size={14} className="inline ml-1" />
              </p>
            </NavLink>

            {/* Returns & Orders */}
            <NavLink 
              to="/orders" 
              className={({ isActive }) => 
                `hidden sm:block hover:border border-white px-2 py-1.5 rounded-sm transition-all ${isActive ? 'border border-white' : ''}`
              }
            >
              <p className="text-xs text-gray-300">Returns</p>
              <p className="font-bold text-sm">& Orders</p>
            </NavLink>

            {/* Cart */}
            <NavLink 
              to="/cart" 
              className={({ isActive }) => 
                `relative flex items-center px-2 py-1.5 rounded-sm transition-all ${isActive ? 'border border-white' : 'hover:border border-white'}`
              }
            >
              <div className="relative">
                <ShoppingCart size={32} strokeWidth={1.5} />
                <span className="absolute -top-1 -right-2 bg-[#ff9900] text-[#131921] font-bold rounded-full w-5 h-5 text-xs flex items-center justify-center">
                  {basket.length}
                </span>
              </div>
              <span className="hidden sm:block font-bold text-sm ml-1 mt-2">Cart</span>
            </NavLink>
          </div>
        </div>

        {/* Mobile Search Bar - Shows on small screens */}
        <div className="sm:hidden px-2 pb-2">
          <div className="flex">
            <input 
              type="text" 
              placeholder="Search Amazon" 
              className="flex-1 px-3 py-2 bg-white text-black text-sm outline-none border border-gray-300 rounded-l-md"
            />
            <button className="bg-[#febd69] hover:bg-[#f3a847] px-3 rounded-r-md transition-all">
              <Search size={20} className="text-gray-800" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {showMobileMenu && (
        <div className="lg:hidden bg-[#232f3e] text-white p-4">
          <div className="space-y-4">
            <NavLink to="/account" className="block py-2 border-b border-gray-600">
              <p className="text-sm text-gray-300">Hello, sign in</p>
              <p className="font-bold">Account & Lists</p>
            </NavLink>
            <NavLink to="/orders" className="block py-2 border-b border-gray-600">
              <p className="text-sm text-gray-300">Returns</p>
              <p className="font-bold">& Orders</p>
            </NavLink>
            <NavLink to="/location" className="block py-2 border-b border-gray-600">
              <p className="font-bold">Deliver to Ethiopia</p>
            </NavLink>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;