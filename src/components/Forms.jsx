import React, { useState } from 'react';
import { FileText } from 'lucide-react';
import FormBuilder from './FormBuilder';

const Form = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showFormBuilder, setShowFormBuilder] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleCreateForm = () => {
    closeModal();
    setShowFormBuilder(true);
  };

  if (showFormBuilder) {
    return <FormBuilder onClose={() => setShowFormBuilder(false)} />;
  }

  return (
    <div className="container mx-auto min-h-screen bg-gray-50 p-4 sm:p-6">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4 py-3 md:py-0">
        <h1 className="md:text-xl font-medium text-left">Start From Scratch or Use Template</h1>
        <button
          className="bg-[#5570F1] text-white px-4 py-2 rounded-lg text-sm flex items-center gap-2"
          onClick={openModal}
        >
          View all Template
          <span className="text-xs">→</span>
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12 bg-[#F2F4FF] p-4 rounded-lg">
        <div className="cursor-pointer" onClick={() => setShowFormBuilder(true)}>
          <div className="bg-[#DBDEEE] rounded-lg p-4 flex flex-col items-center justify-center aspect-square shadow-sm">
            <div className="text-gray-400 text-4xl mb-2">+</div>
          </div>
          <span className="text-sm text-gray-600">Blank Form</span>
        </div>

        <div className="cursor-pointer" onClick={() => setShowFormBuilder(true)}>
          <div className="bg-white rounded-lg p-4 flex flex-col items-center justify-center aspect-square shadow-sm">
            <img src="/img/cert-image.png" alt="Job Application" className="mb-2 w-full h-32 object-cover rounded" />
          </div>
          <span className="text-sm text-gray-600">Job Application</span>
        </div>

        <div className="cursor-pointer" onClick={() => setShowFormBuilder(true)}>
          <div className="bg-white rounded-lg p-4 flex flex-col items-center justify-center aspect-square shadow-sm">
            <img src="/img/cert-image.png" alt="Party Invite" className="mb-2 w-full h-32 object-cover rounded" />
          </div>
          <span className="text-sm text-gray-600">Party Invite</span>
        </div>

        <div className="cursor-pointer" onClick={() => setShowFormBuilder(true)}>
          <div className="bg-white rounded-lg p-4 flex flex-col items-center justify-center aspect-square shadow-sm">
            <img src="/img/cert-image.png" alt="Contact Information" className="mb-2 w-full h-32 object-cover rounded" />
          </div>
          <span className="text-sm text-gray-600">Contact Information</span>
        </div>
      </div>

      <div className="bg-white rounded-lg p-4 sm:p-16">
        <div className="mt-8 sm:mt-32 bg-[#F9FAFB] max-w-md mx-auto py-8 sm:py-12 px-4 sm:px-2 rounded-lg flex flex-col items-center justify-center">
          <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
            <FileText className="w-6 h-6 text-gray-400" />
          </div>
          <h3 className="text-lg text-gray-900 font-medium mb-1">No form submissions yet!</h3>
          <p className="text-sm text-gray-500 mb-4 text-center">
            Create a new form to start collecting responses
          </p>
          <button
            className="text-[#5570F1] text-sm font-medium hover:underline flex items-center gap-1"
            onClick={() => setShowFormBuilder(true)}
          >
            Create a New Form
            <span className="text-xs">→</span>
          </button>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-25 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-lg mx-4">
            <div className="p-4 flex justify-between items-center border-b">
              <h2 className="text-lg font-medium">Templates</h2>
              <button
                className="text-gray-500 hover:text-gray-700 w-6 h-6 flex items-center justify-center rounded-full border"
                onClick={closeModal}
              >
                ×
              </button>
            </div>

            <div className="p-4 sm:p-6">
              <p className="text-gray-600 text-sm mb-6 text-center sm:text-left">
                Choose or customize a ready-made template to streamline your registration process. Tailor
                fields, design, and functionality to suit your event or audience effortlessly.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
                {Array.from({ length: 12 }).map((_, index) => (
                  <div key={index} className="template-item cursor-pointer" onClick={handleCreateForm}>
                    <div className="overflow-hidden border border-gray-200 rounded-lg shadow-sm mb-2">
                      <img src="/api/placeholder/240/180" alt={index % 3 === 0 ? "Job Application" : index % 3 === 1 ? "Party Invite" : "Contact Information"} className="w-full" />
                    </div>
                    <div className="text-center text-sm text-gray-700">
                      {index % 3 === 0 ? "Job Application" : index % 3 === 1 ? "Party Invite" : "Contact Information"}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex justify-end">
                <button className="text-[#5570F1] border border-[#5570F1] rounded-md px-4 py-2 text-sm flex items-center gap-1">
                  Load more
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Form;