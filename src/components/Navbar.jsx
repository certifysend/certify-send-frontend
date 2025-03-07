"use client"

import { useState } from "react"

const Navbar = ({ variant = "light" }) => {
  const [isOpen, setIsOpen] = useState(false)
  const variants = {
    light: {
      bg: "bg-white",
      text: "text-gray-700",
      border: "border-b border-gray-200",
      logo: "/img/logo.png",
      shadow: "shadow-md",
      mobileBg: "bg-white",
      getStartedBg: "bg-[#5570F1]",
      getStartedText: "text-white",
      buttonIcon: "/img/button-icon1.png",
    },
    blue: {
      bg: "bg-[#5570F1]",
      text: "text-white",
      logo: "/img/logo-white.png",
      mobileBg: "bg-[#5570F1]",
      getStartedBg: "bg-white",
      getStartedText: "text-[#5570F1]",
      buttonIcon: "/img/button-icon.png",
    },
  }

  const currentVariant = variants[variant]

  return (
    <nav className={`${currentVariant.bg} ${currentVariant.border} sticky top-0 z-50 overflow-hidden`}>
      <div className="mx-auto py-3 px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img src={currentVariant.logo || "/placeholder.svg"} alt="CertifySend Logo" className="h-8" />
        </div>

        <div className="hidden lg:flex space-x-8">
          <a href="/" className={`${currentVariant.text} hover:text-opacity-80 font-medium`}>
            Home
          </a>
          <a href="#features" className={`${currentVariant.text} hover:text-opacity-80 font-medium`}>
            Features
          </a>
          <a href="#pricing" className={`${currentVariant.text} hover:text-opacity-80 font-medium`}>
            Pricing
          </a>
          <a href="#about" className={`${currentVariant.text} hover:text-opacity-80 font-medium`}>
            About Us
          </a>
          <a href="#contact" className={`${currentVariant.text} hover:text-opacity-80 font-medium`}>
            Contact
          </a>
        </div>

        <div className="hidden lg:flex items-center space-x-4">
          <button className={`${currentVariant.text} hover:text-opacity-80 font-medium`}>Login</button>
          <a
            href="/signup"
            className={`px-4 py-2 ${currentVariant.getStartedBg} ${currentVariant.getStartedText} font-medium rounded-lg shadow hover:bg-opacity-90 flex items-center space-x-2`}
          >
            <span>Get Started</span>
            <img src={currentVariant.buttonIcon || "/placeholder.svg"} alt="" className="w-5 h-5" />
          </a>
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className={`lg:hidden ${currentVariant.text} focus:outline-none`}>
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      <div className={`lg:hidden ${isOpen ? "block" : "hidden"} ${currentVariant.mobileBg} shadow-md`}>
        <div className="flex flex-col items-center py-4 space-y-4">
          <a href="/" className={`${currentVariant.text} hover:text-opacity-80 font-medium`}>
            Home
          </a>
          <a href="#features" className={`${currentVariant.text} hover:text-opacity-80 font-medium`}>
            Features
          </a>
          <a href="#pricing" className={`${currentVariant.text} hover:text-opacity-80 font-medium`}>
            Pricing
          </a>
          <a href="#about" className={`${currentVariant.text} hover:text-opacity-80 font-medium`}>
            About Us
          </a>
          <a href="#contact" className={`${currentVariant.text} hover:text-opacity-80 font-medium`}>
            Contact
          </a>
          <button className={`${currentVariant.text} hover:text-opacity-80 font-medium`}>Login</button>
          <a
            href="#get-started"
            className={`px-4 py-2 ${currentVariant.getStartedBg} ${currentVariant.getStartedText} font-medium rounded-lg shadow hover:bg-opacity-90 flex items-center space-x-2`}
          >
            <span>Get Started</span>
            <img src={currentVariant.buttonIcon || "/placeholder.svg"} alt="" className="w-5 h-5" />
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

