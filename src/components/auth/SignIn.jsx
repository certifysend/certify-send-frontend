import { useState } from "react"
import { FaGoogle, FaTwitter } from "react-icons/fa"
import { AiOutlineMail, AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"

const SignIn = () => {
  const [passwordVisible, setPasswordVisible] = useState(false)
  const togglePassword = () => setPasswordVisible(!passwordVisible)

  return (
    <div className="flex h-screen">
      <div className="w-1/2 flex flex-col justify-center items-center bg-white p-10">
        <div className="w-96">
          <h2 className="text-2xl font-bold text-gray-800">Sign in to Certifysend</h2>
          <p className="text-gray-500 mt-2">Enter your credentials to access your account</p>

          <div className="mt-6">
            <label className="block text-gray-700 text-sm font-medium">Email Address</label>
            <div className="relative mt-1">
              <input
                type="email"
                placeholder="Input"
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5570F1]"
              />
              <AiOutlineMail className="absolute right-3 top-3 text-gray-400" />
            </div>
          </div>

          <div className="mt-4">
            <label className="block text-gray-700 text-sm font-medium">Password</label>
            <div className="relative mt-1">
              <input
                type={passwordVisible ? "text" : "password"}
                placeholder="Enter Password"
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5570F1]"
              />
              <button
                type="button"
                onClick={togglePassword}
                className="absolute right-3 top-3 text-gray-400"
              >
                {passwordVisible ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
              </button>
            </div>
          </div>


          <div className="flex items-center justify-between mt-3">
            <label className="flex items-center text-gray-600 text-sm">
              <input type="checkbox" className="mr-2" />
              Remember me for 30 days
            </label>
            <a href="/password-reset" className="text-[#5570F1] text-sm hover:underline">Forgot Password?</a>
          </div>

          <button className="w-full bg-[#5570F1] hover:[#5570F1] text-white py-3 rounded-lg mt-4 font-medium">
            Sign in
          </button>

          <div className="flex items-center my-6">
            <div className="flex-1 border-b"></div>
            <span className="px-3 text-gray-500">Or</span>
            <div className="flex-1 border-b"></div>
          </div>

          <button className="w-full flex items-center justify-center border py-3 rounded-lg mb-3 hover:bg-gray-100">
            <FaGoogle className="text-red-500 mr-2" /> Continue with Google
          </button>
          <button className="w-full flex items-center justify-center border py-3 rounded-lg hover:bg-gray-100">
            <FaTwitter className="text-blue-500 mr-2" /> Continue with Twitter
          </button>

          <p className="text-gray-600 text-sm mt-4">
            Are you new here? <a href="/signup" className="text-blue-500 hover:underline">Create Account</a>
          </p>
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
  )
}

export default SignIn
