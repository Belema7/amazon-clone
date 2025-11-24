import { NavLink, Link } from 'react-router-dom';
import React from 'react';
import { 
  Menu 
} from 'lucide-react';

const LowerHeader = () => {
  return (
    <div>
      {/* Bottom Navigation Bar */}
      <div className="bg-[#FF9946] px-3 py-2 flex items-center space-x-6 text-sm">
        <NavLink
          to="/categories"
          className="flex items-center space-x-2 hover:border border-white px-2 py-1 rounded-sm transition-all aria-current:page:border-white"
        >
          <Menu size={20} />
          <span className="font-bold">All</span>
        </NavLink>

        <NavLink
          to="/deals"
          className="hover:border border-white px-2 py-1 rounded-sm hidden md:block transition-all"
        >
          Today's Deals
        </NavLink>

        <NavLink
          to="/help"
          className="hover:border border-white px-2 py-1 rounded-sm hidden md:block transition-all"
        >
          Customer Service
        </NavLink>

        <NavLink
          to="/registry"
          className="hover:border border-white px-2 py-1 rounded-sm hidden lg:block transition-all"
        >
          Registry
        </NavLink>

        <NavLink
          to="/gift-cards"
          className="hover:border border-white px-2 py-1 rounded-sm hidden lg:block transition-all"
        >
          Gift Cards
        </NavLink>

        <NavLink
          to="/sell"
          className="hover:border border-white px-2 py-1 rounded-sm hidden xl:block transition-all"
        >
          Sell
        </NavLink>
      </div>
    </div>
  );
};

export default LowerHeader;
