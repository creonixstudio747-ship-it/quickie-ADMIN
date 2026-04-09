import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import StatCard from './components/StatCard';
import DashboardCharts from './components/DashboardCharts';

export default function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans flex">
      {/* Sidebar Component */}
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Header Component */}
        <Header toggleSidebar={toggleSidebar} />

        {/* Dashboard Content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto p-6">
          <div className="max-w-7xl mx-auto space-y-6">
            
            {/* Top Statistics Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <StatCard 
                title="Today Revenue" 
                value="8,431" 
                percent="+21.01%" 
                isPositive={true} 
                strokeColor="#3B82F6" 
              />
              <StatCard 
                title="Total Order" 
                value="1,621" 
                percent="+18.34%" 
                isPositive={true} 
                strokeColor="#10B981" 
              />
              <StatCard 
                title="Total Profit" 
                value="24,746" 
                percent="-7.69%" 
                isPositive={false} 
                strokeColor="#EF4444" 
              />
              <StatCard 
                title="Total Users" 
                value="15,378" 
                percent="+21.01%" 
                isPositive={true} 
                strokeColor="#3B82F6" 
              />
            </div>

            {/* Charts Section */}
            <DashboardCharts />

          </div>
        </main>
      </div>
    </div>
  );
}
