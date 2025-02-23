import React from 'react';

const SuccessModal = ({ onViewProjects }) => {
  return (
    <div className="fixed inset-0 bg-black/20 flex items-center justify-center z-[60]">
      <div className="bg-white rounded-2xl w-[400px] p-8 text-center">
        <div className="w-16 h-16 rounded-full border-4 border-[#5570F1]/30 border-t-[#5570F1] animate-spin mx-auto mb-6"></div>
        
        <h2 className="text-xl font-medium mb-3">
          Congratulations!🎉
        </h2>
        
        <p className="text-gray-600 text-sm mb-6">
          All certificates have been processed and delivered to the recipients successfully. You can view the projects for more details or make further updates as needed.
        </p>

        <button
          onClick={onViewProjects}
          className="w-full bg-[#5570F1] text-white py-3 rounded-lg hover:bg-[#4056b5] transition-colors"
        >
          View Projects
        </button>
      </div>
    </div>
  );
};

export default SuccessModal;