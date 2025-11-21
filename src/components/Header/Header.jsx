import { NavLink, Link } from 'react-router-dom';
import React from 'react';
import { 
  MapPin, 
  Search, 
  Globe, 
  ChevronDown, 
  ShoppingCart,
  Menu 
} from 'lucide-react';

const Header = () => {
  return (
    <>
      {/* Top Black Bar */}
      <header className="bg-[#FF6200] text-white">
        <div className="flex items-center justify-between px-3 py-2 max-w-screen-2xl mx-auto">
          
          {/* Left Section: Logo + Delivery */}
          <div className="flex items-center space-x-6">
            {/* Amazon Logo - Use Link for home */}
            <Link 
              to="/" 
              className="flex items-center hover:border border-white rounded-sm transition-all"
            >
              <img 
                src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" 
                alt="Amazon Logo" 
                className="h-12 w-auto object-contain"
              />
            </Link>

            {/* Delivery Location - You can make this open a modal or go to location page later */}
            <NavLink 
              to="/location" 
              className="hidden md:flex items-center space-x-1 hover:border border-white px-1 py-2 rounded-sm transition-all aria-current:page:border-white"
            >
              <MapPin size={20} className="text-gray-300" />
              <div className="text-xs leading-tight">
                <p className="text-gray-300">Deliver to</p>
                <p className="font-bold">Ethiopia</p>
              </div>
            </NavLink>
          </div>

          {/* Center: Search Bar */}
          <div className="flex flex-1 max-w-4xl mx-4">
            <select className="hidden sm:block bg-gray-200 text-gray-800 text-sm px-2 py-[9px] rounded-l-md border border-r-0 border-gray-300 hover:bg-gray-300 transition">
              <option>All</option>
              <option>All Departments</option>
              <option>Books</option>
              <option>Electronics</option>
            </select>
            <input 
              type="text" 
              placeholder="Search Amazon" 
              className="flex-1 px-4 py-[7px] bg-white text-black outline-none"
            />
            <button className="bg-orange-400 hover:bg-orange-500 px-4 rounded-r-md transition-all">
              <Search size={22} className="text-black" />
            </button>
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-4 lg:space-x-6">
            
            {/* Language Selector (kept as div since it's a dropdown, not navigation) */}
            <div className="hidden lg:flex items-center hover:border border-white px-1 py-1 rounded-sm transition-all cursor-pointer">
              <Globe size={20} />
              <select className="bg-transparent text-sm font-bold outline-none appearance-none">
                <option>EN</option>
              </select>
              <ChevronDown size={16} className="-ml-2" />
            </div>

            {/* Account & Lists */}
            <NavLink 
              to="/account" 
              className={({ isActive }) => 
                `hidden lg:block hover:border border-white px-1 py-1 rounded-sm transition-all ${isActive ? 'border border-white' : ''}`
              }
            >
              <p className="text-xs">Hello, sign in</p>
              <p className="font-bold text-sm flex items-center">
                Account & Lists <ChevronDown size={16} className="inline ml-1" />
              </p>
            </NavLink>

            {/* Returns & Orders */}
            <NavLink 
              to="/orders" 
              className={({ isActive }) => 
                `hidden lg:block hover:border border-white px-1 py-1 rounded-sm transition-all ${isActive ? 'border border-white' : ''}`
              }
            >
              <p className="text-xs">Returns</p>
              <p className="font-bold text-sm">& Orders</p>
            </NavLink>

            {/* Cart - Highlights when on /cart */}
            <NavLink 
              to="/cart" 
              className={({ isActive }) => 
                `relative flex items-center px-1 py-1 rounded-sm transition-all ${isActive ? 'border border-white' : 'hover:border border-white'}`
              }
            >
              <ShoppingCart size={36} strokeWidth={1.5} />
              <span className="absolute top-0 left-6 bg-orange-400 text-black font-bold rounded-full w-5 h-5 text-xs flex items-center justify-center">
                0
              </span>
              <span className="hidden sm:block font-bold text-sm ml-1">Cart</span>
            </NavLink>
          </div>
        </div>

      </header>
    </>
  );
};

export default Header;