import React from "react";

const FullCertificateView = ({ file, onBack, onNext }) => {
  const fileUrl = URL.createObjectURL(file);

  return (
    <div className="container mx-auto p-4 mt-10">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-lg font-medium">Upload Certificate</h1>
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-600">Save as draft</span>
          <div className="w-12 h-6 bg-gray-200 rounded-full p-1 cursor-pointer">
            <div className="w-4 h-4 bg-white rounded-full"></div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 p-8 h-[80vh] relative">
        <div className="h-full flex items-center justify-center">
          <img
            src={fileUrl}
            alt="Uploaded Certificate"
            className="max-w-full max-h-full object-contain rounded-lg"
          />
        </div>

        <div className="absolute bottom-4 right-4 flex gap-2">
          <button
            onClick={onBack}
            className="border border-[#5570F1] text-gray-600 px-4 py-2 text-sm md:text-base rounded flex items-center gap-2 hover:bg-gray-50"
          >
            <img src="/img/upload.png" alt="" className="w-4 h-4" />
            Re-upload
          </button>
          <button
            onClick={onNext}
            className="bg-[#5570F1] text-white px-4 py-2 rounded flex text-sm md:text-base items-center gap-2 hover:bg-[#4056b5]"
          >
            Next step
            <img src="/img/arrow-forward.png" alt="" className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FullCertificateView;