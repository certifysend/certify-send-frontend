import React, { useState } from "react";
import { X } from "lucide-react";
import EmailCompositionPane from "./EmailCompositionPane";
import ProjectsList from "./ProjectsList";

const UploadMethodModal = ({ onClose }) => {
  const [selectedMethod, setSelectedMethod] = useState("");
  const [showDetailsForm, setShowDetailsForm] = useState(false);
  const [showExistingList, setShowExistingList] = useState(false);
  const [showBulkUpload, setShowBulkUpload] = useState(false);
  const [showEmailPane, setShowEmailPane] = useState(false);
  const [setCsvFile] = useState(null);

  const [certificates] = useState([
    {
      id: 1,
      title: 'Certificate of Achievement',
      modified: 'Just Now',
      edited: 'Now',
      createdAt: 'Saturday, 18 Jan 2025',
      star: '/img/Rating.png',
      preview: '/img/cert-image.png'
    },
    {
      id: 2,
      title: 'Productivity Hacks Workshop',
      modified: '1 hour ago',
      edited: '1 hour ago',
      createdAt: 'Saturday, 18 Jan 2025',
      star: '/img/Rating.png',
      preview: '/img/cert-image.png'
    },
    {
      id: 3,
      title: 'Party Invite',
      modified: '1 hour ago',
      edited: '1 hour ago',
      createdAt: 'Saturday, 18 Jan 2025',
      star: '/img/Rating.png',
      preview: '/img/cert-image.png'
    },
    {
      id: 4,
      title: 'Certificate of Achievement',
      modified: '25 minutes ago',
      edited: '25 minutes ago',
      createdAt: 'Saturday, 18 Jan 2025',
      star: '/img/Rating.png',
      preview: '/img/cert-image.png'
    }
  ]);

  const handleMethodSelect = (method) => {
    setSelectedMethod(method);
    if (method === 'singleUpload') {
      setShowDetailsForm(true);
    } else if (method === 'existingList') {
      setShowExistingList(true);
    } else if (method === 'bulkUpload') {
      setShowBulkUpload(true);
    }
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setCsvFile(file);
    }
  };

  const handleSelectProject = (project) => {
    console.log('Selected project:', project);
  };

  const renderBulkUpload = () => (
    <div className="p-6 w-full max-w-md mx-auto">
      <div className="flex items-center mb-4">
        <button 
          onClick={() => setShowBulkUpload(false)}
          className="text-gray-500 hover:text-gray-700 bg-white rounded p-2"
        >
           <img src="/img/Primary Button.png" alt="" className="h-8 w-8 cursor-pointer" />
        </button>
        <h2 className="text-lg font-medium ml-2">Bulk Upload</h2>
      </div>
      
      <p className="text-sm text-gray-500 mb-6">
        Choose from previously uploaded or saved entries to reuse data efficiently.
      </p>

      <div className="border border-dashed border-gray-300 rounded-lg p-8 mb-4">
        <div className="flex flex-col items-center justify-center">
          <div className="w-10 h-10 mb-4 flex items-center justify-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#5570F1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 16V8" stroke="#5570F1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M8 12L12 8L16 12" stroke="#5570F1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          
          <div className="text-center">
            <p className="mb-1">
              <span className="text-[#5570F1] cursor-pointer">Click to upload</span> or drag and drop
            </p>
            <p className="text-xs text-gray-400">
              PNG, JPG or PDF (max. 800x400px)
            </p>
          </div>
          
          <input 
            type="file" 
            accept=".csv,.xls,.xlsx" 
            onChange={handleFileUpload} 
            className="hidden" 
            id="file-upload"
          />
        </div>
      </div>

      <div className="mt-4 mb-6">
        <p className="font-medium text-sm mb-1">Upload via CSV</p>
        <p className="text-xs text-gray-500">Upload a CSV file containing user data.</p>
      </div>

      <button
        onClick={() => setShowEmailPane(true)}
        className="w-full bg-[#5570F1] text-white p-3 rounded-lg flex justify-center items-center gap-2"
      >
        Next Step
        <img src="/img/arrow-forward.png" alt="" className="w-4 h-4" />
      </button>
    </div>
  );

  const renderExistingList = () => (
    <div className="p-6 w-full">
      <div className="flex items-center mb-6">
        <button 
          onClick={() => setShowExistingList(false)}
          className="text-gray-500 hover:text-gray-700"
        >
           <img src="/img/Primary Button.png" alt="" className="h-8 w-8 cursor-pointer" />
        </button>
        <h2 className="text-lg font-medium ml-4">Select from Existing List</h2>
      </div>
      
      <p className="text-sm text-gray-600 mb-6">
        Choose from previously uploaded or saved entries to reuse data efficiently.
      </p>

      <ProjectsList 
        certificates={certificates}
        onSelect={handleSelectProject} 
        viewMode="list" 
      />

      <div className="flex justify-end">
        <button
          onClick={() => alert("Load more recipients")}
          className="text-[#5570F1] hover:text-[#4058c7] flex items-center gap-2"
        >
          Load More
          <img src="/img/arrow-forward.png" alt="" className="" />
        </button>
      </div>
    </div>
  );

  const renderDetailsForm = () => (
    <div className="p-6">
      <div className="flex items-center mb-6">
        <button 
          onClick={() => setShowDetailsForm(false)}
          className="text-gray-500 hover:text-gray-700"
        >
           <img src="/img/Primary Button.png" alt="" className="h-8 w-8 cursor-pointer" />
        </button>
        <h2 className="text-lg font-medium ml-4">Single Upload</h2>
      </div>
      <p className="text-sm text-gray-600 mb-6">
        Upload a single entry manually for quick and precise additions.
      </p>
      
      <form onSubmit={(e) => {
        e.preventDefault();
        setShowEmailPane(true); 
      }} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            First Name
          </label>
          <input
            type="text"
            placeholder="Enter First Name"
            className="w-full p-2 border rounded-lg"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Last Name
          </label>
          <input
            type="text"
            placeholder="Enter Last Name"
            className="w-full p-2 border rounded-lg"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email Address
          </label>
          <input
            type="email"
            placeholder="Enter Email Address"
            className="w-full p-2 border rounded-lg"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Certificate Name
          </label>
          <input
            type="text"
            placeholder="Enter Certificate Name"
            className="w-full p-2 border rounded-lg"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-[#5570F1] text-white p-2 rounded-lg mt-6 flex text-center justify-center items-center gap-2"
        >
          Next Step
          <img src="/img/arrow-forward.png" alt="" className="" />
        </button>
      </form>
    </div>
  );

  const renderInitialOptions = () => (
    <div className="p-6">
      <h2 className="text-lg font-medium mb-2">Select User Data Upload Method</h2>
      <p className="text-sm text-gray-600 mb-6">
        Choose how you want to upload user data for certificate automation.
      </p>
      
      <div className="space-y-4">
        <label className="flex items-start p-4 border rounded-lg cursor-pointer hover:border-[#5570F1]">
          <input
            type="radio"
            name="uploadMethod"
            className="mt-1"
            checked={selectedMethod === 'singleUpload'}
            onChange={() => handleMethodSelect('singleUpload')}
          />
          <div className="ml-3">
            <div className="font-medium">Single Upload</div>
            <div className="text-sm text-gray-500">Upload a single entry manually for quick and precise additions.</div>
          </div>
        </label>

        <label className="flex items-start p-4 border rounded-lg cursor-pointer hover:border-[#5570F1]">
          <input
            type="radio"
            name="uploadMethod"
            className="mt-1"
            checked={selectedMethod === 'existingList'}
            onChange={() => handleMethodSelect('existingList')}
          />
          <div className="ml-3">
            <div className="font-medium">Select from Existing List</div>
            <div className="text-sm text-gray-500">Choose from previously uploaded or saved entries to reuse data efficiently.</div>
          </div>
        </label>

        <label className="flex items-start p-4 border rounded-lg cursor-pointer hover:border-[#5570F1]">
          <input
            type="radio"
            name="uploadMethod"
            className="mt-1"
            checked={selectedMethod === 'bulkUpload'}
            onChange={() => handleMethodSelect('bulkUpload')}
          />
          <div className="ml-3">
            <div className="font-medium">Bulk Upload</div>
            <div className="text-sm text-gray-500">Upload multiple entries at once using a CSV or Excel file for faster processing.</div>
          </div>
        </label>
      </div>
    </div>
  );

  return (
    <div className="fixed inset-0 w-screen h-screen bg-black/20 flex items-center justify-center z-50">
      <div className={`bg-white rounded-lg relative max-h-[90vh] overflow-hidden ${
        showExistingList ? "w-[900px]" : showBulkUpload ? "w-[500px]" : "w-[480px]"
      }`}>
        <button 
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700 border border-gray-100"
        >
          <X size={25} />
        </button>

        {showEmailPane ? (
          <EmailCompositionPane
            onBack={() => setShowEmailPane(false)} 
            onClose={onClose}
          />
        ) : showBulkUpload ? (
          renderBulkUpload()
        ) : showExistingList ? (
          renderExistingList()
        ) : showDetailsForm ? (
          renderDetailsForm()
        ) : (
          renderInitialOptions()
        )}
      </div>
    </div>
  );
};

export default UploadMethodModal;