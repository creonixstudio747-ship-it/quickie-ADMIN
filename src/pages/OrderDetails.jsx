import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ChevronLeft, Download, Calendar } from 'lucide-react';

export default function OrderDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Mock data for the order
  const orderInfo = {
    id: id || '140',
    date: 'Tue, 6 Apr 2026 12:02AM',
    restaurant: "Zack's",
    status: 'Delivered', // or 'Pending', 'Shipped'
    items: [
      { id: 1, name: 'Burger', description: 'Chicken curry special', price: 150, quantity: 1, img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=150&h=150' },
      { id: 2, name: 'Chicken sandwich', description: 'Chicken curry special', price: 130, quantity: 2, img: 'https://images.unsplash.com/photo-1606755962773-d324e0a13086?auto=format&fit=crop&w=150&h=150' },
      { id: 3, name: 'sandwich', description: 'Chicken curry special', price: 170, quantity: 1, img: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=150&h=150' },
    ],
    deliveryFee: 30,
    platformFee: 5, // FIXED field as requested
    client: {
      name: 'Mohamed morad',
      phone: '01012753173',
      email: 'mohamed_morad@gmail.com', // If null/empty, hide row
      address: '123 Main st, city',
      paymentMethod: 'Cash on Delivery',
      paymentStatus: 'Paid'
    },
    deliveryMan: {
      id: '#200130',
      name: 'Ahmed Ali',
      phone: '01012753173'
    }
  };

  const subtotal = orderInfo.items.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const total = subtotal + orderInfo.deliveryFee + orderInfo.platformFee;

  const getStatusBadge = (status) => {
    if (status === 'Delivered') return <span className="bg-green-100 text-green-700 px-3 py-1 rounded-md text-sm font-semibold">Delivered</span>;
    if (status === 'Shipped') return <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-md text-sm font-semibold">Shipped</span>;
    if (status === 'Pending') return <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-md text-sm font-semibold">Pending</span>;
    return <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-md text-sm font-semibold">{status}</span>;
  };

  return (
    <div className="p-8 pb-24 max-w-7xl mx-auto">
      {/* Header section with Search bar and Actions (Already present in Global Header, but we add our local page actions here) */}
      
      {/* Back Nav and Export */}
      <div className="flex justify-between items-center mb-6">
        <button 
          onClick={() => navigate('/admin/orders')}
          className="w-10 h-10 border-2 border-[#C08B3E] rounded-md flex items-center justify-center text-[#C08B3E] hover:bg-[#C08B3E] hover:text-white transition-colors"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>

        <button className="flex items-center gap-2 border border-gray-300 rounded-lg px-4 py-2 hover:bg-gray-50 transition-colors bg-white font-medium text-gray-700">
          <Download className="h-4 w-4" /> Export
        </button>
      </div>

      {/* Order Identity Row */}
      <div className="flex flex-wrap items-center gap-6 mb-8 text-gray-800">
        <h2 className="text-xl font-bold">Order ID : #{orderInfo.id}</h2>
        <div className="flex items-center gap-2 text-gray-500 font-medium">
          <Calendar className="h-5 w-5" />
          {orderInfo.date}
        </div>
        <div className="flex items-center gap-3">
          <span className="font-semibold text-lg">Restaurant : {orderInfo.restaurant}</span>
          {getStatusBadge(orderInfo.status)}
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Column: Order Items */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <h3 className="text-xl font-bold text-gray-800 mb-6">Order items</h3>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b-2 border-gray-100">
                    <th className="pb-3 text-gray-600 font-semibold w-1/2">Item</th>
                    <th className="pb-3 text-gray-600 font-semibold text-center">Price</th>
                    <th className="pb-3 text-gray-600 font-semibold text-center">Quantity</th>
                    <th className="pb-3 text-gray-600 font-semibold text-right">Total</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {orderInfo.items.map((item) => (
                    <tr key={item.id}>
                      <td className="py-4">
                        <div className="flex items-center gap-4">
                          <img src={item.img} alt={item.name} className="w-16 h-16 rounded-lg object-cover bg-gray-100" />
                          <div>
                            <p className="font-bold text-gray-800 text-lg">{item.name}</p>
                            <p className="text-sm text-gray-500">{item.description}</p>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 text-center font-bold text-gray-800 text-lg">{item.price}</td>
                      <td className="py-4 text-center font-bold text-gray-800 text-lg">{item.quantity}</td>
                      <td className="py-4 text-right font-bold text-gray-800 text-lg">{item.price * item.quantity}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="border-t-2 border-gray-100 mt-4 pt-6 max-w-sm ml-auto space-y-4">
              <div className="flex justify-between items-center text-gray-600">
                <span className="text-lg font-medium">Subtotal</span>
                <span className="text-xl font-bold text-gray-800">{subtotal}</span>
              </div>
              <div className="flex justify-between items-center text-gray-600">
                <span className="text-lg font-medium">Delivery fee</span>
                <span className="text-xl font-bold text-gray-800">{orderInfo.deliveryFee}</span>
              </div>
              <div className="flex justify-between items-center text-gray-600">
                <span className="text-lg font-medium tracking-tight">Platform Fee</span>
                <span className="text-xl font-bold text-gray-800">{orderInfo.platformFee}</span>
              </div>
              <div className="border-t border-gray-200 pt-4 flex justify-between items-center">
                <span className="text-xl font-bold text-gray-800">Total</span>
                <span className="text-2xl font-bold text-gray-800">{total}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Information Cards */}
        <div className="space-y-6">
          
          {/* Client Information */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <h3 className="text-xl font-bold text-gray-800 mb-6">Client information</h3>
            <div className="space-y-5 text-gray-700 text-[15px]">
              <div className="flex">
                <span className="font-bold w-36 shrink-0">User Name :</span>
                <span className="font-medium text-gray-600">{orderInfo.client.name}</span>
              </div>
              <div className="flex">
                <span className="font-bold w-36 shrink-0">Phone Number :</span>
                <span className="font-medium text-gray-600">{orderInfo.client.phone}</span>
              </div>
              
              {/* Conditional Email Render */}
              {orderInfo.client.email && (
                <div className="flex">
                  <span className="font-bold w-36 shrink-0">Email :</span>
                  <span className="font-medium text-gray-600 break-all">{orderInfo.client.email}</span>
                </div>
              )}
              
              <div className="flex">
                <span className="font-bold w-36 shrink-0">Shipping Address :</span>
                <span className="font-medium text-gray-600">{orderInfo.client.address}</span>
              </div>
              <div className="flex">
                <span className="font-bold w-36 shrink-0">Payment method :</span>
                <span className="font-medium text-gray-600">{orderInfo.client.paymentMethod}</span>
              </div>
              <div className="flex items-center">
                <span className="font-bold w-36 shrink-0">Status :</span>
                {orderInfo.client.paymentStatus === 'Paid' ? (
                  <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded text-sm font-semibold">Paid</span>
                ) : (
                  <span className="bg-red-100 text-red-700 px-2 py-0.5 rounded text-sm font-semibold">Unpaid</span>
                )}
              </div>
            </div>
          </div>

          {/* Delivery Information */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <h3 className="text-xl font-bold text-gray-800 mb-6">Delivery information</h3>
            <div className="space-y-5 text-gray-700 text-[15px]">
              <div className="flex">
                <span className="font-bold w-36 shrink-0">Delivery man ID :</span>
                <span className="font-medium text-gray-600">{orderInfo.deliveryMan.id}</span>
              </div>
              <div className="flex">
                <span className="font-bold w-36 shrink-0">Delivery man Name:</span>
                <span className="font-medium text-gray-600">{orderInfo.deliveryMan.name}</span>
              </div>
              <div className="flex">
                <span className="font-bold w-36 shrink-0">Phone Number :</span>
                <span className="font-medium text-gray-600">{orderInfo.deliveryMan.phone}</span>
              </div>
            </div>
          </div>

        </div>
      </div>
      
      {/* Footer Actions */}
      <div className="flex justify-end gap-4 mt-8">
        <button className="bg-gray-400 hover:bg-gray-500 text-white px-8 py-2.5 rounded-lg font-bold transition-colors">
          Cancel
        </button>
        <button className="bg-red-500 hover:bg-red-600 text-white px-8 py-2.5 rounded-lg font-bold transition-colors shadow-sm">
          Delete
        </button>
      </div>

    </div>
  );
}
