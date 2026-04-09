import React from 'react';
import { 
  LayoutDashboard, 
  Users, 
  Store, 
  Bike, 
  ShoppingCart, 
  Ticket, 
  Settings 
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const menuItems = [
  { name: 'Dashboard', icon: LayoutDashboard, path: '/admin/dashboard' },
  { name: 'Clients', icon: Users, path: '/admin/clients' },
  { name: 'Vendors', icon: Store, path: '/admin/vendors' },
  { name: 'Delivery Man', icon: Bike, path: '/admin/delivery-man' },
  { name: 'Orders', icon: ShoppingCart, path: '/admin/orders' },
  { name: 'Tickets', icon: Ticket, path: '/admin/tickets' },
  { name: 'Settings', icon: Settings, path: '/admin/settings' },
];

export default function Sidebar({ isOpen, toggleSidebar }) {
  const location = useLocation();

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={toggleSidebar}
        />
      )}
      
      <aside 
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-gray-200 transform transition-transform duration-300 ease-in-out lg:static lg:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="h-full flex flex-col">
          {/* Logo Area */}
          <div className="h-16 flex items-center justify-center border-b border-gray-100">
            <h1 className="text-2xl font-bold tracking-widest text-gray-900 uppercase">
              QUICKIE
            </h1>
          </div>
          
          {/* Menu Items */}
          <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
            {menuItems.map((item) => {
              const isActive = location.pathname.startsWith(item.path);
              const Icon = item.icon;
              
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`flex items-center px-4 py-3 text-sm font-medium rounded-xl transition-all duration-200 group ${
                    isActive 
                      ? 'bg-primary/10 text-primary' 
                      : 'text-gray-600 hover:bg-gray-50 hover:text-primary'
                  }`}
                >
                  <Icon 
                    className={`mr-3 h-5 w-5 transition-colors ${
                      isActive ? 'text-primary' : 'text-gray-400 group-hover:text-primary'
                    }`} 
                  />
                  {item.name}
                </Link>
              );
            })}
          </nav>
        </div>
      </aside>
    </>
  );
}
