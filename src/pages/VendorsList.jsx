import React, { useState, useEffect } from 'react';
import { collection, onSnapshot, query } from 'firebase/firestore';
import { db } from '../firebase.config';
import { Search, Download, Filter, MoreHorizontal, Eye, Edit2, Star } from 'lucide-react';
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/react';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';

export default function VendorsList() {
  const [vendors, setVendors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Setting up realtime listener pulling from the 'vendors' collection
    const q = query(collection(db, 'vendors'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const vendorData = [];
      snapshot.forEach((doc) => {
        vendorData.push({ id: doc.id, ...doc.data() });
      });
      setVendors(vendorData);
      setLoading(false);
    }, (error) => {
      console.error("Error fetching vendors:", error);
      toast.error("Failed to load vendors");
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const handleView = (vendor) => {
    toast.success(`Navigating to view profile for ${vendor.name || vendor.id}`);
  };

  const handleEdit = (vendor) => {
    toast.success(`Opening edit modal for ${vendor.name || vendor.id}`);
  };

  // Using some dummy data combined with any missing firestore properties to perfectly match the mockup
  const processVendorsForView = () => {
    // If no vendors exist in the collection, return an empty array allowing fallback state
    // But for demonstration if 0 we might want dummy? No, user requested actual connection.
    return vendors;
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100/50 p-6">
      {/* Header section */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0 mb-8">
        
        {/* Left Side styling: Header and Search */}
        <div className="flex items-center flex-1 w-full space-x-6">
          <div className="relative w-full max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search" 
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 transition-all outline-none text-sm placeholder:text-gray-400"
            />
          </div>
        </div>
        
        {/* Right Side Options */}
        <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 w-full sm:w-auto">
          <button className="flex items-center text-gray-600 hover:text-primary transition-colors text-sm font-medium">
            <Download className="h-4 w-4 mr-2" />
            Export
          </button>
          
          <button className="flex items-center text-gray-600 hover:text-primary transition-colors text-sm font-medium">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </button>

          <select className="bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-sm font-medium text-gray-700 outline-none focus:ring-2 focus:ring-primary/20 appearance-none cursor-pointer">
            <option>All Vendors</option>
            <option>Active</option>
            <option>Inactive</option>
          </select>

          <Link 
            to="/admin/vendors/add"
            className="w-full sm:w-auto bg-primary text-white px-5 py-2.5 rounded-xl text-sm font-medium hover:bg-primary/90 transition-colors shadow-sm flex items-center justify-center"
          >
            <span className="text-lg mr-2 leading-none font-light">+</span> Add New
          </Link>
        </div>
      </div>

      {/* Main Data Table */}
      <div className="overflow-x-auto rounded-xl border border-gray-100">
        <table className="w-full text-left text-sm text-gray-600">
          <thead className="text-[13px] text-gray-400 uppercase bg-white border-b border-gray-100">
            <tr>
              <th className="px-6 py-4 w-12 font-medium">
                <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary cursor-pointer accent-primary" />
              </th>
              <th className="px-6 py-4 font-medium tracking-wide">ID</th>
              <th className="px-6 py-4 font-medium tracking-wide">Name</th>
              <th className="px-6 py-4 font-medium tracking-wide">Phone No.</th>
              <th className="px-6 py-4 font-medium tracking-wide">Category</th>
              <th className="px-6 py-4 font-medium tracking-wide">Status</th>
              <th className="px-6 py-4 font-medium tracking-wide">Rating</th>
              <th className="px-6 py-4 font-medium tracking-wide text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50 bg-white">
            {loading ? (
              <tr>
                <td colSpan="8" className="px-6 py-12 text-center text-gray-400">Loading vendor data...</td>
              </tr>
            ) : vendors.length === 0 ? (
              <tr>
                <td colSpan="8" className="px-6 py-12 text-center">
                  <div className="flex flex-col items-center justify-center">
                    <div className="text-gray-400 mb-2">No vendors found.</div>
                    <button className="text-primary hover:underline text-sm">+ Add your first vendor</button>
                  </div>
                </td>
              </tr>
            ) : (
              processVendorsForView().map((vendor, index) => (
                <tr 
                  key={vendor.id} 
                  className={`group transition-colors ${
                    index % 2 === 0 ? 'bg-white' : 'bg-[#FFF8ED]/60'
                  } hover:bg-[#FFF8ED]`}
                >
                  <td className="px-6 py-4 whitespace-nowrap">
                    <input type="checkbox" className="w-4 h-4 rounded border-gray-300 accent-primary cursor-pointer" />
                  </td>
                  <td className="px-6 py-4 font-medium text-gray-600 whitespace-nowrap">
                    {vendor.displayId || `#${vendor.id.slice(0,6).toUpperCase()}`}
                  </td>
                  <td className="px-6 py-4 font-semibold text-gray-800 whitespace-nowrap">
                    {vendor.name || 'Unknown'}
                  </td>
                  <td className="px-6 py-4 text-gray-600 whitespace-nowrap">
                    {vendor.phone || 'N/A'}
                  </td>
                  <td className="px-6 py-4 text-gray-600 capitalize whitespace-nowrap">
                    {vendor.category || 'Standard'}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap relative">
                    {/* Status Badge styling */}
                    <span 
                      className={`font-semibold inline-flex items-center px-2.5 py-0.5 rounded-full text-xs ${
                        vendor.status?.toLowerCase() === 'closed' 
                          ? 'text-red-500 bg-red-50/50' 
                          : 'text-green-500 bg-green-50/50'
                      }`}
                    >
                      {vendor.status || 'Open'}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-700 font-semibold flex items-center whitespace-nowrap">
                    <Star className="w-4 h-4 mr-1.5 text-primary fill-primary" />
                    {vendor.rating || 'N/A'}
                  </td>
                  <td className="px-6 py-4 text-right whitespace-nowrap">
                    <Menu as="div" className="relative inline-block text-left">
                      <div>
                        <MenuButton className="flex items-center justify-center w-8 h-8 rounded-full hover:bg-black/5 text-gray-500 transition-colors focus:outline-none focus:ring-2 focus:ring-primary/20 ml-auto">
                          <MoreHorizontal className="h-5 w-5" />
                        </MenuButton>
                      </div>
                      <MenuItems 
                        transition
                        className="absolute right-0 mt-2 w-36 origin-top-right rounded-xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] bg-white ring-1 ring-black/5 focus:outline-none z-20 py-1.5 transition duration-100 ease-out data-[closed]:scale-95 data-[closed]:opacity-0"
                      >
                        <MenuItem>
                          {({ focus }) => (
                            <button
                              onClick={() => handleView(vendor)}
                              className={`${
                                focus ? 'bg-gray-50/80 text-primary' : 'text-gray-700'
                              } group flex items-center w-full px-4 py-2.5 text-sm font-medium transition-colors`}
                            >
                              <Eye className={`mr-3 h-4 w-4 ${focus ? 'text-primary' : 'text-gray-400'}`} />
                              View
                            </button>
                          )}
                        </MenuItem>
                        <MenuItem>
                          {({ focus }) => (
                            <button
                              onClick={() => handleEdit(vendor)}
                              className={`${
                                focus ? 'bg-gray-50/80 text-primary' : 'text-gray-700'
                              } group flex items-center w-full px-4 py-2.5 text-sm font-medium transition-colors`}
                            >
                              <Edit2 className={`mr-3 h-4 w-4 ${focus ? 'text-primary' : 'text-gray-400'}`} />
                              Edit
                            </button>
                          )}
                        </MenuItem>
                      </MenuItems>
                    </Menu>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination Footer */}
      {!loading && processVendorsForView().length > 0 && (
        <div className="flex items-center justify-between pt-6 mt-2">
          <p className="text-sm font-medium text-gray-500">1 of 10 pages</p>
          <div className="flex items-center space-x-1">
            <button className="px-3 py-1.5 border border-gray-200 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 hover:border-gray-300 transition-colors tracking-widest">
               &#9664;
            </button>
            <button className="px-3.5 py-1.5 bg-primary/10 text-primary font-bold border border-primary/20 rounded-lg text-sm transition-colors">
              1
            </button>
            <button className="px-3.5 py-1.5 border border-transparent rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors">
              2
            </button>
            <span className="px-2 py-1.5 text-gray-400">...</span>
            <button className="px-3.5 py-1.5 border border-transparent rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors">
              10
            </button>
            <button className="px-3 py-1.5 border border-gray-200 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 hover:border-gray-300 transition-colors tracking-widest">
               &#9654;
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
