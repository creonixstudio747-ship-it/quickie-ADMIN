import React, { useState } from 'react';
import { ChevronLeft, Edit2, CheckCircle2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

export default function GeneralInfo() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: 'Zac Hudson',
    email: 'zac_huson@gmail.com',
    password: '**************',
    confirmPassword: '**************'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    // Validation
    if (!formData.name || !formData.email) {
      toast.error('Name and Email are required!');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      toast.error('Passwords do not match. Please ensure both fields are identical.');
      return;
    }
    
    // Simulate Backend processing
    toast.success('General Information saved successfully!', {
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
        
        {/* Cover Graphic / Header Area */}
        <div className="h-40 bg-gray-50 flex items-end justify-center relative pt-24 px-10 pb-6 border-b border-gray-100">
           
           {/* Left Title Space & Nav */}
           <div className="absolute left-10 bottom-6 flex items-center gap-4">
              <button 
                onClick={() => navigate('/admin/settings')}
                className="w-10 h-10 border-2 border-[#C08B3E] rounded-full flex items-center justify-center text-[#C08B3E] hover:bg-[#C08B3E] hover:text-white transition-colors"
                title="Go Back"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <h2 className="text-2xl font-bold text-gray-800">General</h2>
           </div>

          {/* Profile Circle Overlay */}
          <div className="flex flex-col items-centertranslate-y-1/2 translate-y-6">
             <div className="h-28 w-28 rounded-full overflow-hidden border-4 border-white shadow-md z-10 bg-white">
                <img 
                  src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&h=256&q=80" 
                  alt="Super Admin Profile" 
                  className="h-full w-full object-cover"
                />
             </div>
             <p className="text-gray-500 font-medium mt-3 text-center">Super Admin</p>
          </div>

          {/* Change Pic Button right aligned absolute */}
          <div className="absolute right-10 bottom-12">
            <button className="flex items-center gap-2 border border-[#C08B3E] text-[#C08B3E] font-semibold px-4 py-1.5 rounded-lg hover:bg-[#C08B3E] hover:text-white transition-colors bg-white z-20 relative">
              <Edit2 className="h-4 w-4" />
              Change Pic
            </button>
          </div>
        </div>

        {/* Content Body */}
        <div className="px-10 pt-16 max-w-3xl mx-auto">
          
          {/* Form */}
          <div className="space-y-6">
            
            <div className="grid grid-cols-1 gap-2">
              <label className="text-sm font-semibold text-gray-700">Name</label>
              <div className="relative">
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
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
              <label className="text-sm font-semibold text-gray-700">Password</label>
              <div className="relative">
                <input 
                  type="password" 
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-gray-700 font-medium tracking-widest focus:ring-[#C08B3E] focus:border-[#C08B3E] transition-colors outline-none pr-10"
                />
                <Edit2 className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-800" />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-2">
              <label className="text-sm font-semibold text-gray-700">Confirmation Password</label>
              <div className="relative">
                <input 
                  type="password" 
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-gray-700 font-medium tracking-widest focus:ring-[#C08B3E] focus:border-[#C08B3E] transition-colors outline-none pr-10"
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
