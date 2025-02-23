"use client"

import { useState, useContext } from "react"
import { Link } from "react-router-dom"
import { ProgressContext } from "../../../context/ProgressContext";

const InstitutionDetails = ({ onNext, onBack }) => {
  const [formData, setFormData] = useState({
    institutionName: "",
    location: "",
  })
  const { currentStep, setCurrentStep, totalSteps } = useContext(ProgressContext);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <div className="flex flex-col lg:flex-row h-screen">
      <div className="w-full lg:w-1/2 flex flex-col px-8 lg:px-[72px] py-8">
        <div className="flex justify-end mb-6">
        <div className="w-12 h-12 rounded-full border-4 border-[#5570F1] flex items-center justify-center text-[#5570F1] font-semibold">
              {currentStep}/{totalSteps}
            </div>
        </div>

        <div className="max-w-[420px] mx-auto w-full mt-32">
          <h2 className="text-2xl font-semibold text-gray-900">Company/Institution Information</h2>
          <p className="text-gray-500 mb-6">Enter your credentials to create your account</p>

          <div className="space-y-6">
            <div>
              <label className="text-sm text-gray-700">Company/Institution Name</label>
              <input
                type="text"
                name="institutionName"
                value={formData.institutionName}
                onChange={handleChange}
                className="w-full h-12 border px-3 py-2 rounded-lg bg-gray-50 mt-1 outline-none text-gray-900 focus:border-[#5570F1]"
              />
            </div>
            <div>
              <label className="text-sm text-gray-700">Location</label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="w-full h-12 border px-3 py-2 rounded-lg bg-gray-50 mt-1 outline-none text-gray-900 focus:border-[#5570F1]"
              />
            </div>

            <button
              onClick={onNext}
              className="w-full bg-[#5570F1] text-white h-12 rounded-lg hover:bg-[#4560E1] transition font-medium"
            >
              <Link onClick={() => setCurrentStep(2)} to="/create-pass">
              Continue
              </Link>
            </button>
            <button
              onClick={onBack}
              className="w-full text-gray-500 text-sm hover:text-gray-700"
            >
              Go back
            </button>
          </div>
        </div>

       <div className="mt-56 flex items-center gap-6">
            <Link href="/privacy" className="text-xs text-[#667085] hover:underline">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-xs text-[#667085] hover:underline">
              Terms of Service
            </Link>
            <Link href="/help" className="text-xs text-[#667085] hover:underline">
              Help Center
            </Link>
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
                <img src="img/message.png" alt="message" className="" />
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

export default InstitutionDetails