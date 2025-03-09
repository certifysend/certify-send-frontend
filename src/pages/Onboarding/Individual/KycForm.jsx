"use client"

import { useState } from "react"
import { Eye, EyeOff } from "lucide-react"
import { Link } from "react-router-dom"

const KycForm = () => {
  const [nin, setNin] = useState("")
  const [phone, setPhone] = useState("")
  const [otp, setOtp] = useState("")
  const [isSendingOtp, setIsSendingOtp] = useState(false)
  const [otpSent, setOtpSent] = useState(false)
  const [showNin, setShowNin] = useState(false)

  const handleSendOtp = () => {
    setIsSendingOtp(true)
    setTimeout(() => {
      setIsSendingOtp(false)
      setOtpSent(true)
    }, 2000)
  }

  const handleVerifyAccount = () => {
    if (nin && phone && otp) {
      alert("KYC Verification in progress...")
    }
  }

  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      <div className="w-full lg:w-1/2 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-white min-h-screen">
        <div className="max-w-md w-full mx-auto">
          <h2 className="text-xl sm:text-2xl font-semibold mb-1 sm:mb-2">Verify your identity</h2>
          <p className="text-gray-500 text-sm sm:text-base mb-4 sm:mb-6">
            For security and compliance, please provide your NIN and phone number.
          </p>

          <div className="mb-3 sm:mb-4 relative">
            <input
              type={showNin ? "text" : "password"}
              value={nin}
              onChange={(e) => setNin(e.target.value)}
              placeholder="NIN Number"
              className="w-full border rounded-lg p-2 sm:p-3 text-sm sm:text-base"
            />
            <button
              type="button"
              className="absolute right-3 top-1/2 transform -translate-y-1/2"
              onClick={() => setShowNin(!showNin)}
            >
              {showNin ? <EyeOff size={18} className="text-gray-500" /> : <Eye size={18} className="text-gray-500" />}
            </button>
          </div>

          <div className="mb-3 sm:mb-4">
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+234 Phone Number"
              className="w-full border rounded-lg p-2 sm:p-3 text-sm sm:text-base"
            />
          </div>

          <div className="flex gap-2 mb-3 sm:mb-4">
            <input
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              placeholder="Enter code"
              className="flex-1 border rounded-lg p-2 sm:p-3 text-sm sm:text-base"
              disabled={!otpSent}
            />
            <button
              type="button"
              onClick={handleSendOtp}
              className="bg-[#5570F1] text-white px-2 sm:px-4 py-2 rounded-lg text-xs sm:text-sm disabled:opacity-50 whitespace-nowrap"
              disabled={isSendingOtp}
            >
              {isSendingOtp ? "Sending..." : "Send Code"}
            </button>
          </div>
          <span className="text-xs sm:text-sm text-gray-500 block mb-4 sm:mb-6">
            You'll receive a one-time password (OTP) to complete verification
          </span>

          <button
            onClick={handleVerifyAccount}
            className="w-full bg-[#5570F1] text-white rounded-lg py-2 sm:py-3 text-sm sm:text-base"
          >
            <Link to="/welcome-popup" className="block w-full h-full">
              Verify Account
            </Link>
          </button>
        </div>
      </div>

      <div className="hidden lg:flex w-1/2 bg-[#5570F1]">
        <div className="w-full h-full flex flex-col items-center justify-center px-4 sm:px-10 lg:px-20 text-white relative">
          <div className="absolute top-8 left-8">
            <img src="img/certifysend-logo.png" alt="Certifysend Logo" className="w-[150px] sm:w-[200px] mb-6" />
          </div>
          <div className="flex flex-col items-center text-center justify-center px-4 sm:px-10 lg:px-20 text-white relative">
            <div className="w-full aspect-square flex items-center justify-center">
              <img
                src="/img/Illustration.png"
                alt="illustration"
                className="h-[200px] sm:h-[250px] lg:h-[300px] w-auto absolute right-0 top-28"
              />
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
  )
}

export default KycForm

