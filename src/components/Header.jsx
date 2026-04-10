import React from 'react';
import { Search, Bell, ChevronDown, Menu } from 'lucide-react';

export default function Header({ toggleSidebar }) {
  return (
    <header className="h-20 bg-white border-b border-gray-100 flex items-center justify-between px-6 sticky top-0 z-30">
      {/* Left Section: Mobile Menu Toggle & Search */}
      <div className="flex items-center flex-1">
        <button 
          onClick={toggleSidebar}
          className="mr-4 text-gray-500 hover:text-[#C08B3E] lg:hidden transition-colors"
        >
          <Menu className="h-6 w-6" />
        </button>
        
        {/* Wide Search Bar */}
        <div className="hidden sm:flex items-center bg-white border border-gray-200 rounded-lg px-4 py-2 w-full max-w-xl transition-all focus-within:ring-2 focus-within:ring-[#C08B3E]/20 focus-within:border-[#C08B3E]">
          <Search className="h-5 w-5 text-gray-400 mr-2" />
          <input 
            type="text" 
            placeholder="Search" 
            className="bg-transparent border-none outline-none text-sm w-full text-gray-700 placeholder-gray-400"
          />
        </div>
      </div>

      {/* Right Section: Actions & Profile */}
      <div className="flex items-center space-x-4 pl-4">
        {/* Mobile Search Icon */}
        <button className="sm:hidden text-gray-400 hover:text-[#C08B3E] transition-colors">
          <Search className="h-5 w-5" />
        </button>
        
        {/* Notifications */}
        <div className="relative">
          <button className="flex items-center justify-center h-10 w-10 border border-gray-200 rounded-lg text-gray-400 hover:text-[#C08B3E] transition-colors relative">
            <Bell className="h-5 w-5" />
            <span className="absolute top-2 right-2 flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
            </span>
          </button>
        </div>

        {/* Profile Dropdown */}
        <div className="flex items-center pl-2 cursor-pointer group">
          <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden mr-3 border border-gray-100">
            <img src="https://i.pravatar.cc/100?img=11" alt="Profile" className="h-full w-full object-cover" />
          </div>
          <div className="hidden sm:block text-left mr-2">
            <p className="text-sm font-semibold text-gray-800">RR BROTHERS</p>
            <p className="text-xs text-gray-500">Super Admin</p>
          </div>
          <ChevronDown className="h-4 w-4 text-gray-400 group-hover:text-[#C08B3E] transition-colors" />
        </div>
      </div>
    </header>
  );
}
