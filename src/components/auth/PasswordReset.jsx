import React, { useState } from 'react';

const EmailVerification = () => {
  const [verificationCode, setVerificationCode] = useState(['', '', '', '', '']);
  
  const handleCodeChange = (index, value) => {
    if (value.length <= 1 && /^[0-9]*$/.test(value)) {
      const newCode = [...verificationCode];
      newCode[index] = value;
      setVerificationCode(newCode);
      
      if (value && index < 4) {
        const nextInput = document.querySelector(`input[name="code-${index + 1}"]`);
        nextInput?.focus();
      }
    }
  };

  return (
    <div className="flex h-screen">
      <div className="w-1/2 p-6">
        <div className="h-full flex flex-col">
          <div className="flex-grow">
            <div className="mb-12">
              <div className="w-32 h-8 bg-gray-200 rounded-md"></div>
            </div>

            <div className="mb-6">
              <div className="flex items-center justify-between">
                <h1 className="text-2xl font-semibold">Check Your Email!</h1>
                <span className="text-[#5570F1] font-medium">3/3</span>
              </div>
            </div>

            <p className="text-gray-600">We've sent a verification code to certind@gmail.com</p>
            <p className="text-gray-600 mb-8">Please check your inbox (and spam folder, just in case)</p>

            <div className="flex gap-3 mb-8">
              {verificationCode.map((digit, index) => (
                <input
                  key={index}
                  type="text"
                  name={`code-${index}`}
                  value={digit}
                  onChange={(e) => handleCodeChange(index, e.target.value)}
                  className="w-12 h-12 border-2 border-gray-300 rounded-lg text-center text-xl focus:border-[#5570F1] focus:outline-none"
                  maxLength={1}
                />
              ))}
            </div>

            <div className="mb-8">
              <p className="text-gray-700 font-medium mb-2">Instructions:</p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Open your email client</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Find email from Certifyend Support</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Copy the 6-digit code provided in the email</span>
                </div>
              </div>
            </div>

            <button className="w-full bg-[#5570F1] text-white py-3 rounded-lg font-medium hover:bg-[#5570F1] transition-colors mb-4">
              Verify Your Code
            </button>

            <div className="text-center mb-8">
              <span className="text-gray-600">Didn't receive the code? </span>
              <button className="text-[#5570F1] hover:underline">Resend Code</button>
            </div>
          </div>

          <div className="flex gap-6 text-gray-500 text-sm">
            <button className="hover:text-gray-700">Privacy Policy</button>
            <button className="hover:text-gray-700">Terms of Service</button>
            <button className="hover:text-gray-700">Help Center</button>
          </div>
        </div>
      </div>

      <div className="hidden lg:flex w-1/2 bg-[#5570F1]">
        <div className="w-full h-full flex flex-col items-center justify-center px-20 text-white relative">
          <div className="absolute top-8 left-8">
            <img
              src="img/certifysend-logo.png"
              alt="Certifysend Logo"
              className="w-[200px] mb-6"
            />
          </div>
          <div className="flex flex-col items-center text-center justify-center px-20 text-white relative">
            <div className="w-full aspect-square flex items-center justify-center">
              <img src="/img/Illustration.png" alt="illustration" className="h-[300px] w-[300px] absolute right-0 top-28" />
            </div>
            <blockquote className="h-[374px] left-[182px] gap-8 rounded-3xl p-8 bg-[#6078EC] space-y-4">
              <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center mx-auto">
                <img src="img/message.png" alt="" className="" />
              </div>
              <p className="text-lg font-medium max-w-xs mx-auto">
                "Our certification process has never been easier! Certifysend saved us hours of work and ensured every
                participant received their certificate seamlessly!"
              </p>
              <footer className="mt-4">
                <p className="text-sm">— Jane Doe</p>
                <p className="text-sm opacity-80">Event Coordinator, LearnPro Academy</p>
              </footer>
              <div className="flex justify-center gap-1 mt-4">
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

export default EmailVerification;