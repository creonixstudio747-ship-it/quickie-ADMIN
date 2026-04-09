import React, { useState, useEffect } from 'react';
import { Download, Filter, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase.config';
import toast from 'react-hot-toast';

export default function ClientsList() {
  const navigate = useNavigate();
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isInitialLoad = true;

    const unsubscribe = onSnapshot(collection(db, 'users'), (snapshot) => {
      const usersData = [];
      snapshot.forEach((doc) => {
        usersData.push({ id: doc.id, ...doc.data() });
      });

      setClients(usersData);
      setLoading(false);

      if (!isInitialLoad) {
        snapshot.docChanges().forEach((change) => {
          if (change.type === 'added') {
            const newUser = change.doc.data();
            toast.success(`New Customer Registered: ${newUser.full_name || 'Unknown'}`, {
              icon: '🚀',
              style: {
                border: '1px solid #C08B3E',
                padding: '16px',
                color: '#1F2937',
              },
              iconTheme: {
                primary: '#C08B3E',
                secondary: '#FFFAEE',
              },
            });
          }
        });
      }
      isInitialLoad = false;
    }, (error) => {
      console.error("Error fetching clients:", error);
      toast.error("Failed to sync with real-time database.", { position: 'bottom-right' });
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // Golden-Ochre Skeleton Loader specific for the table rows
  const SkeletonRow = () => (
    <tr className="border-b border-gray-100 bg-white animate-pulse">
      <td className="p-4"><div className="w-4 h-4 bg-gray-200 rounded"></div></td>
      <td className="p-4"><div className="w-20 h-4 bg-[#C08B3E]/20 rounded"></div></td>
      <td className="p-4"><div className="w-32 h-4 bg-gray-200 rounded"></div></td>
      <td className="p-4"><div className="w-24 h-4 bg-gray-200 rounded"></div></td>
      <td className="p-4"><div className="w-40 h-4 bg-gray-200 rounded"></div></td>
      <td className="p-4"><div className="w-16 h-4 bg-[#C08B3E]/20 rounded"></div></td>
      <td className="p-4"><div className="w-16 h-8 bg-gray-200 rounded-lg mx-auto"></div></td>
    </tr>
  );

  return (
    <div className="bg-white rounded-2xl shadow-[0_2px_10px_rgb(0,0,0,0.04)] border border-gray-100 p-6">
      
      {/* Header Actions */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <h2 className="text-xl font-bold text-gray-800 flex items-center">
          Users Data
          {loading && <div className="ml-3 h-2 w-2 bg-[#C08B3E] rounded-full animate-ping"></div>}
        </h2>
        
        <div className="flex items-center space-x-3 w-full sm:w-auto overflow-x-auto">
          <button className="flex items-center text-sm font-medium text-gray-700 bg-white border border-gray-200 px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors whitespace-nowrap">
            <Download className="w-4 h-4 mr-2" />
            Export
          </button>
          
          <button className="flex items-center text-sm font-medium text-gray-700 bg-white border border-gray-200 px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors whitespace-nowrap">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </button>
          
          <button className="flex items-center text-sm font-medium text-gray-700 bg-white border border-gray-200 px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors whitespace-nowrap">
            All Users
            <ChevronDown className="w-4 h-4 ml-2 text-gray-400" />
          </button>
        </div>
      </div>

      {/* Table grid container */}
      <div className="overflow-x-auto border border-gray-200 rounded-xl">
        <table className="w-full text-left border-collapse min-w-[800px]">
          <thead>
            <tr className="border-b border-gray-200 text-sm font-semibold text-gray-400">
              <th className="p-4 w-12 text-center">
                <input type="checkbox" className="rounded text-primary focus:ring-primary border-gray-300 w-4 h-4 cursor-pointer accent-primary" />
              </th>
              <th className="p-4 whitespace-nowrap">ID</th>
              <th className="p-4 whitespace-nowrap">Full Name</th>
              <th className="p-4 whitespace-nowrap">Phone Number</th>
              <th className="p-4 whitespace-nowrap">Email</th>
              <th className="p-4 whitespace-nowrap">Total Payment</th>
              <th className="p-4 text-center whitespace-nowrap">Action</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {loading ? (
              // Map 5 skeleton rows
              [...Array(5)].map((_, i) => <SkeletonRow key={i} />)
            ) : clients.length > 0 ? (
              clients.map((client, index) => (
                <tr 
                  key={client.id} 
                  className={`border-b border-gray-100 last:border-none transition-colors hover:bg-gray-50 ${index % 2 !== 0 ? 'bg-[#FFF9F3]' : 'bg-white'}`}
                >
                  <td className="p-4 text-center">
                    <input type="checkbox" className="rounded text-primary focus:ring-primary border-gray-300 w-4 h-4 cursor-pointer accent-primary" />
                  </td>
                  <td className="p-4 font-medium text-gray-500 whitespace-nowrap">
                    #{client.id.substring(0,6).toUpperCase()}
                  </td>
                  <td className="p-4 font-semibold text-gray-800 whitespace-nowrap">{client.full_name || 'N/A'}</td>
                  <td className="p-4 text-gray-600 whitespace-nowrap">{client.phone_number || 'N/A'}</td>
                  <td className="p-4 text-gray-600 whitespace-nowrap">{client.email || 'N/A'}</td>
                  <td className="p-4 text-gray-600 font-medium whitespace-nowrap">{client.total_payments || 0}</td>
                  <td className="p-4 text-center">
                    <button 
                      onClick={() => navigate(`/admin/clients/${client.id}`)}
                      className="text-primary font-medium text-sm border border-primary px-4 py-1.5 rounded-lg hover:bg-primary/5 transition-colors whitespace-nowrap"
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="p-8 text-center text-gray-500">No users found pending real-time sync.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex flex-col sm:flex-row justify-between items-center mt-6 gap-4">
        <p className="text-sm font-medium text-gray-600">1 of 1 pages</p> {/* Static for now */}
        
        <div className="flex items-center space-x-1">
          <button className="p-1.5 rounded-md border border-gray-200 text-gray-400 hover:text-gray-600 hover:bg-gray-50 transition-colors">
            <ChevronLeft className="w-4 h-4" />
          </button>
          
          <button className="w-8 h-8 flex items-center justify-center rounded-md border border-primary text-primary font-medium bg-primary/5">
            1
          </button>
          
          <button className="p-1.5 rounded-md border border-gray-200 text-gray-800 hover:bg-gray-50 transition-colors">
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
      
    </div>
  );
}
