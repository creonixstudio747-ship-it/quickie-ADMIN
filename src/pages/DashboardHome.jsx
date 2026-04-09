import React from 'react';
import StatCard from '../components/StatCard';
import DashboardCharts from '../components/DashboardCharts';

export default function DashboardHome() {
  return (
    <div className="space-y-6">
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
  );
}
