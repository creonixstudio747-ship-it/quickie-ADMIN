import React from 'react';
import { TrendingUp as TrendUpIcon, TrendingDown as TrendDownIcon } from 'lucide-react';

export default function StatCard({ title, value, percent, isPositive, trendColorClass, strokeColor }) {
  const TrendIcon = isPositive ? TrendUpIcon : TrendDownIcon;
  const percentColor = isPositive ? 'text-green-500' : 'text-red-500';

  return (
    <div className="bg-white rounded-2xl p-6 shadow-[0_2px_10px_rgb(0,0,0,0.04)] border border-gray-100 flex flex-col justify-between hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300">
      <div className="flex justify-between items-start mb-4">
        <div>
          <p className="text-sm font-semibold text-gray-500 mb-1">{title}</p>
          <h3 className="text-3xl font-bold text-gray-800">{value}</h3>
        </div>
        <div className={`flex items-center text-sm font-medium ${percentColor} bg-opacity-10 px-2 py-1 rounded border border-transparent`}>
          <TrendIcon className="w-4 h-4 mr-1" />
          {percent}
        </div>
      </div>
      
      {/* Simple Mini SVG trendline */}
      <div className="mt-2 h-10 w-full flex items-end overflow-hidden">
        <svg viewBox="0 0 100 30" className="w-full h-full preserve-3d" preserveAspectRatio="none">
          {isPositive ? (
            <path 
              d="M0,30 Q20,15 40,25 T80,10 T100,5" 
              fill="none" 
              stroke={strokeColor} 
              strokeWidth="3" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
            />
          ) : (
            <path 
              d="M0,5 Q20,15 40,5 T80,20 T100,25" 
              fill="none" 
              stroke={strokeColor} 
              strokeWidth="3" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
            />
          )}
        </svg>
      </div>
    </div>
  );
}
