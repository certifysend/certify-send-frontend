import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="mx-auto py-3 px-5 md:px-32 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img src="/img/logo.png" alt="CertifySend Logo" className="h-8" />
        </div>

        <div className="hidden md:flex space-x-8">
          <a href="#home" className="text-gray-700 hover:text-[#5570F1] font-medium">Home</a>
          <a href="#features" className="text-gray-700 hover:text-[#5570F1] font-medium">Features</a>
          <a href="#pricing" className="text-gray-700 hover:text-[#5570F1] font-medium">Pricing</a>
          <a href="#about" className="text-gray-700 hover:text-[#5570F1] font-medium">About Us</a>
          <a href="#contact" className="text-gray-700 hover:text-[#5570F1] font-medium">Contact</a>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <button className="text-gray-700 hover:text-[#5570F1] font-medium">Login</button>
          <a
            href="#get-started"
            className="px-4 py-2 bg-[#5570F1] text-white font-medium rounded-lg shadow hover:bg-blue-700 flex items-center space-x-1"
          >
            <span>Get Started</span>
            <img src="/img/button-icon1.png" alt="" className="w-5 h-5" />
          </a>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700 focus:outline-none"
        >
          {isOpen ? (
            <h2 className="">X</h2>
          ) : (
            <img src="/img/carbon_menu.png" alt="Menu" className="w-6 h-6" />
          )}
        </button>
      </div>

      <div className={`md:hidden ${isOpen ? "block" : "hidden"} bg-white shadow-md`}>
        <div className="flex flex-col items-center py-4 space-y-4">
          <a href="#home" className="text-gray-700 hover:text-[#5570F1] font-medium">Home</a>
          <a href="#features" className="text-gray-700 hover:text-[#5570F1] font-medium">Features</a>
          <a href="#pricing" className="text-gray-700 hover:text-[#5570F1] font-medium">Pricing</a>
          <a href="#about" className="text-gray-700 hover:text-[#5570F1] font-medium">About Us</a>
          <a href="#contact" className="text-gray-700 hover:text-[#5570F1] font-medium">Contact</a>
          <button className="text-gray-700 hover:text-[#5570F1] font-medium">Login</button>
          <a
            href="#get-started"
            className="px-4 py-2 bg-[#5570F1] text-white font-medium rounded-lg shadow"
          >
            Get Started
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
