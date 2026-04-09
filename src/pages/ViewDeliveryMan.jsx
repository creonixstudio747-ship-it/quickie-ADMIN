import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Download, Star } from 'lucide-react';
import { PieChart, Pie, Cell } from 'recharts';

// Data specifically for Recharts mapping exactly to 73% (roughly visually 73% green+blue inside donut)
// Visual structure based on the image slice chart matching standard "Delivered, Pending, Canceled" metrics.
const data = [
  { name: 'Canceled', value: 27, color: '#FF0000' }, // Red
  { name: 'Pending', value: 35, color: '#3B82F6' }, // Blue
  { name: 'Delivered', value: 38, color: '#22C55E' }, // Green
];

export default function ViewDeliveryMan() {
  const navigate = useNavigate();
  const location = useLocation();
  const manData = location.state?.man;

  const handleBack = (e) => {
    e.preventDefault();
    navigate('/admin/delivery-man');
  };

  // Fallbacks precisely to `image_8.png` specifics
  const displayId = manData?.id || '#120200';
  const displayName = manData?.name || 'Ahmed Mohamed';
  const displayEmail = manData?.email || 'ahmed_mohamed@gmail.com';
  const displayPhone = manData?.phone || '01012753173';
  const isActive = manData?.status === 'Active';

  return (
    <div className="max-w-5xl">
      {/* Title & Top Export Action */}
      <div className="flex items-center justify-between mb-8 mt-2">
        <h2 className="text-xl font-bold text-gray-800 tracking-tight">View Delivery Man</h2>
        <button className="flex items-center px-4 py-2 border-2 border-primary text-gray-700 font-semibold rounded-lg hover:bg-primary/5 transition-colors text-sm">
          <Download className="h-4 w-4 mr-2 text-gray-600" />
          Export
        </button>
      </div>

      {/* Main Container Card */}
      <div className="bg-white rounded-[24px] shadow-sm border border-gray-100 p-8 pb-10">
        
        {/* Profile Picture Block */}
        <div className="flex flex-col items-center justify-center mb-10 mt-2">
          <h3 className="text-base font-semibold text-gray-800 mb-4">Picture</h3>
          <div className="h-28 w-28 rounded-full overflow-hidden border border-gray-200 shadow-sm relative mb-3">
             {/* Using a placeholder avatar mapping generically to the layout styling, fallback to structural UI */}
             <div className="bg-blue-100 h-full w-full flex items-center justify-center object-cover">
               <img src="https://i.pravatar.cc/250?img=11" alt="Delivery Man Avatar" className="h-full w-full object-cover" />
             </div>
          </div>
          <div className="flex items-center text-gray-700 text-sm font-semibold">
            <Star className="h-4 w-4 text-primary fill-primary mr-1" />
            4.8 . 127 Reveiw
          </div>
        </div>

        {/* Data Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-6 lg:gap-y-8 mb-10 px-4 md:px-12">
          
          {/* Left Column Settings */}
          <div className="flex flex-col space-y-6 lg:space-y-8">
            <div className="flex items-center">
              <span className="w-40 text-sm font-semibold text-gray-800">Delivery man ID :</span>
              <span className="text-sm text-gray-500 font-medium">{displayId}</span>
            </div>
            <div className="flex items-center">
              <span className="w-40 text-sm font-semibold text-gray-800">delivery man Name :</span>
              <span className="text-sm text-gray-500 font-medium">{displayName}</span>
            </div>
            <div className="flex items-center">
              <span className="w-40 text-sm font-semibold text-gray-800">Email :</span>
              <span className="text-sm text-gray-500 font-medium">{displayEmail}</span>
            </div>
            <div className="flex items-center">
              <span className="w-40 text-sm font-semibold text-gray-800">Phone Number :</span>
              <span className="text-sm text-gray-500 font-medium">{displayPhone}</span>
            </div>
          </div>

          {/* Right Column Settings */}
          <div className="flex flex-col space-y-6 lg:space-y-8">
            <div className="flex items-center">
              <span className="w-44 text-sm font-semibold text-gray-800">National ID :</span>
              <span className="text-sm text-gray-400 font-medium">Arrived</span>
            </div>
            <div className="flex items-center">
              <span className="w-44 text-sm font-semibold text-gray-800">Driving license :</span>
              <span className="text-sm text-gray-400 font-medium">Arrived</span>
            </div>
            <div className="flex items-center">
              <span className="w-44 text-sm font-semibold text-gray-800">Motorcycle licence :</span>
              <span className="text-sm text-gray-400 font-medium">Arrived</span>
            </div>
            <div className="flex items-center relative z-10">
              <span className="w-44 text-sm font-semibold text-gray-800">where he is :</span>
              <span className="text-sm text-gray-500 font-medium">Giza</span>
            </div>
          </div>

        </div>

        {/* Bottom Elements Row: Active Toggle & Analytics Chart & Action Buttons */}
        <div className="flex flex-col lg:flex-row justify-between items-end px-4 md:px-12 relative">
          
          {/* Active Radio Group - Pure static presentational */}
          <div className="flex flex-col self-start">
            <span className="text-sm font-semibold text-gray-800 mb-3">Active</span>
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <div className={`w-4 h-4 rounded-full border flex items-center justify-center mr-2 ${isActive !== false ? 'border-primary' : 'border-gray-400'}`}>
                   {isActive !== false && <div className="w-2.5 h-2.5 rounded-full bg-primary" />}
                </div>
                <span className="text-sm font-bold text-gray-800">Yes</span>
              </div>
              <div className="flex items-center">
                <div className={`w-4 h-4 rounded-full border flex items-center justify-center mr-2 ${isActive === false ? 'border-primary' : 'border-gray-300'}`}>
                   {isActive === false && <div className="w-2.5 h-2.5 rounded-full bg-gray-400" />}
                </div>
                <span className="text-sm font-bold text-gray-500">No</span>
              </div>
            </div>
          </div>

          {/* Essential Analytics Widget logic directly mimicking image_8 layout parameters */}
          {/* Note: I use relative positioning so it sits right of center similar to image while buttons are bottom right */}
          <div className="flex flex-col justify-center items-center absolute bottom-1 right-[45%] lg:right-1/3 z-0 w-32">
            <div className="relative">
              <PieChart width={120} height={120}>
                <Pie
                  data={data}
                  cx={55}
                  cy={55}
                  innerRadius={32}
                  outerRadius={50}
                  paddingAngle={0}
                  dataKey="value"
                  stroke="none"
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none mt-[-5px] ml-[-5px]">
                <span className="text-xs font-bold text-gray-800">73%</span>
              </div>
            </div>
            
            {/* Legend layout exact map */}
            <div className="flex items-center space-x-2 mt-[-5px]">
              <div className="flex items-center text-[8px] font-bold text-gray-600">
                <div className="w-1.5 h-1.5 rounded-full bg-[#22C55E] mr-1"></div>
                Delivered
              </div>
              <div className="flex items-center text-[8px] font-bold text-gray-600">
                <div className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] mr-1"></div>
                Pending
              </div>
              <div className="flex items-center text-[8px] font-bold text-gray-600">
                <div className="w-1.5 h-1.5 rounded-full bg-[#FF0000] mr-1"></div>
                Canceled
              </div>
            </div>
          </div>

          {/* Action Buttons Structure aligned right */}
          <div className="flex space-x-4 mt-16 z-20 absolute bottom-[-10px] right-0 md:right-8">
            <button
              onClick={handleBack}
              className="px-8 py-3 rounded-xl font-medium text-gray-500 bg-[#E5E5E5] hover:bg-gray-300 transition-colors text-sm"
            >
              Cancel
            </button>
            <button
              type="button"
              className="px-10 py-3 rounded-xl font-bold text-white bg-[#FF0000] hover:bg-red-600 shadow-sm transition-colors text-sm"
            >
              Delete
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
