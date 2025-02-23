import React, { useState } from 'react';
import { Search, Download } from 'lucide-react';

const RecipientList = () => {
  const [recipients] = useState([
    {
      id: 1,
      firstName: 'Sodiq',
      lastName: 'Tajudeen',
      email: 'tajsodiq1991@gmail.com',
      certificateName: 'User Experience Database',
      sentDate: 'Saturday, 18 Jan 2025'
    },
    {
      id: 2,
      firstName: 'Sodiq',
      lastName: 'Tajudeen',
      email: 'tajsodiq1991@gmail.com',
      certificateName: 'User Experience Database',
      sentDate: 'Saturday, 18 Jan 2025'
    },
    {
      id: 3,
      firstName: 'Sodiq',
      lastName: 'Tajudeen',
      email: 'tajsodiq1991@gmail.com',
      certificateName: 'User Experience Database',
      sentDate: 'Saturday, 18 Jan 2025'
    },
    {
      id: 4,
      firstName: 'Sodiq',
      lastName: 'Tajudeen',
      email: 'tajsodiq1991@gmail.com',
      certificateName: 'User Experience Database',
      sentDate: 'Saturday, 18 Jan 2025'
    },
    {
      id: 5,
      firstName: 'Sodiq',
      lastName: 'Tajudeen',
      email: 'tajsodiq1991@gmail.com',
      certificateName: 'User Experience Database',
      sentDate: 'Saturday, 18 Jan 2025'
    },
    {
      id: 6,
      firstName: 'Sodiq',
      lastName: 'Tajudeen',
      email: 'tajsodiq1991@gmail.com',
      certificateName: 'User Experience Database',
      sentDate: 'Saturday, 18 Jan 2025'
    },
    {
      id: 7,
      firstName: 'Sodiq',
      lastName: 'Tajudeen',
      email: 'tajsodiq1991@gmail.com',
      certificateName: 'User Experience Database',
      sentDate: 'Saturday, 18 Jan 2025'
    },
    {
      id: 8,
      firstName: 'Sodiq',
      lastName: 'Tajudeen',
      email: 'tajsodiq1991@gmail.com',
      certificateName: 'User Experience Database',
      sentDate: 'Saturday, 18 Jan 2025'
    }
  ]);

  return (
    <div className="space-y-6">
      <div className="items-center flex justify-end">
       
        <div className="flex items-center space-x-4">
        <div className="relative w-80">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input 
            type="text" 
            placeholder="Search here..." 
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-300 focus:border-blue-300"
          />
        </div>
        <button className="px-4 py-2 text-gray-600 hover:text-gray-900 flex items-center space-x-2">
           <img src="/img/filter-alt.png" alt="" className="" />
            <span>Filter</span>
          </button>
          <button className="px-4 py-2 text-gray-600 hover:text-gray-900 flex items-center space-x-2">
            <Download className="w-4 h-4" />
            <span>Upload Details</span>
          </button>
         
        </div>
      </div>

      <div className="bg-white rounded-lg border">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50 text-left">
              <th className="px-6 py-3 text-xs font-medium text-gray-500">S/N</th>
              <th className="px-6 py-3 text-xs font-medium text-gray-500">First Name</th>
              <th className="px-6 py-3 text-xs font-medium text-gray-500">Last Name</th>
              <th className="px-6 py-3 text-xs font-medium text-gray-500">Email Address</th>
              <th className="px-6 py-3 text-xs font-medium text-gray-500">Certificate Name</th>
              <th className="px-6 py-3 text-xs font-medium text-gray-500">Sent Date</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {recipients.map((recipient) => (
              <tr key={recipient.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 text-sm">{recipient.id}</td>
                <td className="px-6 py-4 text-sm">{recipient.firstName}</td>
                <td className="px-6 py-4 text-sm">{recipient.lastName}</td>
                <td className="px-6 py-4 text-sm">{recipient.email}</td>
                <td className="px-6 py-4 text-sm">{recipient.certificateName}</td>
                <td className="px-6 py-4 text-sm">{recipient.sentDate}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="flex items-center justify-center py-4 border-t">
          <nav className="flex items-center space-x-2">
            <button className="p-2 border rounded hover:bg-gray-100">&lt;</button>
            <button className="p-2 rounded hover:bg-gray-100">1</button>
            <button className="p-2 rounded hover:bg-gray-100">2</button>
            <button className="p-2 rounded hover:bg-gray-100">3</button>
            <button className="p-2 rounded hover:bg-gray-100">4</button>
            <button className="p-2 rounded hover:bg-gray-100">5</button>
            <button className="p-2 border rounded hover:bg-gray-100">&gt;</button>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default RecipientList;