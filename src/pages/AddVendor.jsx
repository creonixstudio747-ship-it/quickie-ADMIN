import React, { useState } from 'react';
import { ChevronLeft, ChevronDown, Check, ImagePlus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react';

const categories = [
  'Medicine',
  'Grocery',
  'Fastfood',
  'Fruits',
  'Vegetables',
  'Restaurent'
];

export default function AddVendor() {
  const navigate = useNavigate();
  const [category, setCategory] = useState(categories[0]);

  const handleBack = () => {
    navigate('/admin/vendors');
  };

  const handleSave = (e) => {
    e.preventDefault();
    console.log("Selected Category:", category);
    toast.success('Vendor saved successfully!');
    navigate('/admin/vendors');
  };

  return (
    <div className="max-w-4xl">
      {/* Header / Breadcrumb */}
      <div className="flex items-center mb-8">
        <button
          onClick={handleBack}
          className="mr-3 p-2 rounded-full text-primary hover:bg-primary/10 transition-all hover:scale-110 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
        >
          <ChevronLeft className="h-6 w-6" strokeWidth={2.5} />
        </button>
        <h2 className="text-xl font-medium text-gray-800">
          Partner Vendors <span className="text-gray-400 mx-2">|</span> <span className="font-bold text-gray-900">Add Vendor</span>
        </h2>
      </div>

      {/* Main Form Card */}
      <div className="bg-white rounded-[24px] shadow-sm border border-gray-100 p-8">
        <form onSubmit={handleSave}>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            
            {/* Left Column: Logo Upload (based on image layout but adapted to text instructions) */}
            <div className="md:col-span-4">
              <h3 className="text-sm font-semibold text-gray-800 mb-3">Logo</h3>
              <div className="border-2 border-dashed border-gray-200 rounded-2xl h-48 flex flex-col items-center justify-center bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer group">
                <ImagePlus className="h-8 w-8 text-primary opacity-60 mb-2 group-hover:scale-110 transition-transform" />
                <span className="px-4 py-1.5 border border-primary/30 text-primary text-xs font-semibold uppercase tracking-wide rounded-md bg-white">
                  + up load file
                </span>
              </div>
            </div>

            {/* Right Column: Fields Grid */}
            <div className="md:col-span-8 flex flex-col space-y-6">
              
              {/* Personal Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors outline-none text-sm text-gray-700"
                    placeholder="Enter first name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors outline-none text-sm text-gray-700"
                    placeholder="Enter last name"
                  />
                </div>
              </div>

              {/* Business Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Shop Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors outline-none text-sm text-gray-700"
                    placeholder="Enter shop name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Vendor Category</label>
                  <Listbox value={category} onChange={setCategory}>
                    <div className="relative mt-1">
                      <ListboxButton className="relative w-full cursor-pointer rounded-xl bg-white py-3 pl-4 pr-10 text-left border border-gray-200 focus:outline-none focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary/20 text-sm text-gray-700 font-medium sm:text-sm">
                        <span className="block truncate">{category || "Select category"}</span>
                        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4">
                          <ChevronDown className="h-5 w-5 text-gray-400" aria-hidden="true" />
                        </span>
                      </ListboxButton>
                      <ListboxOptions 
                        transition
                        className="absolute z-20 mt-1 max-h-60 w-full overflow-auto rounded-xl bg-gray-900 py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm origin-top transition duration-100 ease-out data-[closed]:scale-95 data-[closed]:opacity-0"
                      >
                        {categories.map((cat, catIdx) => (
                          <ListboxOption
                            key={catIdx}
                            className={({ focus }) =>
                              `relative cursor-default select-none py-2.5 pl-10 pr-4 transition-colors ${
                                focus ? 'bg-primary/20 text-primary font-medium' : 'text-gray-100'
                              }`
                            }
                            value={cat}
                          >
                            {({ selected }) => (
                              <>
                                <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>
                                  {cat}
                                </span>
                                {selected ? (
                                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-primary">
                                    <Check className="h-4 w-4" aria-hidden="true" />
                                  </span>
                                ) : null}
                              </>
                            )}
                          </ListboxOption>
                        ))}
                      </ListboxOptions>
                    </div>
                  </Listbox>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors outline-none text-sm text-gray-700"
                    placeholder="Enter phone number"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Open/Close Time</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors outline-none text-sm text-gray-700"
                    placeholder="e.g. 09:00 AM - 10:00 PM"
                  />
                </div>
              </div>

            </div>
          </div>

          {/* Full Width Location Block */}
          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
            <textarea
              rows="3"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors outline-none text-sm text-gray-700 resize-none"
              placeholder="Enter full address"
            ></textarea>
          </div>

          {/* Footer Actions */}
          <div className="mt-10 flex items-center justify-end space-x-4 border-t border-gray-100 pt-6">
            <button
              type="button"
              onClick={handleBack}
              className="px-8 py-3 rounded-xl font-semibold text-gray-500 bg-gray-200 hover:bg-gray-300 transition-colors text-sm"
            >
              Back
            </button>
            <button
              type="submit"
              className="px-10 py-3 rounded-xl font-semibold text-white bg-primary hover:bg-primary/90 shadow-sm transition-colors text-sm"
            >
              Save Vendor
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}
