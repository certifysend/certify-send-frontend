"use client"

import { Link } from "react-router-dom"
import { useState } from "react"

const KycPopup = ({ onComplete }) => {
  const [isLoading, setIsLoading] = useState(false)

  const handleComplete = () => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      onComplete?.()
    }, 2000)
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-[32px] p-8 max-w-[420px] w-full text-center relative">
        <div className="w-12 h-12 mx-auto mb-4">
          <svg
            className={`w-full h-full text-[#5570F1] ${isLoading ? "animate-spin" : ""}`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        </div>

        <h2 className="text-[24px] font-semibold text-[#1C1D22] mb-3">One Last Step!</h2>

        <p className="text-[#8B8D97] text-[14px] leading-[20px] mb-6">
          To ensure a secure and seamless experience, please complete a quick KYC verification. This helps us keep your
          account safe and compliant.
          <br />
          It only takes a moment!
        </p>

        <button
          onClick={handleComplete}
          disabled={isLoading}
          className="w-full bg-[#5570F1] text-white rounded-lg py-3 font-semibold text-[14px] hover:bg-[#4560E1] transition-colors disabled:opacity-75"
        >
          <Link to="/kyc-form"> 
            Complete KYC 🔒
          </Link>
        </button>
      </div>
    </div>
  )
}

export default KycPopup

