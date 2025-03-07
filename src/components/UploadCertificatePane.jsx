import React, { useState } from "react";
import FullCertificateView from "./FullCertificateView";
import RecipientListPane from "./RecipientListPane";

const UploadCertificatePane = () => {
  const [uploadedFile, setUploadedFile] = useState(null);
  const [currentPane, setCurrentPane] = useState("upload");

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setUploadedFile(file);
      setCurrentPane("fullView");
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) {
      setUploadedFile(file);
      setCurrentPane("fullView");
    }
  };

  if (currentPane === "fullView") {
    return (
      <FullCertificateView
        file={uploadedFile}
        onBack={() => {
          setCurrentPane("upload");
          setUploadedFile(null);
        }}
        onNext={() => setCurrentPane("recipientList")}
      />
    );
  }

  if (currentPane === "recipientList") {
    return <RecipientListPane className='w-screen' onBack={() => setCurrentPane("fullView")} />;
  }

  return (
    <div className="container mx-auto p-4 mt-4 sm:mt-10">
      <div className="flex sm:flex-row justify-between items-center mb-4 gap-2">
        <h1 className="text-lg font-medium">Upload Certificate</h1>
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-600">Save as draft</span>
          <div className="w-12 h-6 bg-gray-200 rounded-full p-1 cursor-pointer">
            <div className="w-4 h-4 bg-white rounded-full"></div>
          </div>
        </div>
      </div>

      <div className="bg-white border-b border-gray-200 p-2 mb-4">
        <div className="flex flex-wrap items-center gap-2 sm:gap-4">
          <div className="flex gap-2">
            <button className="p-1">
              <img src="/img/photo.png" alt="" className="w-5 h-5" />
            </button>
            <button className="p-1 border-r border-gray-200 pr-2">
              <img src="/img/pages.png" alt="" className="w-5 h-5" />
            </button>
          </div>

          <div className="flex items-center gap-2">
            <select className="border rounded px-2 py-1 text-sm">
              <option>Aptos (body)</option>
            </select>
            <select className="border rounded px-2 py-1 text-sm w-14">
              <option>12</option>
            </select>
          </div>
          <div className="flex items-center gap-1">
            <button className="p-1 hover:bg-gray-100 rounded">
              <img src="/img/align-left.png" alt="" className="w-4 h-4" />
            </button>
            <button className="p-1 hover:bg-gray-100 rounded">
              <img src="/img/bold.png" alt="" className="w-4 h-4" />
            </button>
            <button className="p-1 hover:bg-gray-100 rounded">
              <img src="/img/italic.png" alt="" className="w-4 h-4" />
            </button>
            <button className="p-1 hover:bg-gray-100 rounded">
              <img src="/img/underline.png" alt="" className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 p-4 sm:p-8 h-[60vh] sm:h-[80vh]">
        <div
          className={`border-2 border-dashed border-gray-300 rounded-lg h-full flex flex-col items-center justify-center bg-[#F9FAFB] ${
            uploadedFile ? "p-0" : "p-4 sm:p-8"
          }`}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          {uploadedFile ? (
            <div className="w-full h-full flex items-center justify-center">
              {uploadedFile.type.startsWith("image/") ? (
                <img
                  src={URL.createObjectURL(uploadedFile)}
                  alt="Uploaded file"
                  className="max-w-full max-h-full object-contain"
                />
              ) : (
                <iframe
                  src={URL.createObjectURL(uploadedFile)}
                  className="w-full h-full"
                  title="Uploaded PDF"
                />
              )}
            </div>
          ) : (
            <>
              <img src="/img/file-upload-states.png" alt="" className="w-12 h-12 sm:w-16 sm:h-16 mb-4" />
              <div className="text-center space-y-3">
                <label className="cursor-pointer">
                  <h2 className="text-[#5570F1]">
                    Click to upload <span className="text-gray-600">or drag and drop</span>
                  </h2>
                  <input
                    type="file"
                    className="hidden"
                    onChange={handleFileUpload}
                    accept=".png,.jpg,.jpeg,.pdf"
                  />
                </label>
                <p className="text-xs text-gray-500 mt-1">
                  PNG, JPG or PDF (max. 800x400px)
                </p>
                <p className="text-gray-600">OR</p>
                <div className="flex justify-center">
                  <label
                    htmlFor="file"
                    className="cursor-pointer bg-[#5570F1] text-white px-4 py-2 rounded-md text-center"
                  >
                    Browse file
                  </label>
                  <input
                    type="file"
                    id="file"
                    className="hidden"
                    onChange={handleFileUpload}
                  />
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      <div className="flex justify-end mt-4">
        <button
          className="bg-[#5570F1] text-white px-6 py-2 rounded flex items-center gap-2 opacity-50 cursor-not-allowed"
          disabled
        >
          <span>Next Step</span>
          <img src="/img/arrow-forward.png" alt="" className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default UploadCertificatePane;