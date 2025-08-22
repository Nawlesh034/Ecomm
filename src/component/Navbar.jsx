import React, { useEffect, useState } from "react";
import feather from "feather-icons";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    feather.replace();
  }, [mobileMenuOpen]);

  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        
        {/* Left: Logo */}
        <div className="flex items-center space-x-2">
          <img
            src="https://via.placeholder.com/30"
            alt="Logo"
            className="w-8 h-8"
          />
          <span className="text-xl font-bold">Glamics</span>
        </div>

        {/* Center: Search Bar */}
        <div className="hidden md:flex flex-1 max-w-xl mx-6">
          <div className="flex items-center border border-gray-300 rounded-full px-3 py-2 w-full">
            <select className="text-gray-600 text-sm outline-none bg-transparent">
              <option>Select Category</option>
              <option>Women</option>
              <option>Men</option>
              <option>Kids</option>
            </select>
            <input
              type="text"
              placeholder="Search Here"
              className="flex-1 px-3 outline-none bg-transparent text-sm"
            />
            <i data-feather="search" className="text-gray-500 w-5 h-5"></i>
          </div>
        </div>

        {/* Right: Links + Icons */}
        <div className="flex items-center space-x-6">
          {/* Desktop Nav */}
          <nav className="hidden lg:flex space-x-6 font-medium text-sm text-gray-700">
            <a href="#" className="hover:text-pink-600">HOME</a>
            <a href="#" className="hover:text-pink-600">SHOP</a>
            <a href="#" className="hover:text-pink-600">WOMEN</a>
            <a href="#" className="hover:text-pink-600">MEN'S</a>
            <a href="#" className="hover:text-pink-600">KIDS</a>
            <a href="#" className="hover:text-pink-600">BLOG</a>
            <a href="#" className="hover:text-pink-600">PAGES</a>
          </nav>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            <i data-feather="user" className="w-5 h-5 cursor-pointer"></i>
            <i data-feather="heart" className="w-5 h-5 cursor-pointer"></i>
            <i data-feather="shopping-bag" className="w-5 h-5 cursor-pointer"></i>
            <i
              data-feather="menu"
              className="w-6 h-6 cursor-pointer lg:hidden"
              onClick={() => setMobileMenuOpen(true)}
            ></i>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 lg:hidden">
          <div className="bg-white w-72 h-full shadow-lg p-6 flex flex-col">
            <div className="flex justify-between items-center mb-6">
              <span className="text-xl font-bold">Menu</span>
              <i
                data-feather="x"
                className="w-6 h-6 cursor-pointer"
                onClick={() => setMobileMenuOpen(false)}
              ></i>
            </div>
            <nav className="flex flex-col space-y-4 text-gray-700 font-medium">
              <a href="#" className="hover:text-pink-600">HOME</a>
              <a href="#" className="hover:text-pink-600">SHOP</a>
              <a href="#" className="hover:text-pink-600">WOMEN</a>
              <a href="#" className="hover:text-pink-600">MEN'S</a>
              <a href="#" className="hover:text-pink-600">KIDS</a>
              <a href="#" className="hover:text-pink-600">BLOG</a>
              <a href="#" className="hover:text-pink-600">PAGES</a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
