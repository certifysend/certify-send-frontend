import React, { useState } from 'react';
import { Search, ChevronLeft, ChevronRight } from "lucide-react";

const RecipientList = () => {
  const recipients = [
    { id: 1, firstName: "Sodiq", lastName: "Tajudeen", email: "tajusodiq1901@gmail.com", certificateName: "User Experience Database", sentDate: "Saturday, 18 Jan. 2025" },
    { id: 2, firstName: "Sodiq", lastName: "Tajudeen", email: "tajusodiq1901@gmail.com", certificateName: "User Experience Database", sentDate: "Saturday, 18 Jan. 2025" },
    { id: 3, firstName: "Sodiq", lastName: "Tajudeen", email: "tajusodiq1901@gmail.com", certificateName: "User Experience Database", sentDate: "Saturday, 18 Jan. 2025" },
    { id: 4, firstName: "Sodiq", lastName: "Tajudeen", email: "tajusodiq1901@gmail.com", certificateName: "User Experience Database", sentDate: "Saturday, 18 Jan. 2025" },
    { id: 5, firstName: "Sodiq", lastName: "Tajudeen", email: "tajusodiq1901@gmail.com", certificateName: "User Experience Database", sentDate: "Saturday, 18 Jan. 2025" },
    { id: 6, firstName: "Sodiq", lastName: "Tajudeen", email: "tajusodiq1901@gmail.com", certificateName: "User Experience Database", sentDate: "Saturday, 18 Jan. 2025" },
    { id: 7, firstName: "Sodiq", lastName: "Tajudeen", email: "tajusodiq1901@gmail.com", certificateName: "User Experience Database", sentDate: "Saturday, 18 Jan. 2025" },
    { id: 8, firstName: "Sodiq", lastName: "Tajudeen", email: "tajusodiq1901@gmail.com", certificateName: "User Experience Database", sentDate: "Saturday, 18 Jan. 2025" },
  ];

  const [selectedRecipients, setSelectedRecipients] = useState([]);

  const handleSelectRecipient = (id) => {
    if (selectedRecipients.includes(id)) {
      setSelectedRecipients(selectedRecipients.filter(recId => recId !== id));
    } else {
      setSelectedRecipients([...selectedRecipients, id]);
    }
  };

  const handleSelectAll = () => {
    if (selectedRecipients.length === recipients.length) {
      setSelectedRecipients([]);
    } else {
      setSelectedRecipients(recipients.map(r => r.id));
    }
  };

  return (
    <div className="md:w-full">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-3">
        <div className="w-full sm:w-64 relative">
          <input
            type="text"
            placeholder="Search here..."
            className="md:w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg text-sm"
          />
          <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
        </div>
        <button className="flex items-center gap-1 px-4 py-2 border border-gray-200 rounded-lg text-sm">
          <Filter className="w-4 h-4" />
          Filter
        </button>
      </div>

      <div className="w-full overflow-hidden">
  <div className="overflow-x-auto max-w-full rounded-lg border border-gray-200">
    <table className="w-full min-w-max divide-y divide-gray-200">
      <thead className="bg-gray-50">
        <tr>
          <th className="px-2 py-3 w-12">
            <input
              type="checkbox"
              className="h-4 w-4 text-blue-600 rounded"
              onChange={handleSelectAll}
              checked={selectedRecipients.length === recipients.length && recipients.length > 0}
            />
          </th>
          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-12">
            S/N
          </th>
          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            First Name
          </th>
          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Last Name
          </th>
          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Email Address
          </th>
          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider sm:hidden">
            Certificate Name
          </th>
          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider sm:hidden">
            Sent Date
          </th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {recipients.map((recipient) => (
          <tr key={recipient.id} className="text-sm">
            <td className="px-4 py-3">
              <input
                type="checkbox"
                className="h-4 w-4 text-blue-600 rounded"
                checked={selectedRecipients.includes(recipient.id)}
                onChange={() => handleSelectRecipient(recipient.id)}
              />
            </td>
            <td className="px-4 py-3 text-gray-900">{recipient.id}</td>
            <td className="px-4 py-3 text-gray-900 whitespace-nowrap">{recipient.firstName}</td>
            <td className="px-4 py-3 text-gray-900 whitespace-nowrap">{recipient.lastName}</td>
            <td className="px-4 py-3 text-gray-900 break-words">{recipient.email}</td>
            <td className="px-4 py-3 text-gray-900 whitespace-nowrap sm:hidden">{recipient.certificateName}</td>
            <td className="px-4 py-3 text-gray-900 whitespace-nowrap sm:hidden">{recipient.sentDate}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>

<div className="flex justify-center mt-6">
  <nav className="flex flex-wrap items-center gap-1">
    <button className="p-1.5 border border-gray-200 rounded-md">
      <ChevronLeft className="w-4 h-4 text-gray-500" />
    </button>
    {[1, 2, 3, 4, 5].map((page) => (
      <button
        key={page}
        className={`px-3 py-1.5 border rounded-md text-sm ${
          page === 3 ? "bg-[#5570F1] text-white border-[#5570F1]" : "border-gray-200 text-gray-600"
        }`}
      >
        {page}
      </button>
    ))}
    <button className="p-1.5 border border-gray-200 rounded-md">
      <ChevronRight className="w-4 h-4 text-gray-500" />
    </button>
  </nav>
</div>

    </div>
  );
};

const Filter = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
  </svg>
);

export default RecipientList;