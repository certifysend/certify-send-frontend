import React, { useState } from "react";
import UploadMethodModal from "./UploadMethodModal";
import EmailCompositionPane from "./EmailCompositionPane";

const RecipientListPane = ({ onBack }) => {
  const [showModal, setShowModal] = useState(false);
  const [showEmailPane, setShowEmailPane] = useState(false);

  const handleUploadDetails = () => {
    setShowModal(true);
  };

  const handleNextStep = () => {
    setShowEmailPane(true);
  };

  return (
    <div className="container mx-auto md:p-4">
      <div className="flex sm:flex-row justify-between items-center mb-4 md:py-12 py-6 sm:items-center">
        <h1 className="text-sm md:text-lg font-medium mb-2 sm:mb-0">Recipient List</h1>
        <div className="flex items-center gap-2 px-6">
          <span className="text-sm text-gray-600">Save as draft</span>
          <div className="w-12 h-6 bg-gray-200 rounded-full p-1 cursor-pointer">
            <div className="w-4 h-4 bg-white rounded-full"></div>
          </div>
        </div>
      </div>

      <div className="">
        
        <div className="flex items-center justify-end sm:justify-end sm:col-span-1 lg:col-span-2 gap-3 pr-6">
        <div className="relative sm:col-span-1">
          <input
            type="text"
            placeholder="Search..."
            className="md:w-full w-40 pl-6 pr-4 py-2"
          />
          <img
            src="/img/search.png"
            alt="Search"
            className="absolute left-1 top-1/2 transform -translate-y-1/2 w-4 h-4"
          />
        </div>
          <button className="text-gray-600 hover:text-gray-900 flex items-center gap-2">
            <img src="/img/filter-alt.png" alt="Filter" className="h-5 w-5" />
            <span>Filter</span>
          </button>
          <button
            className="md:border border-[#5570F1] text-[#5570F1] md:px-4 py-2 text-xs md:text-base rounded flex items-center md:gap-2"
            onClick={handleUploadDetails}
          >
            <img src="/img/button-icon-upload.png" alt="" className="w-4 h-4 hidden md:flex" />
            Upload Details
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow mb-6 w-screen md:w-full">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 px-10 overflow-hidden">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">S/N</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">First Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email Address</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Certificate Name</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {[...Array(9)].map((_, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm">{index + 1}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm"></td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm"></td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm"></td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm"></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="flex justify-center mb-6">
        <nav className="inline-flex rounded-md shadow">
          <button className="px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
            &lt;
          </button>
          <button className="px-4 py-2 border-t border-b border-gray-300 bg-[#5570F1] text-sm font-medium text-white">
            1
          </button>
          <button className="px-4 py-2 border-t border-b border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
            2
          </button>
          <button className="px-4 py-2 border-t border-b border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
            3
          </button>
          <button className="px-4 py-2 border-t border-b border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 hidden sm:block">
            4
          </button>
          <button className="px-4 py-2 border-t border-b border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 hidden sm:block">
            5
          </button>
          <button className="px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
            &gt;
          </button>
        </nav>
      </div>

      <div className="flex flex-col sm:flex-row justify-end gap-3">
        <button
          className="px-4 py-2 bg-gray-100 text-gray-600 rounded hover:bg-gray-200 flex justify-center items-center"
          onClick={onBack}
        >
          Back
        </button>
        <button
          className="px-4 py-2 bg-[#5570F1] text-white rounded hover:bg-[#4056b5] flex justify-center items-center gap-2"
          onClick={handleNextStep}
        >
          Next Step
          <img src="/img/arrow-forward.png" alt="" className="w-4 h-4" />
        </button>
      </div>
      {showModal && <UploadMethodModal onClose={() => setShowModal(false)} />}
      {showEmailPane && (
        <EmailCompositionPane
          onBack={() => setShowEmailPane(false)}
          onClose={() => setShowEmailPane(false)}
        />
      )}
    </div>
  );
};

export default RecipientListPane;