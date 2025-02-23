import { createContext, useState } from "react";

export const ProgressContext = createContext();

export const ProgressProvider = ({ children }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 3;

  return (
    <ProgressContext.Provider value={{ currentStep, setCurrentStep, totalSteps }}>
      {children}
    </ProgressContext.Provider>
  );
};