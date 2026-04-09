import React from 'react';
import { Search, Download, Filter, MoreHorizontal, Eye, Edit2 } from 'lucide-react';
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/react';
import { Link, useNavigate } from 'react-router-dom';

const dummyData = [
  { id: '#200120', name: 'Mohamed Morad', phone: '01096453226', email: 'moahmed_mo@g..', status: 'Active' },
  { id: '#200200', name: 'Mostafa Ashraf', phone: '01115483665', email: 'mostafa_ashraf@h..', status: 'Active' },
  { id: '#200718', name: 'Ali Ayman', phone: '01503752401', email: 'ali_ayman@gmail..', status: 'Active' },
  { id: '#200647', name: 'Fakry Mahmoud', phone: '01004769526', email: 'fakry_108@gmail..', status: 'Inactive' },
  { id: '#200518', name: 'Wahed Mansour', phone: '01503749562', email: 'wahed_mansour@..', status: 'Active' },
  { id: '#200319', name: 'Abdelrahman Ali', phone: '01217264596', email: 'abdo_ali@hotmail..', status: 'Active' },
  { id: '#200279', name: 'Nader Nabil', phone: '01023475815', email: 'nader_nabil@gm..', status: 'Active' },
  { id: '#200194', name: 'Mostafa Zain', phone: '01002839152', email: 'mostafa_zain@g..', status: 'Inactive' },
  { id: '#200194', name: 'Mostafa Zain', phone: '01002839152', email: 'mostafa_zain@g..', status: 'Active' },
  { id: '#200433', name: 'Amer ElMasry', phone: '01203650817', email: 'amer_masry@g..', status: 'Inactive' },
];

export default function DeliveryManList() {
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0 mb-8 mt-2">
        <h2 className="text-xl font-bold text-gray-800 tracking-tight">Delivery Man Data</h2>
        
        <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 w-full sm:w-auto">
          <div className="relative w-full sm:w-56">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search" 
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 transition-all outline-none text-sm placeholder:text-gray-400"
            />
          </div>

          <button className="flex items-center text-gray-600 hover:text-primary transition-colors text-sm font-medium">
            <Download className="h-4 w-4 mr-1.5" />
            Export
          </button>
          
          <button className="flex items-center text-gray-600 hover:text-primary transition-colors text-sm font-medium">
            <Filter className="h-4 w-4 mr-1.5" />
            Filter
          </button>

          <select className="bg-white border border-gray-200 rounded-xl px-4 py-2 text-sm font-medium text-gray-700 outline-none focus:ring-2 focus:ring-primary/20 appearance-none cursor-pointer">
            <option>All Vendors</option>
            <option>Active</option>
            <option>Inactive</option>
          </select>

          <Link 
            to="/admin/delivery-man/add"
            className="w-full sm:w-auto bg-primary text-white px-5 py-2.5 rounded-xl text-sm font-medium hover:bg-primary/90 transition-colors shadow-sm flex items-center justify-center tracking-wide"
          >
            <span className="text-lg mr-2 leading-none font-bold">+</span> Add New
          </Link>
        </div>
      </div>

      <div className="overflow-x-auto rounded-xl border border-gray-100">
        <table className="w-full text-left text-sm text-gray-600">
          <thead className="text-[13px] text-gray-400 border-b border-gray-100 bg-white">
            <tr>
              <th className="px-6 py-4 w-12 font-medium">
                <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary cursor-pointer accent-primary" />
              </th>
              <th className="px-6 py-4 font-medium tracking-wide">ID</th>
              <th className="px-6 py-4 font-medium tracking-wide">Full Name</th>
              <th className="px-6 py-4 font-medium tracking-wide">Phone Number</th>
              <th className="px-6 py-4 font-medium tracking-wide">Email</th>
              <th className="px-6 py-4 font-medium tracking-wide">Status</th>
              <th className="px-6 py-4 font-medium tracking-wide text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50 bg-white">
            {dummyData.map((row, idx) => (
              <tr 
                key={idx} 
                className={`group transition-colors ${
                  idx % 2 === 0 ? 'bg-white' : 'bg-[#FFF9F0]'
                }`}
              >
                <td className="px-6 py-4">
                  <input type="checkbox" className="w-4 h-4 rounded border-gray-300 accent-primary cursor-pointer" />
                </td>
                <td className="px-6 py-4 font-medium text-gray-600 whitespace-nowrap">
                  {row.id}
                </td>
                <td className="px-6 py-4 font-semibold text-gray-800 whitespace-nowrap">
                  {row.name}
                </td>
                <td className="px-6 py-4 text-gray-600 whitespace-nowrap">
                  {row.phone}
                </td>
                <td className="px-6 py-4 text-gray-600 whitespace-nowrap">
                  {row.email}
                </td>
                <td className="px-6 py-4 whitespace-nowrap relative">
                  <span 
                    className={`font-semibold text-sm ${
                      row.status === 'Active' ? 'text-green-500' : 'text-red-500'
                    }`}
                  >
                    {row.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-right whitespace-nowrap">
                  <Menu as="div" className="relative inline-block text-left">
                    <MenuButton className="flex items-center justify-center w-8 h-8 rounded-full hover:bg-black/5 text-gray-600 transition-colors focus:outline-none ml-auto">
                      <MoreHorizontal className="h-5 w-5" />
                    </MenuButton>
                    <MenuItems 
                      transition
                      className="absolute right-0 mt-2 w-36 origin-top-right rounded-xl shadow-lg bg-white ring-1 ring-black/5 focus:outline-none z-20 py-1 transition duration-100 ease-out data-[closed]:scale-95 data-[closed]:opacity-0"
                    >
                      <MenuItem>
                        {({ focus }) => (
                          <button
                            onClick={() => navigate(`/admin/delivery-man/view/${row.id.replace('#', '')}`, { state: { man: row } })}
                            className={`${
                              focus ? 'bg-gray-50 text-gray-900' : 'text-gray-700'
                            } group flex items-center w-full px-4 py-2.5 text-sm font-medium transition-colors`}
                          >
                            <Eye className="mr-3 h-4 w-4 text-gray-400 group-hover:text-primary transition-colors" />
                            View
                          </button>
                        )}
                      </MenuItem>
                      <MenuItem>
                        {({ focus }) => (
                          <button
                            onClick={() => navigate(`/admin/delivery-man/edit/${row.id.replace('#', '')}`, { state: { man: row } })}
                            className={`${
                              focus ? 'bg-gray-50 text-gray-900' : 'text-gray-700'
                            } group flex items-center w-full px-4 py-2.5 text-sm font-medium transition-colors`}
                          >
                            <Edit2 className="mr-3 h-4 w-4 text-gray-400 group-hover:text-primary transition-colors" />
                            Edit
                          </button>
                        )}
                      </MenuItem>
                    </MenuItems>
                  </Menu>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex items-center justify-between pt-6 mt-2">
        <p className="text-sm font-medium text-gray-500">1 of 8 pages</p>
        <div className="flex items-center space-x-1">
          <button className="px-3 py-1.5 border border-gray-200 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors">
            &#9664;
          </button>
          <button className="px-3.5 py-1.5 bg-[#FFF9F0] text-primary font-bold border border-primary/20 rounded-lg text-sm">
            1
          </button>
          <button className="px-3.5 py-1.5 border border-transparent rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50">
            2
          </button>
          <span className="px-2 py-1.5 text-gray-400">...</span>
          <button className="px-3.5 py-1.5 border border-transparent rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50">
            8
          </button>
          <button className="px-3 py-1.5 border border-gray-200 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors">
            &#9654;
          </button>
        </div>
      </div>
    </div>
  );
}
