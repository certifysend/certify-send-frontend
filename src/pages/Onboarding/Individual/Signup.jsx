"use client"
import { useState, useContext } from "react"
import { Link } from "react-router-dom"
import { ProgressContext } from "../../../context/ProgressContext"

export default function SignUp() {
  const [activeTab, setActiveTab] = useState("individuals")
  const { currentStep, setCurrentStep, totalSteps } = useContext(ProgressContext)

  return (
    <div className="flex min-h-screen bg-gray-50">
      <div className="w-full lg:w-1/2 bg-white flex flex-col px-4 sm:px-6 md:px-8 lg:px-[72px]">
        <div className="flex-1 flex flex-col min-h-screen">
          <div className="py-6 sm:py-8 md:py-10 flex-grow">
            <div className="max-w-[420px] mx-auto w-full">
              <div className="flex justify-between items-center">
                <div>
                  <h1 className="font-inter text-xl sm:text-[24px] font-semibold leading-tight sm:leading-[28.8px] tracking-[-0.02em] text-[#1C1D22]">
                    Sign up to Certifysend
                  </h1>
                  <p className="mt-1 text-[#8B8D97] text-xs sm:text-[14px] leading-tight sm:leading-[16.94px]">
                    Enter your credentials to create your account
                  </p>
                </div>
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-4 border-[#5570F1] flex items-center justify-center text-[#5570F1] text-sm sm:text-base font-semibold">
                  {currentStep}/{totalSteps}
                </div>
              </div>

              <div className="mt-6 sm:mt-8 border-b border-[#E5E7EB]">
                <div className="flex">
                  <button
                    onClick={() => setActiveTab("individuals")}
                    className={`pb-2 px-3 sm:px-4 text-xs sm:text-sm font-medium relative ${
                      activeTab === "individuals"
                        ? "text-[#5570F1] border-b-2 border-[#5570F1]"
                        : "text-[#8B8D97] hover:text-[#5570F1]"
                    }`}
                  >
                    Individuals
                  </button>
                  <button
                    onClick={() => setActiveTab("company")}
                    className={`pb-2 px-3 sm:px-4 text-xs sm:text-sm font-medium relative ${
                      activeTab === "company"
                        ? "text-[#5570F1] border-b-2 border-[#5570F1]"
                        : "text-[#8B8D97] hover:text-[#5570F1]"
                    }`}
                  >
                    Company/Institution
                  </button>
                </div>
              </div>

              {activeTab === "individuals" ? (
                <IndividualSignup setCurrentStep={setCurrentStep} />
              ) : (
                <InstitutionSignupForm setCurrentStep={setCurrentStep} />
              )}
            </div>
          </div>
          
          {/* Footer moved outside the main content div but still within the left column */}
          <div className="py-4 mt-auto">
            <div className="flex flex-wrap justify-center sm:justify-start items-center gap-3 sm:gap-6 max-w-[420px] mx-auto">
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
          </div>
        </div>
      </div>

      <div className="hidden lg:flex w-1/2 bg-[#5570F1]">
        <div className="w-full h-full flex flex-col items-center justify-center px-8 lg:px-12 xl:px-20 text-white relative">
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

const IndividualSignup = ({ setCurrentStep }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    agreedToTerms: false,
  })

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Submitted Data:", formData)
  }

  return (
    <form onSubmit={handleSubmit} className="mt-4 sm:mt-6">
      <div className="space-y-3 sm:space-y-4">
        <div className="space-y-1 sm:space-y-1.5">
          <label className="block text-xs sm:text-sm font-medium text-[#344054]">First Name</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="Enter your first name"
            className="w-full px-3 sm:px-3.5 py-2 sm:py-2.5 border border-[#D0D5DD] rounded-lg focus:ring-2 focus:ring-[#5570F1] focus:border-transparent text-sm"
            required
          />
        </div>

        <div className="space-y-1 sm:space-y-1.5">
          <label className="block text-xs sm:text-sm font-medium text-[#344054]">Last Name</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Enter your last name"
            className="w-full px-3 sm:px-3.5 py-2 sm:py-2.5 border border-[#D0D5DD] rounded-lg focus:ring-2 focus:ring-[#5570F1] focus:border-transparent text-sm"
            required
          />
        </div>

        <div className="space-y-1 sm:space-y-1.5">
          <label className="block text-xs sm:text-sm font-medium text-[#344054]">Email Address</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="w-full px-3 sm:px-3.5 py-2 sm:py-2.5 border border-[#D0D5DD] rounded-lg focus:ring-2 focus:ring-[#5570F1] focus:border-transparent text-sm"
            required
          />
        </div>

        <div className="flex items-start">
          <input
            type="checkbox"
            name="agreedToTerms"
            checked={formData.agreedToTerms}
            onChange={handleChange}
            className="mt-1 h-3 w-3 sm:h-4 sm:w-4 rounded border-[#D0D5DD] text-[#5570F1] focus:ring-[#5570F1]"
            required
          />
          <p className="ml-2 text-[10px] sm:text-xs text-[#667085]">
            By signing up you agree to our{" "}
            <Link to="/terms" className="text-[#5570F1] hover:underline">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link to="/privacy" className="text-[#5570F1] hover:underline">
              Privacy Policy
            </Link>
            , and confirm that you are at least 18 years old.
          </p>
        </div>

        <button
          onClick={() => setCurrentStep(2)}
          className="w-full bg-[#5570F1] text-white px-3 sm:px-[18px] py-2 sm:py-2.5 rounded-lg font-semibold text-xs sm:text-[14px] hover:bg-[#5570F1]/90 transition-colors"
        >
          <Link to="/create-password" className="block w-full h-full">
            Continue
          </Link>
        </button>

        <div className="relative my-6 sm:my-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-[#E5E7EB]"></div>
          </div>
          <div className="relative flex justify-center text-xs sm:text-sm">
            <span className="bg-white px-2 text-[#8B8D97]">Or</span>
          </div>
        </div>

        <div className="space-y-2 sm:space-y-3">
          <button className="w-full flex items-center justify-center gap-2 sm:gap-3 px-3 sm:px-[18px] py-2 sm:py-2.5 bg-white border border-[#D0D5DD] rounded-lg text-[#344054] text-xs sm:text-sm font-semibold hover:bg-gray-50 transition-colors">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="sm:w-6 sm:h-6">
              <path
                d="M22.56 12.25C22.56 11.47 22.49 10.72 22.36 10H12V14.255H17.92C17.665 15.63 16.89 16.795 15.725 17.575V20.335H19.28C21.36 18.42 22.56 15.6 22.56 12.25Z"
                fill="#4285F4"
              />
              <path
                d="M12 23C14.97 23 17.46 22.015 19.28 20.335L15.725 17.575C14.74 18.235 13.48 18.625 12 18.625C9.13504 18.625 6.71004 16.69 5.84504 14.09H2.17004V16.94C3.98004 20.535 7.70004 23 12 23Z"
                fill="#34A853"
              />
              <path
                d="M5.845 14.09C5.625 13.43 5.5 12.725 5.5 12C5.5 11.275 5.625 10.57 5.845 9.91V7.06H2.17C1.4 8.592 0.999999 10.287 0.999999 12C0.999999 13.713 1.4 15.408 2.17 16.94L5.845 14.09Z"
                fill="#FBBC05"
              />
              <path
                d="M12 5.375C13.615 5.375 15.065 5.93 16.205 7.02L19.36 3.865C17.455 2.09 14.965 1 12 1C7.70004 1 3.98004 3.465 2.17004 7.06L5.84504 9.91C6.71004 7.31 9.13504 5.375 12 5.375Z"
                fill="#EA4335"
              />
            </svg>
            Continue with Google
          </button>
          <button className="w-full flex items-center justify-center gap-2 sm:gap-3 px-3 sm:px-[18px] py-2 sm:py-2.5 bg-white border border-[#D0D5DD] rounded-lg text-[#344054] text-xs sm:text-sm font-semibold hover:bg-gray-50 transition-colors">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="sm:w-6 sm:h-6">
              <path
                d="M22 5.79997C21.2483 6.12606 20.4534 6.34163 19.64 6.43997C20.4982 5.92729 21.1413 5.12075 21.45 4.16997C20.6436 4.65003 19.7608 4.98826 18.84 5.16997C18.2245 4.50254 17.405 4.05826 16.5098 3.90682C15.6147 3.75537 14.6945 3.90532 13.8938 4.33315C13.093 4.76099 12.4569 5.44379 12.0852 6.27437C11.7135 7.10495 11.6273 8.03753 11.84 8.91997C10.2094 8.83749 8.61444 8.39925 7.15865 7.63325C5.70287 6.86726 4.42221 5.78966 3.39 4.45997C3.02914 5.09613 2.83952 5.82299 2.84 6.55997C2.83872 7.24935 3.00422 7.92874 3.32176 8.53839C3.63929 9.14805 4.09902 9.66863 4.66 10.06C4.00798 10.0388 3.37163 9.85525 2.8 9.51997V9.57997C2.80489 10.5305 3.13599 11.4488 3.73731 12.1879C4.33864 12.927 5.17326 13.4457 6.1 13.66C5.74326 13.7702 5.37287 13.8233 5 13.818C4.74189 13.8223 4.48442 13.7976 4.23 13.744C4.49391 14.5528 5.00462 15.2615 5.69107 15.7721C6.37753 16.2827 7.20558 16.5705 8.06 16.594C6.6172 17.7295 4.83588 18.3459 3 18.354C2.66574 18.3544 2.33174 18.3331 2 18.29C3.87443 19.4981 6.05881 20.1327 8.29 20.13C9.82969 20.146 11.3571 19.855 12.7831 19.274C14.2091 18.693 15.505 17.8338 16.5952 16.7465C17.6854 15.6591 18.548 14.3654 19.1326 12.9409C19.7172 11.5164 20.012 9.98969 20 8.44997C20 8.27997 20 8.09997 20 7.91997C20.7847 7.33478 21.4615 6.61739 22 5.79997Z"
                fill="#1DA1F2"
              />
            </svg>
            Continue with Twitter
          </button>
        </div>

        <p className="mt-4 sm:mt-6 text-center text-xs sm:text-sm text-[#8B8D97]">
          Already have an account?{" "}
          <Link to="/login" className="text-[#5570F1] hover:underline">
            Log in
          </Link>
        </p>
      </div>
    </form>
  )
}

const InstitutionSignupForm = ({ setCurrentStep }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    agreedToTerms: false,
  })

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Submitted Data:", formData)
  }

  return (
    <form onSubmit={handleSubmit} className="mt-4 sm:mt-6">
      <div className="space-y-3 sm:space-y-4">
        <div className="space-y-1 sm:space-y-1.5">
          <label className="block text-xs sm:text-sm font-medium text-[#344054]">First Name</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="Enter your first name"
            className="w-full px-3 sm:px-3.5 py-2 sm:py-2.5 border border-[#D0D5DD] rounded-lg focus:ring-2 focus:ring-[#5570F1] focus:border-transparent text-sm"
            required
          />
        </div>

        <div className="space-y-1 sm:space-y-1.5">
          <label className="block text-xs sm:text-sm font-medium text-[#344054]">Last Name</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Enter your last name"
            className="w-full px-3 sm:px-3.5 py-2 sm:py-2.5 border border-[#D0D5DD] rounded-lg focus:ring-2 focus:ring-[#5570F1] focus:border-transparent text-sm"
            required
          />
        </div>

        <div className="space-y-1 sm:space-y-1.5">
          <label className="block text-xs sm:text-sm font-medium text-[#344054]">Company/Institution Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="w-full px-3 sm:px-3.5 py-2 sm:py-2.5 border border-[#D0D5DD] rounded-lg focus:ring-2 focus:ring-[#5570F1] focus:border-transparent text-sm"
            required
          />
        </div>

        <div className="space-y-1 sm:space-y-1.5">
          <label className="block text-xs sm:text-sm font-medium text-[#344054]">Phone Number</label>
          <div className="flex items-center border border-[#D0D5DD] rounded-lg focus-within:ring-2 focus-within:ring-[#5570F1] focus-within:border-transparent">
            <select className="bg-transparent outline-none text-gray-900 text-xs sm:text-sm mr-2 pl-3 sm:pl-3.5 py-2 sm:py-2.5 border-r border-[#D0D5DD]">
              <option>+234</option>
              <option>+1</option>
              <option>+44</option>
            </select>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              className="w-full px-3 sm:px-3.5 py-2 sm:py-2.5 bg-transparent outline-none text-gray-900 text-sm"
              required
            />
          </div>
        </div>

        <div className="flex items-start">
          <input
            type="checkbox"
            name="agreedToTerms"
            checked={formData.agreedToTerms}
            onChange={handleChange}
            className="mt-1 h-3 w-3 sm:h-4 sm:w-4 rounded border-[#D0D5DD] text-[#5570F1] focus:ring-[#5570F1]"
            required
          />
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

        <button
          onClick={() => setCurrentStep(2)}
          className="w-full bg-[#5570F1] text-white px-3 sm:px-[18px] py-2 sm:py-2.5 rounded-lg font-semibold text-xs sm:text-[14px] hover:bg-[#5570F1]/90 transition-colors"
        >
          <Link to="/institution-details" className="block w-full h-full">
            Continue
          </Link>
        </button>

        <div className="relative my-6 sm:my-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-[#E5E7EB]"></div>
          </div>
          <div className="relative flex justify-center text-xs sm:text-sm">
            <span className="bg-white px-2 text-[#8B8D97]">Or</span>
          </div>
        </div>

        <div className="space-y-2 sm:space-y-3">
          <button className="w-full flex items-center justify-center gap-2 sm:gap-3 px-3 sm:px-[18px] py-2 sm:py-2.5 bg-white border border-[#D0D5DD] rounded-lg text-[#344054] text-xs sm:text-sm font-semibold hover:bg-gray-50 transition-colors">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="sm:w-6 sm:h-6">
              <path
                d="M22.56 12.25C22.56 11.47 22.49 10.72 22.36 10H12V14.255H17.92C17.665 15.63 16.89 16.795 15.725 17.575V20.335H19.28C21.36 18.42 22.56 15.6 22.56 12.25Z"
                fill="#4285F4"
              />
              <path
                d="M12 23C14.97 23 17.46 22.015 19.28 20.335L15.725 17.575C14.74 18.235 13.48 18.625 12 18.625C9.13504 18.625 6.71004 16.69 5.84504 14.09H2.17004V16.94C3.98004 20.535 7.70004 23 12 23Z"
                fill="#34A853"
              />
              <path
                d="M5.845 14.09C5.625 13.43 5.5 12.725 5.5 12C5.5 11.275 5.625 10.57 5.845 9.91V7.06H2.17C1.4 8.592 0.999999 10.287 0.999999 12C0.999999 13.713 1.4 15.408 2.17 16.94L5.845 14.09Z"
                fill="#FBBC05"
              />
              <path
                d="M12 5.375C13.615 5.375 15.065 5.93 16.205 7.02L19.36 3.865C17.455 2.09 14.965 1 12 1C7.70004 1 3.98004 3.465 2.17004 7.06L5.84504 9.91C6.71004 7.31 9.13504 5.375 12 5.375Z"
                fill="#EA4335"
              />
            </svg>
            Continue with Google
          </button>
          <button className="w-full flex items-center justify-center gap-2 sm:gap-3 px-3 sm:px-[18px] py-2 sm:py-2.5 bg-white border border-[#D0D5DD] rounded-lg text-[#344054] text-xs sm:text-sm font-semibold hover:bg-gray-50 transition-colors">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="sm:w-6 sm:h-6">
              <path
                d="M22 5.79997C21.2483 6.12606 20.4534 6.34163 19.64 6.43997C20.4982 5.92729 21.1413 5.12075 21.45 4.16997C20.6436 4.65003 19.7608 4.98826 18.84 5.16997C18.2245 4.50254 17.405 4.05826 16.5098 3.90682C15.6147 3.75537 14.6945 3.90532 13.8938 4.33315C13.093 4.76099 12.4569 5.44379 12.0852 6.27437C11.7135 7.10495 11.6273 8.03753 11.84 8.91997C10.2094 8.83749 8.61444 8.39925 7.15865 7.63325C5.70287 6.86726 4.42221 5.78966 3.39 4.45997C3.02914 5.09613 2.83952 5.82299 2.84 6.55997C2.83872 7.24935 3.00422 7.92874 3.32176 8.53839C3.63929 9.14805 4.09902 9.66863 4.66 10.06C4.00798 10.0388 3.37163 9.85525 2.8 9.51997V9.57997C2.80489 10.5305 3.13599 11.4488 3.73731 12.1879C4.33864 12.927 5.17326 13.4457 6.1 13.66C5.74326 13.7702 5.37287 13.8233 5 13.818C4.74189 13.8223 4.48442 13.7976 4.23 13.744C4.49391 14.5528 5.00462 15.2615 5.69107 15.7721C6.37753 16.2827 7.20558 16.5705 8.06 16.594C6.6172 17.7295 4.83588 18.3459 3 18.354C2.66574 18.3544 2.33174 18.3331 2 18.29C3.87443 19.4981 6.05881 20.1327 8.29 20.13C9.82969 20.146 11.3571 19.855 12.7831 19.274C14.2091 18.693 15.505 17.8338 16.5952 16.7465C17.6854 15.6591 18.548 14.3654 19.1326 12.9409C19.7172 11.5164 20.012 9.98969 20 8.44997C20 8.27997 20 8.09997 20 7.91997C20.7847 7.33478 21.4615 6.61739 22 5.79997Z"
                fill="#1DA1F2"
              />
            </svg>
            Continue with Twitter
          </button>
        </div>

        <p className="mt-4 sm:mt-6 text-center text-xs sm:text-sm text-[#8B8D97]">
          Already have an account?{" "}
          <Link to="/login" className="text-[#5570F1] hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </form>
  )
}

