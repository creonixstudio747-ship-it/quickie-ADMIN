import React, { useState } from 'react';
import { ChevronRight, ChevronDown, Mail, Smartphone } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const MOCK_OPTIONS = [
  { id: 'general', label: 'General', path: '/admin/settings/general' },
  { id: 'account', label: 'Account' },
  { id: 'business', label: 'Business Informations', path: '/admin/settings/business' },
  { id: 'staff', label: 'Staff Profile' },
  { id: 'categories', label: 'Categories' },
  { id: 'product', label: 'Product Settings' },
  { id: 'table', label: 'Table Booking' },
  { id: 'sms_setting', label: 'SMS Setting' },
  { id: 'branch', label: 'Branch' },
  { id: 'roles', label: 'Roles & Permissions' },
  { id: 'payment', label: 'Payment Setting' },
  { id: 'app_pages', label: 'Application Pages' },
  { id: 'pos', label: 'POS Setting' },
  { id: 'sys_pages', label: 'System Pages' },
  { id: 'delivery', label: 'Delivery settings' },
  { id: 'smtp', label: 'SMTP Setting' },
  { id: 'language', label: 'Language Setting' },
  { id: 'backup', label: 'System Backup' },
  { id: 'theme', label: 'Theme Settings' },
  { id: 'addon', label: 'Addon Setting' },
  { id: 'notification', label: 'Notification', hasChildren: true },
  { id: 'delivery_man', label: 'Delivery Man setting' },
  { id: 'app', label: 'App Settings' }
];

export default function SettingsList() {
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState(null);
  
  // Custom states for toggles
  const [emailNotif, setEmailNotif] = useState(true);
  const [smsNotif, setSmsNotif] = useState(false);

  const handleInteract = (option) => {
    if (option.hasChildren) {
      setExpanded(expanded === option.id ? null : option.id);
    } else if (option.path) {
      navigate(option.path);
    }
  };

  return (
    <div className="p-8 pb-20 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold text-gray-800 mb-8">Settings</h1>
      
      {/* Main Settings Card */}
      <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 pt-12">
        
        {/* Profile Info Header */}
        <div className="flex flex-col items-center mb-16">
          <div className="h-28 w-28 rounded-full overflow-hidden mb-4 border-4 border-gray-50 shadow-md">
            <img 
              src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&h=256&q=80" 
              alt="Super Admin" 
              className="h-full w-full object-cover"
            />
          </div>
          <h2 className="text-xl font-medium text-gray-800 mb-1">Super Admin</h2>
          <p className="text-gray-500">zac_hudson@gmail.com</p>
        </div>

        {/* Options Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-2 max-w-4xl mx-auto">
          {MOCK_OPTIONS.map((option) => (
            <div key={option.id} className="flex flex-col">
              <button 
                onClick={() => handleInteract(option)}
                className="flex items-center justify-between w-full py-4 px-4 rounded-xl hover:bg-gray-50 transition-colors group"
              >
                <span className="font-semibold text-gray-800 tracking-wide text-left">{option.label}</span>
                {option.hasChildren ? (
                  expanded === option.id ? (
                    <ChevronDown className="h-5 w-5 text-[#C08B3E]" />
                  ) : (
                    <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-[#C08B3E] transition-colors" />
                  )
                ) : (
                  <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-[#C08B3E] transition-colors" />
                )}
              </button>

              {/* Collapsible Sub-menu specifically for Notification */}
              {option.id === 'notification' && expanded === 'notification' && (
                <div className="ml-8 pr-4 py-2 space-y-4 border-l-2 border-[#C08B3E]/30 pl-4 mb-4 animate-in slide-in-from-top-2">
                  
                  {/* Email Toggle */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 text-gray-500">
                      <Mail className="h-4 w-4" />
                      <span className="text-sm font-medium">Email Notifications</span>
                    </div>
                    {/* Toggle Slider */}
                    <button 
                      onClick={() => setEmailNotif(!emailNotif)}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${emailNotif ? 'bg-white border-2 border-[#C08B3E]' : 'bg-gray-200 border-2 border-gray-200'}`}
                    >
                      <span className={`inline-block h-4 w-4 transform rounded-full transition-transform ${emailNotif ? 'translate-x-5 bg-[#C08B3E]' : 'translate-x-1 bg-gray-400'}`} />
                    </button>
                  </div>

                  {/* SMS Toggle */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 text-gray-500">
                      <Smartphone className="h-4 w-4" />
                      <span className="text-sm font-medium">SMS Notifications</span>
                    </div>
                    {/* Toggle Slider */}
                    <button 
                      onClick={() => setSmsNotif(!smsNotif)}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${smsNotif ? 'bg-white border-2 border-[#C08B3E]' : 'bg-gray-200 border-2 border-gray-200'}`}
                    >
                      <span className={`inline-block h-4 w-4 transform rounded-full transition-transform ${smsNotif ? 'translate-x-5 bg-[#C08B3E]' : 'translate-x-1 bg-gray-400'}`} />
                    </button>
                  </div>

                </div>
              )}
            </div>
          ))}

          {/* Log Out special item per Image 0 mockup */}
          <div className="col-span-1 md:col-span-2 mt-4 max-w-4xl">
             <button className="flex items-center justify-start w-full py-4 px-4 rounded-xl hover:bg-red-50 transition-colors">
               <span className="font-bold text-red-500">Log Out</span>
             </button>
          </div>
        </div>
      </div>
    </div>
  );
}
