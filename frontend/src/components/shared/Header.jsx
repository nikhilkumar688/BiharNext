import React from 'react';
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { Button } from '../ui/button';

const Header = () => {
  return (
    <header className="shadow-lg sticky top-0 bg-white z-50">
      <div className="flex justify-between items-center max-w-6xl lg:max-w-7xl mx-auto px-4 py-3">
        
        {/* Logo */}
        <Link to={"/"}>
          <h1 className="font-bold text-xl sm:text-2xl flex items-center">
            <span className="text-red-500">Bihar</span>
            <span className="text-slate-900">Next</span>
          </h1>
        </Link>

        {/* Search Bar */}
        <form className="bg-slate-100 rounded-lg flex items-center px-3 py-1">
          <input
            type="text"
            placeholder="Search..."
            className="focus:outline-none bg-transparent w-24 sm:w-64"
          />
          <button type="submit">
            <FaSearch className="text-slate-600" />
          </button>
        </form>

        {/* Navigation Links */}
        <ul className="flex items-center gap-4">
          <li className="hidden lg:inline text-slate-700 hover:underline">
            <Link to="/">Home</Link>
          </li>
          <li className="hidden lg:inline text-slate-700 hover:underline">
            <Link to="/about">About</Link>
          </li>
          <li className="hidden lg:inline text-slate-700 hover:underline">
            <Link to="/news">NewsArticle</Link>
          </li>
          <li>
            <Link to="/sign-in">
              <Button>Sign In</Button>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
