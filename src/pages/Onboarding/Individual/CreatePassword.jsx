"use client"

import { Link } from "react-router-dom";
import { Eye, EyeOff } from 'lucide-react';
import { useState, useContext } from "react";
import { ProgressContext } from "../../../context/ProgressContext";

const CreatePassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { currentStep, setCurrentStep, totalSteps } = useContext(ProgressContext);

  const requirements = [
    { text: "8 characters minimum", met: password.length >= 8 },
    { text: "Uppercase letters and numbers", met: /(?=.*[A-Z])(?=.*\d)/.test(password) },
    { text: "Special characters (e.g. ! @ # $ %)", met: /[!@#$%^&*(),.?":{}|<>]/.test(password) },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex min-h-screen">
      <div className="w-full lg:w-1/2 flex flex-col px-4 sm:px-6 md:px-8 lg:px-[72px] justify-between">
        <div className="flex-1 flex flex-col justify-center">
          <div className="max-w-[420px] mx-auto w-full">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="font-inter text-xl sm:text-[24px] font-semibold leading-tight sm:leading-[28.8px] tracking-[-0.02em] text-[#1C1D22]">
                  Create your account
                </h1>
                <p className="mt-1 text-[#8B8D97] text-xs sm:text-[14px] leading-tight sm:leading-[16.94px]">
                  Secure your account with a strong and unique password.
                </p>
              </div>
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-4 border-[#5570F1] flex items-center justify-center text-[#5570F1] text-sm sm:text-base font-semibold">
                {currentStep}/{totalSteps}
              </div>
            </div>

            <form onSubmit={handleSubmit} className="mt-6 sm:mt-8 space-y-3 sm:space-y-4">
              <div className="space-y-1 sm:space-y-1.5">
                <label className="block text-xs sm:text-sm font-medium text-[#344054]">Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-3 sm:px-3.5 py-2 sm:py-2.5 bg-white border border-[#D0D5DD] rounded-lg shadow-xs text-[#667085] text-sm sm:text-[16px] focus:outline-none focus:ring-2 focus:ring-[#5570F1] focus:border-transparent pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[#667085]"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              <div className="space-y-1 sm:space-y-1.5">
                <label className="block text-xs sm:text-sm font-medium text-[#344054]">Confirm Password</label>
                <div className="relative">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full px-3 sm:px-3.5 py-2 sm:py-2.5 bg-white border border-[#D0D5DD] rounded-lg shadow-xs text-[#667085] text-sm sm:text-[16px] focus:outline-none focus:ring-2 focus:ring-[#5570F1] focus:border-transparent pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[#667085]"
                  >
                    {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              <div className="pt-1 sm:pt-2">
                <p className="text-xs sm:text-sm text-[#344054] mb-1 sm:mb-2">Your password must have at least:</p>
                <ul className="space-y-0.5 sm:space-y-1">
                  {requirements.map((req, index) => (
                    <li key={index} className="flex items-center text-[10px] sm:text-xs text-[#667085]">
                      <svg
                        viewBox="0 0 14 14"
                        width="12"
                        height="12"
                        className={`mr-1.5 sm:mr-2 ${req.met ? "text-[#5570F1]" : "text-[#D0D5DD]"}`}
                      >
                        <path
                          d="M7 13.5C10.5899 13.5 13.5 10.5899 13.5 7C13.5 3.41015 10.5899 0.5 7 0.5C3.41015 0.5 0.5 3.41015 0.5 7C0.5 10.5899 3.41015 13.5 7 13.5Z"
                          stroke="currentColor"
                          fill="none"
                        />
                        {req.met && (
                          <path
                            d="M4.5 7L6.5 9L9.5 5"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            fill="none"
                          />
                        )}
                      </svg>
                      {req.text}
                    </li>
                  ))}
                </ul>
              </div>

              <button 
                onClick={() => setCurrentStep(3)} 
                type="submit"
                className="w-full bg-[#5570F1] text-white mt-4 sm:mt-6 px-3 sm:px-[18px] py-2 sm:py-2.5 rounded-lg font-semibold text-xs sm:text-[14px] hover:bg-[#5570F1]/90 transition-colors"
              >
                <Link to="/verify-email" className="block w-full h-full">
                  Create account
                </Link>
              </button>
            </form>

            <button type="button" className="w-full text-center text-xs sm:text-sm text-[#8B8D97] mt-3 sm:mt-4 hover:text-[#5570F1]">
              Go back
            </button>
          </div>
        </div>

        <footer className="py-4 sm:py-6">
          <div className="flex flex-wrap justify-center sm:justify-start items-center gap-3 sm:gap-6">
            <Link to="/privacy" className="text-[10px] sm:text-xs text-[#667085] hover:underline">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-[10px] sm:text-xs text-[#667085] hover:underline">
              Terms of Service
            </Link>
            <Link to="/help" className="text-[10px] sm:text-xs text-[#667085] hover:underline">
              Help Center
            </Link>
          </div>
        </footer>
      </div>

      <div className="hidden lg:flex w-1/2 bg-[#5570F1]">
        <div className="w-full h-full flex flex-col items-center justify-center px-8 lg:px-12 xl:px-20 text-white relative">
          <div className="absolute top-8 left-8">
            <img
              src="img/certifysend-logo.png"
              alt="Certifysend Logo"
              className="w-[150px] sm:w-[200px] mb-6"
            />
          </div>
          <div className="flex flex-col items-center text-center justify-center px-4 sm:px-10 lg:px-20 text-white relative">
            <div className="w-full aspect-square flex items-center justify-center">
              <img src="/img/Illustration.png" alt="illustration" className="h-[200px] sm:h-[250px] lg:h-[300px] w-auto absolute right-0 top-28" />
            </div>
            <blockquote className="h-auto sm:h-[374px] gap-4 sm:gap-8 rounded-3xl p-4 sm:p-8 bg-[#6078EC] space-y-2 sm:space-y-4">
              <div className="bg-white w-8 h-8 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mx-auto">
                <img src="img/message.png" alt="" className="w-4 h-4 sm:w-auto sm:h-auto" />
              </div>
              <p className="text-base sm:text-lg font-medium max-w-xs mx-auto">
                "Our certification process has never been easier! Certifysend saved us hours of work and ensured every
                participant received their certificate seamlessly!"
              </p>
              <footer className="mt-2 sm:mt-4">
                <p className="text-xs sm:text-sm">— Jane Doe</p>
                <p className="text-xs sm:text-sm opacity-80">Event Coordinator, LearnPro Academy</p>
              </footer>
              <div className="flex justify-center gap-1 mt-2 sm:mt-4">
                <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-white/40"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-white/40"></div>
              </div>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePassword;
