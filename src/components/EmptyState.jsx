import { useState } from "react";
const EmptyState = ({ handleCertificateSelection, handleCreateForm }) => {

   const [setShowEmptyState] = useState(true)
   const [setShowFormBuilder] = useState(false)
  return (
    <div className="flex flex-col items-center justify-center mt-8 sm:mt-20 bg-[#F9FAFB] max-w-lg mx-auto p-4 sm:p-5 rounded-lg">
      <img src="/img/elements.png" alt="element" className="mb-4 sm:mb-6 w-16 sm:w-auto" />
      <h2 className="text-center mb-2 font-medium text-sm sm:text-base">No Projects Created Yet</h2>
      <p className="text-center mb-4 sm:mb-6 text-gray-500 text-xs sm:text-sm">
      It looks like you haven’t created any projects yet. Start by creating a new project to manage your certificates and forms
      </p>
      <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 w-full sm:w-auto">
        <button
          onClick={() => setShowEmptyState(false)}
          className="bg-[#5570F1] text-white px-3 sm:px-4 py-2 rounded-lg hover:bg-[#4058c7] transition flex items-center justify-center gap-1 sm:gap-2 text-xs sm:text-sm w-full sm:w-auto"
        >
          <img src="/img/button-icon-gen.png" alt="" className="w-3 h-3 sm:w-4 sm:h-4" />
          Generate Certificate
        </button>
        <button
          onClick={() => setShowFormBuilder(true)}
          className="bg-white text-[#5570F1] px-3 sm:px-4 py-2 rounded-lg border border-[#5570F1] hover:bg-[#5570F1]/10 transition flex items-center justify-center gap-1 sm:gap-2 text-xs sm:text-sm w-full sm:w-auto"
        >
          <img src="/img/file-colored.png" alt="" className="w-3 h-3 sm:w-4 sm:h-4" />
          Create New Form
        </button>
      </div>
    </div>
  );
};

export default EmptyState;