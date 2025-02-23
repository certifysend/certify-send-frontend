import React, { useState } from 'react';
import { Download } from 'lucide-react';

const BulkEmailPane = () => {
  const [activeTab, setActiveTab] = useState('All Recipients');

  const tabs = ['All Recipients', 'By Certificates', 'By Forms', 'By Upload'];

  return (
    <div className="container mx-auto min-h-screen bg-white p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-lg font-medium text-gray-900">Recipients List</h1>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 border border-[#5570F1] text-[#5570F1] rounded-lg text-sm">
            <Download className="w-4 h-4" />
            Upload New Email
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-gray-200 text-gray-700 rounded-lg text-sm">
            Send Bulk Email
            <span className="text-xs">→</span>
          </button>
        </div>
      </div>

      <div className="border-b border-gray-200 mb-8">
        <nav className="flex gap-8">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-1 py-3 text-sm font-medium ${
                activeTab === tab
                  ? 'text-[#5570F1] border-b-2 border-[#5570F1]'
                  : 'text-gray-500'
              }`}
            >
              {tab}
            </button>
          ))}
        </nav>
      </div>

      <div className="flex items-center justify-center h-[400px]">
        <div className="text-center mt-32 bg-[#F9FAFB] max-w-md mx-auto py-12 px-2 rounded-lg">
          <div className="w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
            <img src="/img/iconContainer8.png" alt="" className="" />
          </div>
          <h3 className="text-lg text-gray-900 font-medium mb-2">
            No Recipients Added Yet!
          </h3>
          <p className="text-sm text-gray-500 mb-6 max-w-sm mx-auto">
            Upload a CSV file (format using our template) or collect using forms or certificates
          </p>
          <div className="flex gap-3 justify-center">
            <button className="px-4 py-2 bg-[#5570F1] text-white rounded-lg text-sm">
              Download Template
            </button>
            <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg text-sm">
              Create a New Form
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BulkEmailPane;