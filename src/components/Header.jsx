import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-0.5 flex flex-col sm:flex-row items-center justify-between">
        
        {/* Logo and Brand */}
        <Link to="/" className="flex items-center mb-2 sm:mb-0">
          <img
            src="https://scontent-maa2-2.xx.fbcdn.net/v/t39.30808-6/489822642_1771778970045591_9205987879831846534_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=3fUyD8_ayTMQ7kNvwFGtmh0&_nc_oc=AdlvfgZd6HXtbrTFhs5VP_LzCkhQKXpHltTxEPn5hSCmKRqmcZZnL8nrzFmLSAOGz30&_nc_zt=23&_nc_ht=scontent-maa2-2.xx&_nc_gid=HrvijvD9xGsZ9FGCgJBy_g&oh=00_AfG4VwDpEcyaFp8ftb3-CAliFjpeBjL9HEdnq6izfVEqXA&oe=67F936EE"
            alt="Company Logo"
            className="h-11 w-auto mr-3"
          />
          <span className="text-xl font-bold text-blue-600">Schoice</span>
        </Link>

        {/* Navigation Links and Telegram Button */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 items-center text-gray-700 font-medium text-center">
          <nav className="flex flex-wrap justify-center gap-3 sm:gap-4">
            <Link to="/" className="hover:text-blue-600">Home</Link>
            <Link to="/shirts" className="hover:text-blue-600">Shirts</Link>
            <Link to="/jeans" className="hover:text-blue-600">Jeans</Link>
            <Link to="/womenwear" className="hover:text-blue-600">Women</Link>
            <Link to="/electronics" className="hover:text-blue-600">Electronics</Link>
            <Link to="/admin" className="hover:text-red-500 font-semibold">Admin</Link>
          </nav>

          {/* Telegram Button */}
          <a
            href="https://t.me/schoice3"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap"
          >
            Join Telegram
          </a>
        </div>
      </div>
    </header>
  );
}
