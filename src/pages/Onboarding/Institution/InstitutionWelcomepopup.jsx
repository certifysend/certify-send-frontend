"use client"

import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const InstitutionPopup = ({ institutionName = "Certifysend", onContinue }) => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white rounded-xl shadow-lg p-6 w-96 text-center">
        {loading ? (
          <div className="flex justify-center mb-4">
            <div className="animate-spin w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full" />
          </div>
        ) : (
          <h2 className="text-lg font-semibold text-blue-600">Welcome aboard, {institutionName}!</h2>
        )}

        <p className="text-gray-600 mt-2">
          You've successfully registered your institution. We're excited to have you on this journey!
        </p>

        <div className="mt-6 flex justify-center">
          <button
            onClick={onContinue}
            className="px-6 py-3 bg-[#5570F1] text-white font-medium rounded-lg hover:bg-[#5570F1] transition flex items-center justify-center space-x-2"
          >
            <Link to="/dashboard" className="text-white">Go to Dashboard 🚀</Link>
              <span>🚀</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default InstitutionPopup
