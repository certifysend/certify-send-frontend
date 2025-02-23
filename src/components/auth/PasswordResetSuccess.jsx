import React from 'react';

const PasswordResetSuccess = () => {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-lg w-full max-w-sm p-8">
        <div className="flex justify-center mb-4">
          <svg className="w-12 h-12 text-[#5570F1]" viewBox="0 0 24 24">
            <circle 
              className="opacity-25" 
              cx="12" 
              cy="12" 
              r="10" 
              stroke="currentColor" 
              strokeWidth="4"
              fill="none"
            />
            <path 
              className="opacity-75" 
              fill="currentColor" 
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            >
              <animateTransform
                attributeName="transform"
                attributeType="XML"
                type="rotate"
                from="0 12 12"
                to="360 12 12"
                dur="1s"
                repeatCount="indefinite"
              />
            </path>
          </svg>
        </div>

        <div className="text-center mb-6">
          <h2 className="text-xl font-semibold mb-2">Password Reset Successful! 🎉</h2>
          <p className="text-gray-600">
            Your password has been updated. You can now log in to your account with your new credentials.
          </p>
        </div>
        <button 
          className="w-full bg-[#5570F1] text-white py-3 rounded-lg font-medium hover:bg-[#5570F1] transition-colors"
          onClick={() => {
            console.log('Navigating to login...');
          }}
        >
          Go to Login
        </button>
      </div>
    </div>
  );
};

export default PasswordResetSuccess;