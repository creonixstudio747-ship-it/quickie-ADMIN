import React, { useState } from 'react';
import { ChevronLeft, Edit2, CheckCircle2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

export default function BusinessInfo() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    businessName: 'QUICKIE',
    email: 'quickie@gmail.com',
    phone: '01007788995',
    address: '123 Main st, city'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    // Validation
    if (!formData.businessName || !formData.email || !formData.phone || !formData.address) {
      toast.error('All fields are required!');
      return;
    }
    
    // Simulate Backend processing
    toast.success('Business Information saved successfully!', {
      icon: <CheckCircle2 className="text-green-500" />,
      style: {
        border: '1px solid #C08B3E',
        padding: '16px',
        color: '#333',
      },
    });
  };

  return (
    <div className="p-8 pb-24 max-w-5xl mx-auto">
      {/* Search Header Space (Implied by global Header) */}

      <div className="bg-white rounded-[2rem] shadow-sm border border-gray-100 overflow-hidden pb-10">
        
        {/* Cover Graphic */}
        <div className="h-40 bg-gray-50 flex justify-center pt-24">
          {/* Logo Circle Overlay */}
          <div className="h-32 w-32 rounded-full bg-[#fbdba7] border-4 border-white flex flex-col items-center justify-center shadow-sm relative z-10">
             <h2 className="text-2xl italic tracking-tight text-[#C08B3E] font-serif font-bold">
               QUICKIE
             </h2>
          </div>
        </div>

        {/* Content Body */}
        <div className="px-10 pt-20 max-w-3xl mx-auto">
          
          <div className="flex items-center justify-between mb-10">
            <div className="flex items-center gap-4">
              <button 
                onClick={() => navigate('/admin/settings')}
                className="w-10 h-10 border-2 border-[#C08B3E] rounded-full flex items-center justify-center text-[#C08B3E] hover:bg-[#C08B3E] hover:text-white transition-colors"
                title="Go Back"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <div>
                <h2 className="text-2xl font-bold text-gray-800">Company information</h2>
                <p className="text-gray-500 text-sm mt-1">Basic information of your business</p>
              </div>
            </div>

            {/* Change Logo trigger */}
            <button className="flex items-center gap-2 border border-[#C08B3E] text-[#C08B3E] font-semibold px-4 py-1.5 rounded-lg hover:bg-[#C08B3E] hover:text-white transition-colors">
              <Edit2 className="h-4 w-4" />
              Change Logo
            </button>
          </div>

          {/* Form */}
          <div className="space-y-6">
            
            <div className="grid grid-cols-1 gap-2">
              <label className="text-sm font-semibold text-gray-700">Company Name</label>
              <div className="relative">
                <input 
                  type="text" 
                  name="businessName"
                  value={formData.businessName}
                  onChange={handleChange}
                  className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-gray-700 font-medium focus:ring-[#C08B3E] focus:border-[#C08B3E] transition-colors outline-none pr-10"
                />
                <Edit2 className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-800" />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-2">
              <label className="text-sm font-semibold text-gray-700">Email</label>
              <div className="relative">
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-gray-700 font-medium focus:ring-[#C08B3E] focus:border-[#C08B3E] transition-colors outline-none pr-10"
                />
                <Edit2 className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-800" />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-2">
              <label className="text-sm font-semibold text-gray-700">Phone Number</label>
              <div className="relative">
                <input 
                  type="tel" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-gray-700 font-medium focus:ring-[#C08B3E] focus:border-[#C08B3E] transition-colors outline-none pr-10"
                />
                <Edit2 className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-800" />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-2">
              <label className="text-sm font-semibold text-gray-700">Address</label>
              <div className="relative">
                <input 
                  type="text" 
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-gray-700 font-medium focus:ring-[#C08B3E] focus:border-[#C08B3E] transition-colors outline-none pr-10"
                />
                <Edit2 className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-800" />
              </div>
            </div>

          </div>

          {/* Actions */}
          <div className="flex justify-end gap-4 mt-10">
            <button 
              onClick={() => navigate('/admin/settings')}
              className="bg-gray-300 hover:bg-gray-400 text-gray-700 px-10 py-3 rounded-xl font-bold transition-colors w-full sm:w-auto text-center"
            >
              Cancel
            </button>
            <button 
              onClick={handleSave}
              className="bg-[#C08B3E] hover:bg-[#a3732f] text-white px-10 py-3 rounded-xl font-bold transition-colors w-full sm:w-auto text-center shadow-lg shadow-[#C08B3E]/30"
            >
              Save
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
