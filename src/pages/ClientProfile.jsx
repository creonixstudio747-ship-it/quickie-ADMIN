import React, { useState, useEffect } from 'react';
import { ChevronLeft, Download } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase.config';
import toast from 'react-hot-toast';

const pieData = [
  { name: 'Delivered', value: 73, color: '#10B981' }, // Green
  { name: 'Pending', value: 18, color: '#3B82F6' },   // Blue
  { name: 'Canceled', value: 9, color: '#EF4444' },   // Red
];

export default function ClientProfile() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    const docRef = doc(db, 'users', id);
    const unsubscribe = onSnapshot(docRef, (docSnap) => {
      if (docSnap.exists()) {
        const data = docSnap.data();
        setProfileData({
          id: docSnap.id.substring(0,6).toUpperCase(),
          name: data.full_name || 'N/A',
          email: data.email || 'N/A',
          phone: data.phone_number || 'N/A',
          registrationDate: data.registration_date ? new Date(data.registration_date.toDate()).toLocaleDateString() : 'N/A',
          totalPayments: data.total_payments || 0,
          profilePicUrl: data.profile_pic_url || "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
          lastActiveFrom: data.last_active ? new Date(data.last_active.toDate()).toLocaleTimeString() : 'N/A',
          lastActiveTo: 'Active',
          lastOrder: 'Fetching...' 
        });
      } else {
        toast.error("User profile data not found.");
        navigate('/admin/clients');
      }
      setLoading(false);
    }, (error) => {
      console.error("Error fetching profile:", error);
      toast.error("Failed to load profile.");
      setLoading(false);
    });

    return () => unsubscribe();
  }, [id, navigate]);

  // Golden-Ochre Skeleton Loader specific for Profile Grid
  const ProfileSkeleton = () => (
    <div className="w-full flex flex-col items-center animate-pulse">
      <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-xl bg-gray-200 mb-12"></div>
      
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
        <div className="space-y-8">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="flex flex-col sm:flex-row items-baseline">
              <div className="w-40 h-4 bg-gray-300 rounded mb-2 sm:mb-0 sm:mr-4"></div>
              <div className="w-32 h-4 bg-[#C08B3E]/30 rounded"></div>
            </div>
          ))}
        </div>
        <div className="space-y-8 flex flex-col h-full w-full">
          {[...Array(4)].map((_, i) => (
            <div key={`R-\${i}`} className="flex flex-col sm:flex-row items-baseline">
              <div className="w-40 h-4 bg-gray-300 rounded mb-2 sm:mb-0 sm:mr-4"></div>
              <div className="w-24 h-4 bg-[#C08B3E]/30 rounded"></div>
            </div>
          ))}
          <div className="flex-1 mt-4 flex justify-center md:justify-end xl:mr-12">
            <div className="w-48 h-48 rounded-full bg-gray-200 border-8 border-gray-100"></div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-white rounded-2xl shadow-[0_2px_10px_rgb(0,0,0,0.04)] border border-gray-100 p-8 min-h-[600px] relative">
      
      {/* Navigation & Header Actions */}
      <div className="flex justify-between items-center w-full mb-8">
        <button 
          onClick={() => navigate('/admin/clients')}
          className="w-10 h-10 border-2 border-primary text-primary hover:bg-primary/5 flex items-center justify-center rounded-lg transition-colors cursor-pointer"
        >
          <ChevronLeft className="w-6 h-6" strokeWidth={2.5} />
        </button>
        
        <button className="flex items-center text-sm font-semibold text-gray-700 bg-white border-2 border-gray-200 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors">
          <Download className="w-4 h-4 mr-2" />
          Export
        </button>
      </div>

      {loading ? (
        <ProfileSkeleton />
      ) : profileData && (
        <div className="flex flex-col items-center justify-center max-w-4xl mx-auto w-full relative pb-12 transition-opacity duration-500 ease-in-out opacity-100">
          <div className="flex flex-col items-center mb-12">
            <h2 className="text-xl font-bold text-gray-800 mb-6">Profile pic</h2>
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-xl">
              <img 
                src={profileData.profilePicUrl}
                alt="Profile Avatar" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Dynamic User Data Grid */}
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
            
            {/* Left Column */}
            <div className="space-y-8">
              <div className="flex items-baseline">
                <span className="text-[17px] font-bold text-gray-900 w-36 shrink-0">User ID :</span>
                <span className="text-[17px] font-medium text-gray-500 whitespace-nowrap">#{profileData.id}</span>
              </div>
              <div className="flex items-baseline">
                <span className="text-[17px] font-bold text-gray-900 w-36 shrink-0">User Name :</span>
                <span className="text-[17px] font-medium text-gray-500">{profileData.name}</span>
              </div>
              <div className="flex items-baseline overflow-hidden">
                <span className="text-[17px] font-bold text-gray-900 w-36 shrink-0">Email :</span>
                <span className="text-[17px] font-medium text-gray-500 truncate" title={profileData.email}>{profileData.email}</span>
              </div>
              <div className="flex items-baseline">
                <span className="text-[17px] font-bold text-gray-900 w-36 shrink-0">Phone Number :</span>
                <span className="text-[17px] font-medium text-gray-500">{profileData.phone}</span>
              </div>
              <div className="flex items-baseline">
                <span className="text-[17px] font-bold text-gray-900 min-w-[190px] shrink-0">Registration date from :</span>
                <span className="text-[17px] font-medium text-gray-500">{profileData.registrationDate}</span>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-8 flex flex-col h-full w-full">
              <div className="flex items-baseline">
                <span className="text-[17px] font-bold text-gray-900 w-44 shrink-0">Total payments :</span>
                <span className="text-[17px] font-medium text-gray-500">{profileData.totalPayments}</span>
              </div>
              <div className="flex items-baseline">
                <span className="text-[17px] font-bold text-gray-900 w-44 shrink-0">Last active from :</span>
                <span className="text-[17px] font-medium text-gray-500">{profileData.lastActiveFrom}</span>
              </div>
              <div className="flex items-baseline">
                <span className="text-[17px] font-bold text-gray-900 w-44 shrink-0">Last active to :</span>
                <span className="text-[17px] font-medium text-gray-500">{profileData.lastActiveTo}</span>
              </div>
              <div className="flex items-baseline">
                <span className="text-[17px] font-bold text-gray-900 w-44 shrink-0">Last order :</span>
                <span className="text-[17px] font-medium text-gray-500">{profileData.lastOrder}</span>
              </div>

              {/* Donut Pie Chart specific to User Layout */}
              <div className="flex-1 mt-4 md:-mt-8 flex justify-center md:justify-end xl:mr-12 min-h-[220px]">
                <div className="w-56 h-56 relative flex items-center justify-center">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={pieData}
                        innerRadius={55}
                        outerRadius={85}
                        paddingAngle={0}
                        stroke="none"
                        dataKey="value"
                        startAngle={90}
                        endAngle={-270}
                      >
                        {pieData.map((entry, index) => (
                          <Cell key={`cell-\${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip 
                        formatter={(value) => `\${value}%`}
                        contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                  {/* Custom inner text showing major value */}
                  <span className="absolute text-2xl font-bold text-gray-900">73%</span>

                  {/* Custom Legend to match image explicitly */}
                  <div className="absolute -bottom-6 w-full flex justify-center items-center space-x-3">
                    <div className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-[#10B981] mr-1"></div>
                      <span className="text-[10px] sm:text-xs font-semibold text-gray-600">Delivered</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-[#3B82F6] mr-1"></div>
                      <span className="text-[10px] sm:text-xs font-semibold text-gray-600">Pending</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-[#EF4444] mr-1"></div>
                      <span className="text-[10px] sm:text-xs font-semibold text-gray-600">Canceled</span>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
          
        </div>
      )}
    </div>
  );
}
