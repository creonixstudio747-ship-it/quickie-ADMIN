import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
  BarChart,
  Bar,
} from 'recharts';
import { Calendar } from 'lucide-react';

const revenueData = [
  { name: 'Jan', revenue: 4000 },
  { name: 'Feb', revenue: 3000 },
  { name: 'Mar', revenue: 5000 },
  { name: 'Apr', revenue: 4500 },
  { name: 'May', revenue: 6000 },
  { name: 'Jun', revenue: 5500 },
  { name: 'Jul', revenue: 7000 },
  { name: 'Aug', revenue: 8500 },
  { name: 'Sep', revenue: 7500 },
  { name: 'Oct', revenue: 9000 },
  { name: 'Nov', revenue: 10500 },
  { name: 'Dec', revenue: 12000 },
];

const pieData = [
  { name: 'Delivered', value: 73, color: '#10B981' }, // Green
  { name: 'Pending', value: 18, color: '#C08B3E' },   // Gold
  { name: 'Canceled', value: 9, color: '#EF4444' },   // Red
];

const barData = [
  { name: 'Burger King', orders: 1200 },
  { name: 'KFC', orders: 1100 },
  { name: 'McDonalds', orders: 950 },
  { name: 'Starbucks', orders: 900 },
  { name: 'Pizza Hut', orders: 850 },
  { name: 'Subway', orders: 750 },
  { name: 'Dominos', orders: 700 },
  { name: 'Taco Bell', orders: 650 },
  { name: 'Wendys', orders: 600 },
  { name: 'Chipotle', orders: 550 },
];

export default function DashboardCharts() {
  return (
    <div className="space-y-6">
      {/* Top Row: Revenue Chart & Pie Chart */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Revenue Line Chart */}
        <div className="bg-white p-6 rounded-2xl shadow-[0_2px_10px_rgb(0,0,0,0.04)] border border-gray-100 lg:col-span-2">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-bold text-gray-800">Revenue</h3>
            <select className="bg-gray-50 border border-gray-200 text-sm rounded-lg px-3 py-1.5 focus:outline-none focus:border-primary">
              <span className="text-gray-500">Yearly</span>
              <option>2023</option>
              <option>2024</option>
            </select>
          </div>
          <div className="h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={revenueData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#C08B3E" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#C08B3E" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#6B7280', fontSize: 12 }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#6B7280', fontSize: 12 }} />
                <Tooltip 
                  contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                  itemStyle={{ color: '#1F2937', fontWeight: 'bold' }}
                />
                <Area 
                  type="monotone" 
                  dataKey="revenue" 
                  stroke="#C08B3E" 
                  strokeWidth={4}
                  fillOpacity={1} 
                  fill="url(#colorRevenue)" 
                  activeDot={{ r: 6, strokeWidth: 0, fill: '#C08B3E' }}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Product Orders Pie Chart */}
        <div className="bg-white p-6 rounded-2xl shadow-[0_2px_10px_rgb(0,0,0,0.04)] border border-gray-100 flex flex-col items-center">
          <h3 className="text-lg font-bold text-gray-800 self-start mb-2">Product Orders</h3>
          <div className="h-64 w-full flex-1">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                  stroke="none"
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  formatter={(value) => `${value}%`}
                  contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                />
                <Legend 
                  verticalAlign="bottom" 
                  height={36} 
                  iconType="circle"
                  formatter={(value, entry) => <span className="text-gray-700 text-sm font-medium ml-1">{value} ({entry.payload.value}%)</span>}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Bottom Feature: Best Restaurants Bar Chart */}
      <div className="bg-white p-6 rounded-2xl shadow-[0_2px_10px_rgb(0,0,0,0.04)] border border-gray-100">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
          <h3 className="text-lg font-bold text-gray-800">Best Restaurants</h3>
          
          {/* Date Picker Filters */}
          <div className="flex items-center space-x-3 bg-gray-50 p-1.5 rounded-lg border border-gray-200">
            <div className="flex items-center bg-white px-3 py-1.5 rounded border border-gray-100 shadow-sm">
              <Calendar className="w-4 h-4 text-gray-400 mr-2" />
              <div className="flex flex-col">
                <span className="text-[10px] text-gray-400 font-medium uppercase leading-none mb-0.5">From</span>
                <input type="text" placeholder="YYYY-MM-DD" defaultValue="2024-01-01" className="text-sm text-gray-700 outline-none w-20 leading-none bg-transparent" />
              </div>
            </div>
            <span className="text-gray-400 font-medium">-</span>
            <div className="flex items-center bg-white px-3 py-1.5 rounded border border-gray-100 shadow-sm">
              <Calendar className="w-4 h-4 text-gray-400 mr-2" />
              <div className="flex flex-col">
                <span className="text-[10px] text-gray-400 font-medium uppercase leading-none mb-0.5">To</span>
                <input type="text" placeholder="YYYY-MM-DD" defaultValue="2024-12-31" className="text-sm text-gray-700 outline-none w-20 leading-none bg-transparent" />
              </div>
            </div>
          </div>
        </div>

        <div className="h-80 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={barData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
              <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#6B7280', fontSize: 12 }} dy={10} />
              <YAxis axisLine={false} tickLine={false} tick={{ fill: '#6B7280', fontSize: 12 }} />
              <Tooltip 
                cursor={{ fill: '#f3f4f6' }}
                contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
              />
              <Bar dataKey="orders" radius={[4, 4, 0, 0]}>
                {barData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={index % 2 === 0 ? '#C08B3E' : '#A67129'} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
