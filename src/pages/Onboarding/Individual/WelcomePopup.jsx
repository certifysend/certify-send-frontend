"use client"

import { useEffect, useState } from "react"
import { Loader2 } from "lucide-react"
import { Link } from "react-router-dom"


const WelcomePopup = ({ name = "User"}) => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-lg shadow-lg p-6 text-center w-[350px] animate-fadeIn">
        {loading ? (
          <div className="flex flex-col items-center">
            <Loader2 className="animate-spin text-[#5570F1] mb-4" size={40} />
            <p className="text-gray-500">Finalizing your setup...</p>
          </div>
        ) : (
          <>
          
            <h2 className="text-lg font-semibold text-[#5570F1]">Welcome aboard, {name}!</h2>
            <p className="text-gray-600 text-sm mt-2">
              You've successfully completed your registration. We're thrilled to have you on this journey with <strong>Certifysend!</strong>
            </p>

            <button
              className="bg-[#5570F1] text-white mt-4 px-6 py-2 rounded-lg w-full flex items-center justify-center gap-2 hover:bg-[#5570F1] transition"
            >
              <Link to="/dashboard">Go to Dashboard 🚀</Link>
            </button>
          </>
        )}
      </div>
      
    </div>
  )
}

export default WelcomePopup
