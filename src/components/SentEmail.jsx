import React from "react";
import { Search, Filter, ArrowUpFromDot } from "lucide-react";

const SentPane = () => {
  return (
    <div className="container mx-auto min-h-screen bg-white p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-lg font-medium text-gray-900">Sent</h1>
        <div className="flex gap-4">
          <button className="flex items-center gap-2 px-4 py-2 bg-[#5570F1] text-white rounded-lg text-sm">
            Send Bulk Email
            <ArrowUpFromDot className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="flex items-center justify-end gap-2">
      <div className="relative">
            <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500" />
            <input
              type="text"
              placeholder="Search here..."
              className="w-full border p-2 pl-8 rounded-lg focus:ring focus:ring-blue-300"
            />
          </div>

          <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg text-sm">
            <Filter className="w-4 h-4" />
            Filter
          </button>
      </div>
      <div className="flex items-center justify-center h-[400px]">
        <div className="text-center mt-32 bg-[#F9FAFB] max-w-md mx-auto py-12 px-2 rounded-lg">
          <div className="w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
            <img src="/img/iconContainer8.png" alt="" className="" />
          </div>
          <h3 className="text-lg text-gray-900 font-medium mb-2">
            No Recipient's Added Yet
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

export default SentPane;