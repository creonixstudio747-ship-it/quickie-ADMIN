import React, { useState } from 'react';
import { Search, Download, Filter, ChevronDown, CheckSquare, Square } from 'lucide-react';
import { Link } from 'react-router-dom';

const mockOrders = [
  { id: '140', sl: '01', client: 'Mohamed Morad', date: '2026-04-15', restaurant: "Zack's", deliveryId: '#200120', price: 240, status: 'Delivered' },
  { id: '141', sl: '02', client: 'Mostafa Ashraf', date: '2026-04-15', restaurant: "Pizza King", deliveryId: '#200220', price: 410, status: 'Shipped' },
  { id: '142', sl: '03', client: 'Ali Ayman', date: '2026-04-15', restaurant: "Buffalo Burger", deliveryId: '#200150', price: 660, status: 'Delivered' },
  { id: '143', sl: '04', client: 'Fakry Mahmoud', date: '2026-04-16', restaurant: "KFC", deliveryId: '#200172', price: 311, status: 'Pending' },
  { id: '144', sl: '05', client: 'Wahed Mansour', date: '2026-04-16', restaurant: "Pizza Hut", deliveryId: '#200168', price: 290, status: 'Shipped' },
  { id: '145', sl: '06', client: 'Abdelrahman Ali', date: '2026-04-16', restaurant: "Pastaweesy", deliveryId: '#200110', price: 236, status: 'Delivered' },
  { id: '146', sl: '07', client: 'Nader Nabil', date: '2026-04-16', restaurant: "Mac", deliveryId: '#200151', price: 496, status: 'Pending' },
  { id: '147', sl: '08', client: 'Mostafa Zain', date: '2026-04-17', restaurant: "Pizza King", deliveryId: '#200219', price: 518, status: 'Shipped' },
  { id: '148', sl: '09', client: 'Mostafa Zain', date: '2026-04-17', restaurant: "Heart Attack", deliveryId: '#200125', price: 720, status: 'Delivered' },
  { id: '149', sl: '10', client: 'Amer ElMasry', date: '2026-04-17', restaurant: "Burger king", deliveryId: '#200140', price: 275, status: 'Pending' }
];

export default function OrdersList() {
  const [selectedOrders, setSelectedOrders] = useState([]);

  const toggleSelectAll = () => {
    if (selectedOrders.length === mockOrders.length) setSelectedOrders([]);
    else setSelectedOrders(mockOrders.map(o => o.id));
  };

  const toggleSelect = (id) => {
    if (selectedOrders.includes(id)) {
      setSelectedOrders(selectedOrders.filter(i => i !== id));
    } else {
      setSelectedOrders([...selectedOrders, id]);
    }
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case 'Delivered':
        return <span className="inline-flex items-center text-sm font-medium text-green-600">Delivered</span>;
      case 'Shipped':
        return <span className="inline-flex items-center text-sm font-medium text-blue-500">Shipped</span>;
      case 'Pending':
        return <span className="inline-flex items-center text-sm font-medium text-orange-400">Pending</span>;
      default:
        return <span>{status}</span>;
    }
  };

  return (
    <div className="p-8 pb-20">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800 tracking-tight">Orders Data</h1>
        <button className="mt-4 md:mt-0 bg-[#C08B3E] hover:bg-[#a8742b] text-white px-5 py-2.5 rounded-lg flex items-center gap-2 font-medium transition-colors shadow-sm">
          <span className="text-xl leading-none font-bold">+</span> Add New
        </button>
      </div>

      {/* Toolbar */}
      <div className="flex flex-col md:flex-row justify-between items-stretch md:items-center gap-4 mb-6">
        <div className="relative max-w-md w-full">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-[#C08B3E] focus:border-[#C08B3E] sm:text-sm transition-colors text-gray-700 outline-none"
            placeholder="Search"
          />
        </div>
        
        <div className="flex items-center gap-4 text-gray-700 font-medium">
          <button className="flex items-center gap-2 hover:text-[#C08B3E] transition-colors">
            <Download className="h-5 w-5" />
            <span className="text-sm">Export</span>
          </button>
          
          <button className="flex items-center gap-2 hover:text-[#C08B3E] transition-colors">
            <Filter className="h-5 w-5" />
            <span className="text-sm">Filter</span>
          </button>
          
          <div className="relative">
            <button className="flex items-center justify-between min-w-[140px] px-4 py-2 border border-gray-300 rounded-md bg-white hover:border-gray-400 transition-colors">
              <span className="text-sm text-gray-700">All Vendors</span>
              <ChevronDown className="h-4 w-4 text-gray-500" />
            </button>
          </div>
        </div>
      </div>

      {/* Table Container */}
      <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
        <div className="overflow-x-auto min-h-[500px]">
          <table className="w-full whitespace-nowrap">
            <thead>
              <tr className="border-b border-gray-200 bg-white">
                <th scope="col" className="px-6 py-4 text-left">
                  <button onClick={toggleSelectAll} className="text-gray-400 hover:text-gray-600 transition-colors">
                    {selectedOrders.length === mockOrders.length ? (
                      <CheckSquare className="h-5 w-5 text-[#C08B3E]" />
                    ) : (
                      <Square className="h-5 w-5" />
                    )}
                  </button>
                </th>
                <th scope="col" className="px-6 py-4 text-left text-sm font-semibold text-gray-500 uppercase tracking-wider">
                  Order ID
                </th>
                <th scope="col" className="px-6 py-4 text-left text-sm font-semibold text-gray-500 uppercase tracking-wider">
                  Client Name
                </th>
                <th scope="col" className="px-6 py-4 text-left text-sm font-semibold text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th scope="col" className="px-6 py-4 text-left text-sm font-semibold text-gray-500 uppercase tracking-wider">
                  Restaurant
                </th>
                <th scope="col" className="px-6 py-4 text-left text-sm font-semibold text-gray-500 uppercase tracking-wider">
                  Delivery ID
                </th>
                <th scope="col" className="px-6 py-4 text-left text-sm font-semibold text-gray-500 uppercase tracking-wider">
                  Price
                </th>
                <th scope="col" className="px-6 py-4 text-left text-sm font-semibold text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th scope="col" className="px-6 py-4 text-left text-sm font-semibold text-gray-500 uppercase tracking-wider">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {mockOrders.map((order, idx) => (
                <tr 
                  key={order.id} 
                  className={`border-b border-gray-100 last:border-none hover:bg-gray-50 transition-colors ${idx % 2 === 1 ? 'bg-[#FCF5ED]' : 'bg-white'}`}
                >
                  <td className="px-6 py-4">
                    <button onClick={() => toggleSelect(order.id)} className="text-gray-400 hover:text-gray-600 transition-colors">
                      {selectedOrders.includes(order.id) ? (
                        <CheckSquare className="h-5 w-5 text-[#C08B3E]" />
                      ) : (
                        <Square className="h-5 w-5" />
                      )}
                    </button>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-600">
                    {order.sl}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-800">
                    {order.client}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 font-medium tracking-tight">
                    {order.date}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-800">
                    {order.restaurant}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 font-bold">
                    {order.deliveryId}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 font-bold">
                    {order.price}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {getStatusBadge(order.status)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <Link 
                      to={`/admin/orders/view/${order.id}`}
                      className="px-4 py-1.5 border border-[#C08B3E] text-[#C08B3E] rounded-md font-semibold hover:bg-[#C08B3E] hover:text-white transition-colors block w-fit"
                    >
                      View
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      {/* Pagination Footer */}
      <div className="mt-4 flex items-center justify-between text-sm text-gray-600 font-medium px-2">
        <div>
          1 of 8 pages
        </div>
        <div className="flex items-center gap-1">
          <button className="p-1 border border-gray-300 rounded hover:bg-gray-50 flex items-center justify-center h-8 w-8">
            <span className="font-bold text-lg leading-none -mt-1">‹</span>
          </button>
          <button className="w-8 h-8 flex items-center justify-center border border-[#C08B3E] text-[#C08B3E] bg-[#C08B3E]/10 rounded font-bold">
            1
          </button>
          <button className="w-8 h-8 flex items-center justify-center border border-gray-300 text-gray-600 rounded hover:bg-gray-50 font-bold">
            2
          </button>
          <span className="px-1 text-gray-400">...</span>
          <button className="w-8 h-8 flex items-center justify-center border border-gray-300 text-gray-600 rounded hover:bg-gray-50 font-bold">
            8
          </button>
          <button className="p-1 border border-gray-300 rounded hover:bg-gray-50 flex items-center justify-center h-8 w-8">
            <span className="font-bold text-lg leading-none -mt-1">›</span>
          </button>
        </div>
      </div>
    </div>
  );
}
