// src/pages/onboarding/OnboardingLayout.jsx
import React from "react";

const OnboardingLayout = ({ children }) => {
  return (
    <div className="flex h-screen">
      <div className="w-1/2 bg-blue-500 flex items-center justify-center">
        <h1 className="text-white text-3xl font-bold">Certifysend</h1>
      </div>

      <div className="w-1/2 flex items-center justify-center p-6">
        <div className="w-[400px]">{children}</div>
      </div>
    </div>
  );
};

export default OnboardingLayout;
