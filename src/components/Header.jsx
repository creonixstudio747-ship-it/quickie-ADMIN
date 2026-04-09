import React from 'react';
import { Search, Bell, ChevronDown, Menu } from 'lucide-react';

export default function Header({ toggleSidebar }) {
  return (
    <header className="h-20 bg-white border-b border-gray-100 flex items-center justify-between px-6 sticky top-0 z-30">
      {/* Left Section: Greeting & Mobile Menu Toggle */}
      <div className="flex items-center">
        <button 
          onClick={toggleSidebar}
          className="mr-4 text-gray-500 hover:text-primary lg:hidden transition-colors"
        >
          <Menu className="h-6 w-6" />
        </button>
        <div>
          <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
            Welcome back, RR BROTHERS <span className="text-2xl">👋</span>
          </h2>
          <p className="text-sm text-gray-500 hidden sm:block">Here's your delivery platform report for today.</p>
        </div>
      </div>

      {/* Right Section: Actions & Profile */}
      <div className="flex items-center space-x-6">
        {/* Search */}
        <button className="text-gray-400 hover:text-primary transition-colors">
          <Search className="h-5 w-5" />
        </button>
        
        {/* Notifications */}
        <div className="relative">
          <button className="text-gray-400 hover:text-primary transition-colors relative">
            <Bell className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500 border-2 border-white"></span>
            </span>
          </button>
        </div>

        {/* Divider */}
        <div className="h-8 w-px bg-gray-200 hidden sm:block"></div>

        {/* Profile Dropdown */}
        <div className="flex items-center cursor-pointer group">
          <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold mr-3 border border-primary/10">
            RR
          </div>
          <div className="hidden sm:block text-right mr-2">
            <p className="text-sm font-semibold text-gray-800">RR BROTHERS</p>
            <p className="text-xs text-gray-500">Super Admin</p>
          </div>
          <ChevronDown className="h-4 w-4 text-gray-400 group-hover:text-primary transition-colors" />
        </div>
      </div>
    </header>
  );
}
