"use client"

import { useState } from "react"
import { Search, Star, Upload, Grid, List, Clock, ArrowLeft, ChevronDown } from "lucide-react"
import EmailCompositionPane from "./EmailCompositionPane"
import RecipientList from "./RecipientList"
import FormBuilder from "./FormBuilder"

const BulkEmail = () => {
  const [activeTab, setActiveTab] = useState("All Recipients")
  const [showEmailPane, setShowEmailPane] = useState(false)
  const [showEmptyState, setShowEmptyState] = useState(true)
  const [selectedRecipients, setSelectedRecipients] = useState([])
  const [selectedCertificateId, setSelectedCertificateId] = useState(null)
  const [selectedFormId, setSelectedFormId] = useState(null)
  const [selectedCertificateName, setSelectedCertificateName] = useState("")
  const [selectedFormName, setSelectedFormName] = useState("")
  const [previousTab, setPreviousTab] = useState("By Certificates")
  const [viewMode, setViewMode] = useState("grid")
  const [sortBy, setSortBy] = useState("date")
  const [showUploadPopup, setShowUploadPopup] = useState(false)
  const [showFormBuilder, setShowFormBuilder] = useState(false)

  const tabs = ["All Recipients", "By Certificates", "By Forms", "By Upload"]

  const recipients = Array(8)
    .fill()
    .map((_, index) => ({
      id: index + 1,
      firstName: "Sodiq",
      lastName: "Tajudeen",
      email: "tajusodiq1901@gmail.com",
      certificateName: "User Experience Database",
      sentDate: "Saturday, 18 Jan. 2023",
      certificateId: (index % 3) + 1,
      formId: (index % 3) + 1,
    }))

  const certificates = [
    {
      id: 1,
      name: "Certificate of Achievement",
      editedTime: "24 minutes ago",
      starred: false,
      image: "/placeholder.svg?height=150&width=250",
    },
    {
      id: 2,
      name: "Certificate of Achievement",
      editedTime: "24 minutes ago",
      starred: false,
      image: "/placeholder.svg?height=150&width=250",
    },
    {
      id: 3,
      name: "Certificate of Achievement",
      editedTime: "24 minutes ago",
      starred: true,
      image: "/placeholder.svg?height=150&width=250",
    },
  ]

  const forms = [
    {
      id: 1,
      name: "Productivity Hacks",
      editedTime: "1 hour ago",
      starred: true,
      image: "/placeholder.svg?height=150&width=250",
    },
    {
      id: 2,
      name: "Party Invite",
      editedTime: "1 hour ago",
      starred: false,
      image: "/placeholder.svg?height=150&width=250",
    },
    {
      id: 3,
      name: "Productivity Hacks",
      editedTime: "1 hour ago",
      starred: true,
      image: "/placeholder.svg?height=150&width=250",
    },
  ]

  const uploads = [
    { id: 1, name: "Students' details", editedTime: "1 hour ago", type: "word", icon: "W" },
    { id: 2, name: "January Mail", editedTime: "1 hour ago", type: "excel", icon: "X" },
    { id: 3, name: "Email Campaigns", editedTime: "1 hour ago", type: "excel", icon: "X" },
  ]

  const handleRecipientSelection = (id) => {
    setSelectedRecipients((prev) =>
      prev.includes(id) ? prev.filter((recipientId) => recipientId !== id) : [...prev, id],
    )
  }

  const handleSelectAll = (e) => {
    setSelectedRecipients(e.target.checked ? recipients.map((r) => r.id) : [])
  }

  const handleCertificateClick = (certificateId) => {
    const certificate = certificates.find((c) => c.id === certificateId)
    setPreviousTab("By Certificates")
    setSelectedCertificateId(certificateId)
    setSelectedCertificateName(certificate.name)
    const recipientsForCertificate = recipients.filter((r) => r.certificateId === certificateId).map((r) => r.id)
    setSelectedRecipients(recipientsForCertificate)
    setShowEmptyState(false)
    setActiveTab("All Recipients")
  }

  const handleFormClick = (formId) => {
    const form = forms.find((f) => f.id === formId)
    setPreviousTab("By Forms")
    setSelectedFormId(formId)
    setSelectedFormName(form.name)
    const recipientsForForm = recipients.filter((r) => r.formId === formId).map((r) => r.id)
    setSelectedRecipients(recipientsForForm)
    setShowEmptyState(false)
    setActiveTab("All Recipients")
  }

  const handleBackClick = () => {
    setActiveTab(previousTab)
    setSelectedCertificateId(null)
    setSelectedFormId(null)
    setSelectedCertificateName("")
    setSelectedFormName("")
    setSelectedRecipients([])
  }

  const handleToggleStar = (id, type) => {
    console.log(`Toggle star for ${type} with id ${id}`)
  }

  const handleUpload = () => {
    console.log("Uploading CSV file...")
    setShowUploadPopup(false)
    setActiveTab("By Upload")
  }

  const handleTabChange = (tab) => {
    if ((selectedCertificateId !== null || selectedFormId !== null) && tab !== activeTab) {
      setSelectedCertificateId(null)
      setSelectedFormId(null)
      setSelectedCertificateName("")
      setSelectedFormName("")
      setSelectedRecipients([])
    }
    setActiveTab(tab)
  }

  const renderEmptyState = () => (
    <div className="flex flex-col items-center justify-center mt-8 sm:mt-20 bg-[#F9FAFB] max-w-lg mx-auto p-4 sm:p-10 rounded-lg">
      <img src="/img/elements.png" alt="element" className="mb-4 sm:mb-6 w-16 sm:w-auto" />
      <h2 className="text-center mb-2 font-medium text-sm sm:text-base">No Recipients Added Yet?</h2>
      <p className="text-center mb-4 sm:mb-6 text-gray-500 text-xs sm:text-sm">
        Upload a list, select from existing recipients, or collect via registration forms to get started!
      </p>
      <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 w-full sm:w-auto">
        <button
          onClick={() => setShowEmptyState(false)}
          className="bg-[#5570F1] text-white px-3 sm:px-4 py-2 rounded-lg hover:bg-[#4058c7] transition flex items-center justify-center gap-1 sm:gap-2 text-xs sm:text-sm w-full sm:w-auto"
        >
          <img src="/img/button-icon-gen.png" alt="" className="w-3 h-3 sm:w-4 sm:h-4" />
          Generate Certificate
        </button>
        <button
          onClick={() => setShowFormBuilder(true)}
          className="bg-white text-[#5570F1] px-3 sm:px-4 py-2 rounded-lg border border-[#5570F1] hover:bg-[#5570F1]/10 transition flex items-center justify-center gap-1 sm:gap-2 text-xs sm:text-sm w-full sm:w-auto"
        >
          <img src="/img/file-colored.png" alt="" className="w-3 h-3 sm:w-4 sm:h-4" />
          Create New Form
        </button>
      </div>
    </div>
  )

  const renderRecipientsList = () => (
    <RecipientList
      recipients={recipients}
      selectedRecipients={selectedRecipients}
      onSelectRecipient={handleRecipientSelection}
      onSelectAll={handleSelectAll}
    />
  )

  const renderCertificatesGrid = () => (
    <div>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-3 sm:gap-4">
        <div className="w-full sm:w-64 relative">
          <input
            type="text"
            placeholder="Search here..."
            className="w-full pl-8 sm:pl-10 pr-2 sm:pr-4 py-1.5 sm:py-2 border border-gray-200 rounded-lg text-xs sm:text-sm"
          />
          <Search className="absolute left-2 sm:left-3 top-1/2 transform -translate-y-1/2 w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-400" />
        </div>
        <div className="flex items-center gap-2 sm:gap-4 w-full sm:w-auto justify-between sm:justify-end">
          <div className="flex items-center">
            <button
              onClick={() => setSortBy("date")}
              className={`px-2 sm:px-3 py-1 sm:py-1.5 text-[10px] sm:text-xs ${sortBy === "date" ? "text-gray-900" : "text-gray-500"}`}
            >
              Date
              <ChevronDown className="inline ml-0.5 sm:ml-1 w-2.5 h-2.5 sm:w-3 sm:h-3" />
            </button>
            <button
              onClick={() => setSortBy("viewed")}
              className={`px-2 sm:px-3 py-1 sm:py-1.5 text-[10px] sm:text-xs ${sortBy === "viewed" ? "text-gray-900" : "text-gray-500"}`}
            >
              Last viewed
              <ChevronDown className="inline ml-0.5 sm:ml-1 w-2.5 h-2.5 sm:w-3 sm:h-3" />
            </button>
          </div>
          <div className="flex border border-gray-200 rounded-lg overflow-hidden">
            <button
              onClick={() => setViewMode("grid")}
              className={`p-1 sm:p-1.5 ${viewMode === "grid" ? "bg-gray-100" : "bg-white"}`}
            >
              <Grid className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-500" />
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`p-1 sm:p-1.5 ${viewMode === "list" ? "bg-gray-100" : "bg-white"}`}
            >
              <List className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-500" />
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
        {activeTab === "By Certificates" &&
          certificates.map((certificate) => (
            <div
              key={certificate.id}
              className="border border-gray-200 rounded-lg overflow-hidden cursor-pointer hover:shadow-md transition"
              onClick={() => handleCertificateClick(certificate.id)}
            >
              <div className="relative h-32 sm:h-40 bg-gray-100">
                <img
                  src={certificate.image || "/placeholder.svg"}
                  alt={certificate.name}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    handleToggleStar(certificate.id, "certificate")
                  }}
                  className="absolute top-2 right-2 p-1"
                >
                  <Star
                    className={`w-4 h-4 sm:w-5 sm:h-5 ${certificate.starred ? "text-yellow-400 fill-yellow-400" : "text-gray-400"}`}
                  />
                </button>
              </div>
              <div className="p-2 sm:p-3">
                <h3 className="text-xs sm:text-sm font-medium text-gray-900 truncate">{certificate.name}</h3>
                <p className="text-[10px] sm:text-xs text-gray-500 mt-0.5 sm:mt-1 flex items-center">
                  <Clock className="w-2.5 h-2.5 sm:w-3 sm:h-3 mr-0.5 sm:mr-1" /> Edited {certificate.editedTime}
                </p>
              </div>
            </div>
          ))}

        {activeTab === "By Forms" &&
          forms.map((form) => (
            <div
              key={form.id}
              className="border border-gray-200 rounded-lg overflow-hidden cursor-pointer hover:shadow-md transition"
              onClick={() => handleFormClick(form.id)}
            >
              <div className="relative h-32 sm:h-40 bg-gray-100">
                <img src={form.image || "/placeholder.svg"} alt={form.name} className="w-full h-full object-cover" />
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    handleToggleStar(form.id, "form")
                  }}
                  className="absolute top-2 right-2 p-1"
                >
                  <Star
                    className={`w-4 h-4 sm:w-5 sm:h-5 ${form.starred ? "text-yellow-400 fill-yellow-400" : "text-gray-400"}`}
                  />
                </button>
              </div>
              <div className="p-2 sm:p-3">
                <h3 className="text-xs sm:text-sm font-medium text-gray-900 truncate">{form.name}</h3>
                <p className="text-[10px] sm:text-xs text-gray-500 mt-0.5 sm:mt-1 flex items-center">
                  <Clock className="w-2.5 h-2.5 sm:w-3 sm:h-3 mr-0.5 sm:mr-1" /> Edited {form.editedTime}
                </p>
              </div>
            </div>
          ))}

        {activeTab === "By Upload" &&
          uploads.map((upload) => (
            <div key={upload.id} className="border border-gray-200 rounded-lg overflow-hidden">
              <div className="relative h-32 sm:h-40 bg-gray-100 flex items-center justify-center">
                <img
                  src={`/img/${upload.type}.png`}
                  alt={upload.type}
                  className="w-16 h-16 sm:w-24 sm:h-24 object-cover rounded-lg"
                />
              </div>
              <div className="p-2 sm:p-3">
                <h3 className="text-xs sm:text-sm font-medium text-gray-900 truncate">{upload.name}</h3>
                <p className="text-[10px] sm:text-xs text-gray-500 mt-0.5 sm:mt-1 flex items-center">
                  <Clock className="w-2.5 h-2.5 sm:w-3 sm:h-3 mr-0.5 sm:mr-1" /> Edited {upload.editedTime}
                </p>
              </div>
            </div>
          ))}
      </div>
    </div>
  )

  const renderContent = () => {
    if (showEmptyState) {
      if (activeTab === "All Recipients") {
        return renderEmptyState()
      } else {
        return renderCertificatesGrid()
      }
    }
    if (activeTab === "All Recipients") {
      return renderRecipientsList()
    }
    return renderCertificatesGrid()
  }

  const showBackButton = selectedCertificateId !== null || selectedFormId !== null

  const getPageTitle = () => {
    if (selectedCertificateId !== null) {
      return selectedCertificateName
    }
    if (selectedFormId !== null) {
      return selectedFormName
    }
    return "Recipients List"
  }

  if (showFormBuilder) {
    return <FormBuilder onClose={() => setShowFormBuilder(false)} />
  }

  return (
    <div className="container mx-auto bg-white p-3 md:p-6 max-w-7xl overflow-hidden py-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center -mx-2 mb-4 sm:mb-6 gap-3 sm:gap-0">
        <div className="flex items-center gap-1 sm:gap-2">
          {showBackButton && (
            <button onClick={handleBackClick} className="p-1 rounded-full hover:bg-gray-100">
              <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500" />
            </button>
          )}
          <h1 className="text-base sm:text-lg font-medium text-gray-900 truncate">{getPageTitle()}</h1>
        </div>
        <div className="flex gap-2 sm:gap-3 w-full sm:w-auto justify-end">
          {!showBackButton && (
            <button
              onClick={() => setShowUploadPopup(true)}
              className="flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-1.5 sm:py-2 border border-[#5570F1] text-[#5570F1] rounded-lg text-xs sm:text-sm"
            >
              <Upload className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="whitespace-nowrap">Upload New Email</span>
            </button>
          )}
          {activeTab === "All Recipients" && !showEmptyState && (
            <button
              onClick={() => setShowEmailPane(true)}
              className="flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm bg-[#5570F1] text-white whitespace-nowrap"
            >
              Send Bulk Email
              <span className="text-[10px] sm:text-xs">→</span>
            </button>
          )}
        </div>
      </div>

      <div className="border-b border-gray-200 mb-4 sm:mb-6 -mx-8 sm:-mx-4 md:-mx-6 px-3.5 sm:px-4 md:px-6 overflow-x-auto">
        <nav className="flex gap-4 sm:gap-8 min-w-max">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => handleTabChange(tab)}
              className={`px-1 py-2 sm:py-3 text-xs sm:text-sm font-medium whitespace-nowrap ${
                activeTab === tab ? "text-[#5570F1] border-b-2 border-[#5570F1]" : "text-gray-500"
              }`}
            >
              {tab}
            </button>
          ))}
        </nav>
      </div>

      {renderContent()}

      {showEmailPane && (
        <EmailCompositionPane
          recipients={recipients.filter((recipient) => selectedRecipients.includes(recipient.id))}
          onClose={() => setShowEmailPane(false)}
        />
      )}

      {showUploadPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-4 sm:p-6 w-full max-w-xs sm:max-w-sm md:max-w-md">
            <h2 className="text-base sm:text-lg font-medium text-gray-900 mb-2 sm:mb-4">Upload New Email</h2>
            <p className="text-xs sm:text-sm text-gray-500 mb-4 sm:mb-6">
              Upload and manage recipient email lists seamlessly.
            </p>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 sm:p-6 text-center">
              <p className="text-xs sm:text-sm text-gray-500 mb-3 sm:mb-4">Click to upload or drag and drop</p>
              <button
                onClick={handleUpload}
                className="bg-[#5570F1] text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm"
              >
                Upload via CSV
              </button>
              <p className="text-[10px] sm:text-xs text-gray-500 mt-2">Upload a CSV file containing user data.</p>
            </div>
            <div className="mt-4 sm:mt-6 flex justify-end">
              <button
                onClick={() => setShowUploadPopup(false)}
                className="text-xs sm:text-sm text-gray-500 hover:text-gray-700"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default BulkEmail

