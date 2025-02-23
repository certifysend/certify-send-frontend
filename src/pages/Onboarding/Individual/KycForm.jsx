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
    <div className="flex h-screen">
      <div className="w-1/2 flex items-center justify-center p-10 bg-white">
        <div className="max-w-md w-full">
          <h2 className="text-2xl font-semibold mb-2">Verify your identity</h2>
          <p className="text-gray-500 mb-6">For security and compliance, please provide your NIN and phone number.</p>

          <div className="mb-4 relative">
            <input
              type={showNin ? "text" : "password"}
              value={nin}
              onChange={(e) => setNin(e.target.value)}
              placeholder="NIN Number"
              className="w-full border rounded-lg p-3"
            />
            <button
              type="button"
              className="absolute right-3 top-3"
              onClick={() => setShowNin(!showNin)}
            >
              {showNin ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          <div className="mb-4">
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+234 Phone Number"
              className="w-full border rounded-lg p-3"
            />
          </div>

          <div className="flex gap-2 mb-4">
            <input
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              placeholder="Enter code"
              className="flex-1 border rounded-lg p-3"
              disabled={!otpSent}
            />
            <button
              type="button"
              onClick={handleSendOtp}
              className="bg-[#5570F1] text-white px-4 rounded-lg disabled:opacity-50"
              disabled={isSendingOtp}
            >
              {isSendingOtp ? "Sending..." : "Send Code"}
            </button>
          </div>
          <span className="">You’ll receive a one-time password (OTP) to complete verification</span>

          <button
            onClick={handleVerifyAccount}
            className="w-full bg-[#5570F1] text-white rounded-lg py-3"
          >
            <Link to="/welcome-popup">Verify Account</Link>
            
          </button>
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
        <img src="/img/Illustration.png" alt="illustration" className="h-[300px] w-[300px] absolute right-0  top-28" />
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
  )
}

export default KycForm
