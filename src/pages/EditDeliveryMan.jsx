import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Download, Pencil } from 'lucide-react';

export default function EditDeliveryMan() {
  const navigate = useNavigate();
  const location = useLocation();
  const manData = location.state?.man;

  const handleBack = (e) => {
    e.preventDefault();
    navigate('/admin/delivery-man');
  };

  const handleSave = (e) => {
    e.preventDefault();
    // Native navigate forwards back to list preserving user flow.
    navigate('/admin/delivery-man');
  };

  // Fallbacks mapping explicitly to the literal placeholders inside Image 7 explicitly requested for matching validation
  // Will map to valid runtime dynamic states if available inside the data-table row click event.
  const displayId = manData?.id || '#200200';
  const displayName = manData?.name || 'Ahmed Mohamed';
  const displayEmail = manData?.email || 'ahmed_mohamed@hotmail.com';
  const displayPhone = manData?.phone || '01117492715';
  const isActive = manData?.status === 'Active';

  return (
    <div className="max-w-5xl">
      {/* Title & Top Export Action */}
      <div className="flex items-center justify-between mb-8 mt-2">
        <h2 className="text-xl font-bold text-gray-800 tracking-tight">Edit Delivery Man</h2>
        <button className="flex items-center px-4 py-2 border-2 border-gray-800 text-gray-800 font-semibold rounded-lg hover:bg-gray-50 transition-colors text-sm">
          <Download className="h-4 w-4 mr-2 text-gray-800" />
          Export
        </button>
      </div>

      {/* Main Container Card */}
      <div className="bg-white rounded-[24px] shadow-sm border border-gray-100 p-8 pb-10 flex flex-col">
        <form onSubmit={handleSave}>
          
          {/* Profile Picture Block structure */}
          <div className="flex flex-col items-start mb-8">
            <h3 className="block text-sm font-semibold text-gray-800 mb-2">Picture</h3>
            <div className="flex items-end">
              <div className="h-28 w-28 rounded-xl overflow-hidden shadow-sm relative mr-4 border-2 border-blue-200">
                <div className="bg-blue-100 h-full w-full flex items-center justify-center object-cover">
                  <img src="https://i.pravatar.cc/250?img=11" alt="Delivery Man Avatar" className="h-full w-full object-cover" />
                </div>
              </div>
              <button type="button" className="flex items-center px-3 py-1.5 border border-primary text-primary text-xs font-semibold rounded-md bg-white hover:bg-primary/5 transition-colors mb-2 shadow-sm">
                <Pencil className="h-3 w-3 mr-1" strokeWidth={3} />
                Change pic.
              </button>
            </div>
          </div>

          {/* Core Edit Grid Form */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
            
            {/* Row 1 Left */}
            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-2">Delivery man ID</label>
              <div className="relative">
                <input
                  type="text"
                  defaultValue={displayId}
                  className="w-full px-4 py-3 pr-10 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors outline-none text-sm font-medium text-gray-500"
                />
                <Pencil className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-800 pointer-events-none" strokeWidth={2} />
              </div>
            </div>

            {/* Row 1 Right */}
            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-2">National ID</label>
              <div className="relative">
                <input
                  type="text"
                  defaultValue="ID_255152626251.pdf"
                  className="w-full px-4 py-3 pr-32 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors outline-none text-sm font-medium text-gray-400"
                />
                <button type="button" className="absolute right-2 top-1/2 -translate-y-[45%] px-2.5 py-1 text-[10px] uppercase font-bold text-primary border border-primary rounded-md hover:bg-primary/5 transition-colors tracking-widest flex items-center shadow-sm">
                  <span className="text-[16px] leading-[0.5] font-light mr-[1px]">+</span> up load file
                </button>
              </div>
            </div>

            {/* Row 2 Left */}
            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-2">Delivery man Name</label>
              <div className="relative">
                <input
                  type="text"
                  defaultValue={displayName}
                  className="w-full px-4 py-3 pr-10 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors outline-none text-sm font-medium text-gray-500"
                />
                <Pencil className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-800 pointer-events-none" strokeWidth={2} />
              </div>
            </div>

            {/* Row 2 Right */}
            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-2">Driving license</label>
              <div className="relative">
                <input
                  type="text"
                  defaultValue="driving_255152626251.pdf"
                  className="w-full px-4 py-3 pr-32 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors outline-none text-sm font-medium text-gray-400"
                />
                <button type="button" className="absolute right-2 top-1/2 -translate-y-[45%] px-2.5 py-1 text-[10px] uppercase font-bold text-primary border border-primary rounded-md hover:bg-primary/5 transition-colors tracking-widest flex items-center shadow-sm">
                  <span className="text-[16px] leading-[0.5] font-light mr-[1px]">+</span> up load file
                </button>
              </div>
            </div>

            {/* Row 3 Left */}
            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-2">Email</label>
              <div className="relative">
                <input
                  type="email"
                  defaultValue={displayEmail}
                  className="w-full px-4 py-3 pr-10 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors outline-none text-sm font-medium text-gray-500"
                />
                <Pencil className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-800 pointer-events-none" strokeWidth={2} />
              </div>
            </div>

            {/* Row 3 Right */}
            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-2">Motorcycle license</label>
              <div className="relative">
                <input
                  type="text"
                  defaultValue="livense_255152626251.pdf"
                  className="w-full px-4 py-3 pr-32 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors outline-none text-sm font-medium text-gray-400"
                />
                <button type="button" className="absolute right-2 top-1/2 -translate-y-[45%] px-2.5 py-1 text-[10px] uppercase font-bold text-primary border border-primary rounded-md hover:bg-primary/5 transition-colors tracking-widest flex items-center shadow-sm">
                  <span className="text-[16px] leading-[0.5] font-light mr-[1px]">+</span> up load file
                </button>
              </div>
            </div>

            {/* Row 4 Left */}
            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-2">Phone Number</label>
              <div className="relative">
                <input
                  type="tel"
                  defaultValue={displayPhone}
                  className="w-full px-4 py-3 pr-10 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors outline-none text-sm font-medium text-gray-500"
                />
                <Pencil className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-800 pointer-events-none" strokeWidth={2} />
              </div>
            </div>

            {/* Row 4 Right */}
            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-2">where is he</label>
              <div className="relative">
                <input
                  type="text"
                  defaultValue="Giza"
                  className="w-full px-4 py-3 pr-10 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors outline-none text-sm font-medium text-gray-500"
                />
                <Pencil className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-800 pointer-events-none" strokeWidth={2} />
              </div>
            </div>

          </div>

          {/* Active Radio Group - Pure static presentational */}
          <div className="flex flex-col mt-8">
            <span className="text-sm font-semibold text-gray-800 mb-3 block">Active</span>
            <div className="flex items-center space-x-4">
              {/* Radio options replicating the View state toggle */}
              <label className="flex items-center cursor-pointer group">
                <div className={`w-4 h-4 rounded-full border flex items-center justify-center mr-2 transition-colors ${isActive !== false ? 'border-primary' : 'border-gray-400 group-hover:border-primary/50'}`}>
                   {isActive !== false && <div className="w-2.5 h-2.5 rounded-full bg-primary" />}
                </div>
                <span className="text-sm font-bold text-gray-800">Yes</span>
              </label>
              <label className="flex items-center cursor-pointer group">
                <div className={`w-4 h-4 rounded-full border flex items-center justify-center mr-2 transition-colors ${isActive === false ? 'border-primary' : 'border-gray-300 group-hover:border-primary/50'}`}>
                   {isActive === false && <div className="w-2.5 h-2.5 rounded-full bg-gray-400" />}
                </div>
                <span className="text-sm font-bold text-gray-500">No</span>
              </label>
            </div>
          </div>

          {/* Bottom Footers (Actions) */}
          <div className="mt-8 flex justify-end space-x-4">
            <button
              type="button"
              onClick={handleBack}
              className="px-12 py-3 rounded-xl font-medium text-gray-500 bg-[#E5E5E5] hover:bg-gray-300 transition-colors text-sm"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-14 py-3 rounded-xl font-bold text-white bg-primary hover:bg-primary/90 shadow-sm transition-colors text-sm tracking-wide"
            >
              Save
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}
