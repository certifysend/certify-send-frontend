"use client"

import { Link } from "react-router-dom"
import { useState, useContext, useRef } from "react"
import { ProgressContext } from "../../../context/ProgressContext"

const VerificationScreen = () => {
  const [verificationCode, setVerificationCode] = useState(["", "", "", "", ""])
  const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null), useRef(null)]
  const { currentStep, setCurrentStep, totalSteps } = useContext(ProgressContext)

  const handleInput = (index, value) => {
    if (value.length <= 1 && /^\d*$/.test(value)) {
      const newCode = [...verificationCode]
      newCode[index] = value
      setVerificationCode(newCode)

      if (value && index < 4) {
        inputRefs[index + 1].current?.focus()
      }
    }
  }

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !verificationCode[index] && index > 0) {
      inputRefs[index - 1].current?.focus()
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className="flex min-h-screen">
      <div className="w-full lg:w-1/2 flex flex-col px-4 sm:px-6 md:px-8 lg:px-16 justify-center">
        <div className="flex-1 flex flex-col max-w-md mx-auto w-full justify-center">
          <div className="flex flex-row items-center justify-between gap-4 mb-6">
            <div className="flex-1">
              <h1 className="text-xl sm:text-2xl font-medium text-[#37393F] mb-1">Check your inbox</h1>
              <p className="text-xs sm:text-sm text-[#53545C]">
                Enter the verification code we just sent to{" "}
                <Link to="#" className="text-[#5570F1] hover:underline">
                  certifysend@gmail.com
                </Link>
              </p>
            </div>
            <div className="relative w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0">
              <div className="absolute inset-0 rounded-full border-4 border-[#5570F1]/20"></div>
              <div
                className="absolute inset-0 rounded-full border-4 border-[#5570F1] border-l-transparent border-b-transparent"
                style={{ transform: "rotate(-45deg)" }}
              ></div>
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-4 border-[#5570F1] flex items-center justify-center text-[#5570F1] text-sm sm:text-base font-semibold">
                {currentStep}/{totalSteps}
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            <div className="flex justify-between gap-1 sm:gap-2">
              {verificationCode.map((digit, index) => (
                <input
                  key={index}
                  ref={inputRefs[index]}
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleInput(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  className="w-10 h-10 sm:w-12 sm:h-12 text-center text-lg sm:text-xl border border-[#D0D5DD] rounded-lg focus:border-[#5570F1] focus:ring-1 focus:ring-[#5570F1] outline-none"
                />
              ))}
            </div>

            <button
              onClick={() => setCurrentStep(4)}
              type="submit"
              className="w-full bg-[#5570F1] text-white py-2.5 sm:py-3 rounded-lg font-medium text-sm hover:bg-[#5570F1]/90 transition-colors"
            >
              <Link to="/kyc-popup" className="block w-full h-full">
                Confirm
              </Link>
            </button>
          </form>

          <div className="text-center mt-4 text-xs sm:text-sm">
            <span className="text-[#53545C]">Didn't receive a code? </span>
            <button className="text-[#5570F1] hover:underline">Resend</button>
            <span className="text-[#53545C]"> or </span>
            <button className="text-[#5570F1] hover:underline">Change email</button>
          </div>
        </div>

        <footer className="py-4 sm:py-6">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 sm:gap-6">
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

      <div className="hidden lg:block w-1/2 bg-[#5570F1]">
        <div className="h-full flex flex-col items-center px-8 lg:px-12 xl:px-16 py-8">
          <div className="self-start">
            <img src="/img/certifysend-logo.png" alt="Certifysend Logo" className="h-6 sm:h-8" />
          </div>

          <div className="flex-1 flex items-center justify-center">
            <img src="/img/Illustration.png" alt="Illustration" className="max-w-full lg:max-w-md" />
          </div>

          <div className="w-full max-w-md bg-[#6078EC] rounded-3xl p-6 lg:p-8 text-center text-white">
            <div className="bg-white w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
              <img src="/img/message.png" alt="Message icon" className="w-5 h-5 sm:w-auto sm:h-auto" />
            </div>
            <p className="text-base lg:text-lg font-medium mb-4 sm:mb-6">
              "Our certification process has never been easier! Certifysend saved us hours of work and ensured every
              participant received their certificate seamlessly!"
            </p>
            <div className="space-y-0.5 sm:space-y-1">
              <p className="font-medium text-sm sm:text-base">Jane Doe</p>
              <p className="text-xs sm:text-sm opacity-80">Event Coordinator, LearnPro Academy</p>
            </div>
            <div className="flex justify-center gap-1.5 sm:gap-2 mt-4 sm:mt-6">
              <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-white/40"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-white/40"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VerificationScreen

