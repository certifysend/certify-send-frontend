import React from 'react';
import { FileText } from 'lucide-react';

const FormSubmissionsPane = () => {
  return (
    <div className="container mx-auto min-h-screen bg-gray-50 p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-medium">Start From Scratch or Use Template</h1>
        <button className="bg-[#5570F1] text-white px-4 py-2 rounded-lg text-sm flex items-center gap-2">
          View all Template
          <span className="text-xs">→</span>
        </button>
      </div>

      <div className="grid grid-cols-4 gap-4 mb-12 bg-[#F2F4FF] p-4 rounded-lg">
        <div className="">
        <div className="bg-[#DBDEEE] rounded-lg p-4 flex flex-col items-center justify-center aspect-square shadow-sm">
          <div className="text-gray-400 text-4xl mb-2">+</div>
        </div>
        <span className="text-sm text-gray-600">Blank Form</span>
        </div>
        
        <div className="">
        <div className="bg-white rounded-lg p-4 flex flex-col items-center justify-center aspect-square shadow-sm">
          <img src="/img/job-app-template.png" alt="Job Application" className="mb-2 w-full h-32 object-cover rounded" />
        </div>
        <span className="text-sm text-gray-600">Job Application</span>
        </div>

        <div className="">
        <div className="bg-white rounded-lg p-4 flex flex-col items-center justify-center aspect-square shadow-sm">
          <img src="/img/job-app-template.png" alt="Job Application" className="mb-2 w-full h-32 object-cover rounded" />
        </div>
        <span className="text-sm text-gray-600">Job Application</span>
        </div>

        <div className="">
        <div className="bg-white rounded-lg p-4 flex flex-col items-center justify-center aspect-square shadow-sm">
          <img src="/img/contact-template.png" alt="Contact Information" className="mb-2 w-full h-32 object-cover rounded" />
        </div>
        <span className="text-sm text-gray-600">Contact Information</span>
        </div>
      </div>

      <div className="bg-white rounded-lg p-16 ">
        <div className="mt-32 bg-[#F9FAFB] max-w-md mx-auto py-12 px-2 rounded-lg flex flex-col items-center justify-center">
        <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
          <FileText className="w-6 h-6 text-gray-400" />
        </div>
        <h3 className="text-lg text-gray-900 font-medium mb-1">No form submissions yet!</h3>
        <p className="text-sm text-gray-500 mb-4">Create a new form to start collecting responses</p>
        <button className="text-[#5570F1] text-sm font-medium hover:underline flex items-center gap-1">
          Create a New Form
          <span className="text-xs">→</span>
        </button>
      </div>
      </div>
    </div>
  );
};

export default FormSubmissionsPane;