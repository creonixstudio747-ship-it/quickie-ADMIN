import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function AddDeliveryMan() {
  const navigate = useNavigate();

  const handleBack = (e) => {
    e.preventDefault();
    navigate('/admin/delivery-man');
  };

  return (
    <div className="max-w-5xl">
      {/* Title */}
      <div className="mb-8 mt-2">
        <h2 className="text-xl font-bold text-gray-800 tracking-tight">Add Delivery Man</h2>
      </div>

      {/* Form Card */}
      <div className="bg-white rounded-[24px] shadow-sm border border-gray-100 p-8 pb-10">
        <form onSubmit={handleBack}>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            
            {/* Left Column: Picture */}
            <div className="md:col-span-3 lg:col-span-2">
              <h3 className="block text-sm font-medium text-gray-700 mb-2">Picture</h3>
              <div className="border border-gray-300 rounded-xl h-40 w-32 flex flex-col items-center justify-end pb-3 bg-white">
                <button type="button" className="px-3 py-1.5 border border-primary text-primary text-[10px] font-semibold uppercase tracking-wide rounded-md bg-white hover:bg-primary/5 transition-colors flex items-center justify-center leading-none">
                  <span className="mr-1 text-lg leading-none mt-[-2px]">+</span> up load file
                </button>
              </div>
            </div>

            {/* Right Column: Two Column Fields Grid */}
            <div className="md:col-span-9 lg:col-span-10 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 content-start">
              
              {/* Row 1 */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Delivery man ID</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors outline-none text-sm text-gray-700"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">National ID</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors outline-none text-sm text-gray-700"
                />
              </div>

              {/* Row 2 */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Delivery man Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors outline-none text-sm text-gray-700"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Driving license</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors outline-none text-sm text-gray-700"
                />
              </div>

              {/* Row 3 */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors outline-none text-sm text-gray-700"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Motorcycle license</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors outline-none text-sm text-gray-700"
                />
              </div>

              {/* Row 4 */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors outline-none text-sm text-gray-700"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">where is he</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors outline-none text-sm text-gray-700"
                />
              </div>

            </div>
          </div>

          {/* Footer Actions */}
          <div className="mt-12 flex items-center justify-end space-x-4">
            <button
              type="button"
              onClick={handleBack}
              className="px-14 py-3 rounded-xl font-medium text-gray-500 bg-[#E5E5E5] hover:bg-gray-300 transition-colors text-[15px]"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-16 py-3 rounded-xl font-medium text-white bg-primary hover:bg-primary/90 shadow-sm transition-colors text-[15px]"
            >
              Add
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}
