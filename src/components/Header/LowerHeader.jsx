import { NavLink, Link } from 'react-router-dom';
import React from 'react';
import { 
  Menu,
  MapPin
} from 'lucide-react';

const LowerHeader = () => {
  return (
    <div>
      {/* Bottom Navigation Bar */}
      <div className="bg-[#FF9946] px-2 sm:px-4 py-2 flex items-center space-x-2 sm:space-x-4 text-sm text-white overflow-x-auto">
        {/* All Categories */}
        <NavLink
          to="/categories"
          className="flex items-center space-x-1 hover:border border-white px-2 py-1.5 rounded-sm transition-all whitespace-nowrap flex-shrink-0"
        >
          <Menu size={18} />
          <span className="font-bold hidden sm:inline">All</span>
          <span className="font-bold sm:hidden">Menu</span>
        </NavLink>

        {/* Mobile Delivery */}
        <NavLink
          to="/location"
          className="sm:hidden flex items-center space-x-1 hover:border border-white px-2 py-1.5 rounded-sm transition-all whitespace-nowrap flex-shrink-0"
        >
          <MapPin size={16} />
          <span className="text-xs">Delivery</span>
        </NavLink>

        {/* Navigation Links */}
        <NavLink
          to="/deals"
          className="hover:border border-white px-2 py-1.5 rounded-sm transition-all whitespace-nowrap flex-shrink-0"
        >
          Today's Deals
        </NavLink>

        <NavLink
          to="/customer-service"
          className="hover:border border-white px-2 py-1.5 rounded-sm transition-all whitespace-nowrap flex-shrink-0"
        >
          Customer Service
        </NavLink>

        <NavLink
          to="/registry"
          className="hidden md:block hover:border border-white px-2 py-1.5 rounded-sm transition-all whitespace-nowrap flex-shrink-0"
        >
          Registry
        </NavLink>

        <NavLink
          to="/gift-cards"
          className="hidden lg:block hover:border border-white px-2 py-1.5 rounded-sm transition-all whitespace-nowrap flex-shrink-0"
        >
          Gift Cards
        </NavLink>

        <NavLink
          to="/sell"
          className="hidden lg:block hover:border border-white px-2 py-1.5 rounded-sm transition-all whitespace-nowrap flex-shrink-0"
        >
          Sell
        </NavLink>

        <NavLink
          to="/electronics"
          className="hidden md:block hover:border border-white px-2 py-1.5 rounded-sm transition-all whitespace-nowrap flex-shrink-0"
        >
          Electronics
        </NavLink>

        <NavLink
          to="/books"
          className="hidden sm:block hover:border border-white px-2 py-1.5 rounded-sm transition-all whitespace-nowrap flex-shrink-0"
        >
          Books
        </NavLink>
      </div>
    </div>
  );
};

export default LowerHeader;