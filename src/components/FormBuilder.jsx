"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, ChevronRight, X } from "lucide-react";

const FormBuilder = ({ onClose }) => {
  const [selectedOption, setSelectedOption] = useState("thank-you-page");
  const [externalLink, setExternalLink] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [formTitle, setFormTitle] = useState("Certifysend MVP Data Collection");
  const [expanded, setExpanded] = useState({
    form: true,
    text: true,
    design: false,
    survey: false,
    page: false,
  });
  const [activeTab, setActiveTab] = useState("questions");

  const toggleSection = (section) => {
    setExpanded({
      ...expanded,
      [section]: !expanded[section],
    });
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleSaveEdit = () => {
    if (selectedOption === "external-link" && externalLink) {
      setShowPopup(true);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen max-w-7xl mx-auto mt-10">
      <div className="bg-[#E5E7EB] py-3 px-4 flex justify-between items-center">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <span className="text-center font-medium text-sm">Contact Information</span>
          <div className="flex text-xs bg-white rounded-md shadow-sm">
            <span
              className={`px-3 py-2 rounded-l-md font-medium flex items-center gap-1 cursor-pointer ${
                activeTab === "questions" ? "bg-[#F3F3F3] border border-[#E8E8E8]" : "bg-[#FFFFFF] text-gray-400 border-1 border-r border-[#E4E7EC]"
              }`}
              onClick={() => handleTabClick("questions")}
            >
              Questions <span className="bg-black text-white rounded-full h-4 w-4 inline-flex items-center justify-center text-xs">1</span>
            </span>
            <span
              className={`px-3 py-2 flex items-center gap-0.5 cursor-pointer ${
                activeTab === "preview" ? "bg-[#F3F3F3] border border-[#E8E8E8]" : "bg-[#FFFFFF] text-gray-400 border-1 border-r border-[#E4E7EC]"
              }`}
              onClick={() => handleTabClick("preview")}
            >
              Preview <img src="/img/eye.png" alt="Preview" className="w-4 h-4" />
            </span>
            <span
              className={`px-3 py-2 flex items-center gap-0.5 cursor-pointer rounded-r-md ${
                activeTab === "settings" ? "bg-[#F3F3F3] border border-[#E8E8E8]" : "bg-[#FFFFFF] text-gray-400 border-1 border-[#E4E7EC]"
              }`}
              onClick={() => handleTabClick("settings")}
            >
              Settings <img src="/img/setting.png" alt="Settings" className="w-4 h-4" />
            </span>
          </div>
        </div>
        <button className="bg-[#5570F1] text-white px-4 py-2 rounded-md text-sm flex items-center gap-1">
          Publish Form <img src="/img/arrow-forward.png" alt="Publish" />
        </button>
      </div>

      <div className="flex flex-col lg:flex-row bg-[#F9FAFB] mt-5 h-full">
        <div className="w-full lg:w-56 bg-white p-4 relative">
          <div className="mb-4">
            <div
              className="flex justify-between items-center cursor-pointer mb-4"
              onClick={() => toggleSection("form")}
            >
              <h3 className="text-sm font-medium">Form Elements</h3>
              {expanded.form ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </div>

            {expanded.form && (
              <div className="space-y-12 text-sm text-gray-600">
                <div className="flex items-center">
                  <div className="w-5 h-5 mr-3">
                    <span className="text-lg font-semibold">H</span>
                  </div>
                  <span>Heading</span>
                </div>
                <div className="flex items-center">
                  <div className="w-5 h-5 mr-3 flex items-center justify-center">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                  </div>
                  <span>Full Name</span>
                </div>
                <div className="flex items-center">
                  <div className="w-5 h-5 mr-3 flex items-center justify-center">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                      <path d="M22 7l-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                    </svg>
                  </div>
                  <span>Email Address</span>
                </div>
                <div className="flex items-center">
                  <div className="w-5 h-5 mr-3 flex items-center justify-center">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"></path>
                      <circle cx="12" cy="9" r="2"></circle>
                    </svg>
                  </div>
                  <span>Address</span>
                </div>
                <div className="flex items-center">
                  <div className="w-5 h-5 mr-3 flex items-center justify-center">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <span>Phone Number</span>
                </div>
                <div className="flex items-center">
                  <div className="w-5 h-5 mr-3 flex items-center justify-center">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                      <line x1="16" y1="2" x2="16" y2="6"></line>
                      <line x1="8" y1="2" x2="8" y2="6"></line>
                      <line x1="3" y1="10" x2="21" y2="10"></line>
                    </svg>
                  </div>
                  <span>Date Picker</span>
                </div>
              </div>
            )}
          </div>

          <div className="mb-4 py-6">
            <div
              className="flex justify-between items-center cursor-pointer mb-4"
              onClick={() => toggleSection("text")}
            >
              <h3 className="text-sm font-medium">Text Elements</h3>
              {expanded.text ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </div>

            {expanded.text && (
              <div className="space-y-12 text-sm text-gray-600">
                <div className="flex items-center">
                  <div className="w-5 h-5 mr-3 flex items-center justify-center">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                    </svg>
                  </div>
                  <span>Short Text</span>
                </div>
                <div className="flex items-center">
                  <div className="w-5 h-5 mr-3 flex items-center justify-center">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="17" y1="10" x2="3" y2="10"></line>
                      <line x1="21" y1="6" x2="3" y2="6"></line>
                      <line x1="21" y1="14" x2="3" y2="14"></line>
                      <line x1="17" y1="18" x2="3" y2="18"></line>
                    </svg>
                  </div>
                  <span>Long Text</span>
                </div>
                <div className="flex items-center">
                  <div className="w-5 h-5 mr-3 flex items-center justify-center">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V8l-6-6z"></path>
                      <path d="M14 3v5h5M16 13H8M16 17H8M10 9H8"></path>
                    </svg>
                  </div>
                  <span>Paragraph</span>
                </div>
                <div className="flex items-center">
                  <div className="w-5 h-5 mr-3 flex items-center justify-center">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </div>
                  <span>Dropdown</span>
                </div>
                <div className="flex items-center">
                  <div className="w-5 h-5 mr-3 flex items-center justify-center">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="M12 8v8M8 12h8"></path>
                    </svg>
                  </div>
                  <span>Single Choice</span>
                </div>
                <div className="flex items-center">
                  <div className="w-5 h-5 mr-3 flex items-center justify-center">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                      <line x1="9" y1="9" x2="15" y2="15"></line>
                      <line x1="15" y1="9" x2="9" y2="15"></line>
                    </svg>
                  </div>
                  <span>Multiple Choice</span>
                </div>
              </div>
            )}
          </div>

          <div className="mb-4">
            <div
              className="flex justify-between items-center cursor-pointer mb-4"
              onClick={() => toggleSection("design")}
            >
              <h3 className="text-sm font-medium">Design Elements</h3>
              {expanded.design ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </div>
          </div>

          <div className="mb-4">
            <div
              className="flex justify-between items-center cursor-pointer mb-4"
              onClick={() => toggleSection("survey")}
            >
              <h3 className="text-sm font-medium">Survey Elements</h3>
              {expanded.survey ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </div>
          </div>

          <div className="mb-4">
            <div
              className="flex justify-between items-center cursor-pointer mb-4"
              onClick={() => toggleSection("page")}
            >
              <h3 className="text-sm font-medium">Page Elements</h3>
              {expanded.page ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </div>
          </div>

          <div className="bg-[#FFF6EE] border rounded-md p-3 text-xs absolute bottom-4 left-4 right-4">
            <div className="flex items-center">
              <div className="h-5 w-5 bg-yellow-400 rounded-full flex items-center justify-center text-white font-bold text-xs">!</div>
              <span className="font-medium">To remove ® Certifysend branding, please upgrade your account.</span>
            </div>
            <button className="mt-2 text-[#F1A055] font-medium flex items-center rounded px-2 py-1">
              Upgrade your account <ChevronRight size={14} className="ml-1 rotate-270" />
            </button>
          </div>
        </div>

        <div className="flex-1 p-4">
          {activeTab === "questions" && (
            <div>
              <div className="relative mb-4">
                <img
                  src="/img/image.png"
                  alt="Form Header"
                  className="w-full h-auto object-cover rounded-lg"
                />
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6 mb-4 shadow-sm">
                <div className="border p-4 rounded-md border-[#5570F1]">
                  <div className="mb-8">
                    <h2 className="font-medium mb-2">Heading</h2>
                    <input
                      type="text"
                      value={formTitle}
                      onChange={(e) => setFormTitle(e.target.value)}
                      className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#5570F1] text-sm"
                    />
                    <div className="text-xs text-gray-400 mt-1">Type heading</div>
                  </div>
                  <div className="flex items-center justify-end space-x-3">
                    <button className="bg-[#5570F1] rounded-full">
                      <img src="/img/btn-down.png" alt="Move Down" className="w-8 h-8 p-2" />
                    </button>
                    <button className="bg-[#D42620] rounded-full">
                      <img src="/img/del.png" alt="Delete" className="w-8 h-8 p-2" />
                    </button>
                  </div>
                </div>

                <div className="mb-8 mt-4">
                  <h2 className="font-medium mb-2">Short Text</h2>
                  <input
                    type="text"
                    placeholder=""
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#5570F1] text-sm"
                  />
                  <div className="text-xs text-gray-400 mt-1">Type a short text</div>
                </div>

                <div className="mb-8">
                  <h2 className="font-medium mb-2">Full Name</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <input
                        type="text"
                        placeholder=""
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#5570F1] text-sm"
                      />
                      <div className="text-xs text-gray-400 mt-1">First Name</div>
                    </div>
                    <div>
                      <input
                        type="text"
                        placeholder=""
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#5570F1] text-sm"
                      />
                      <div className="text-xs text-gray-400 mt-1">Last Name</div>
                    </div>
                  </div>
                </div>

                <div className="mb-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <h2 className="font-medium mb-2">Email Address</h2>
                      <input
                        type="email"
                        placeholder=""
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#5570F1] text-sm"
                      />
                      <div className="text-xs text-gray-400 mt-1">Ex: certifysend@gmail.com</div>
                    </div>
                    <div>
                      <h2 className="font-medium mb-2">Phone Number</h2>
                      <input
                        type="tel"
                        placeholder=""
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#5570F1] text-sm"
                      />
                      <div className="text-xs text-gray-400 mt-1">Ex: +234 706 580 8095</div>
                    </div>
                  </div>
                </div>

                <div className="mb-8">
                  <h2 className="font-medium mb-2">Short Text</h2>
                  <input
                    type="text"
                    placeholder=""
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#5570F1] text-sm"
                  />
                  <div className="text-xs text-gray-400 mt-1">Type a short text</div>
                </div>

                <div className="mb-6">
                  <h2 className="font-medium mb-2">Long Text</h2>
                  <textarea
                    placeholder="Ex: Creative Brand/Product Designer | Transforming Vision into Reality | Empowering Startups and VC Funds with Scalable Design Solutions | Leveraging Innovation to Shape Memorable Experiences"
                    rows="4"
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#5570F1] text-sm resize-none"
                  ></textarea>
                </div>
              </div>
            </div>
          )}

          {activeTab === "preview" && (
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm mb-5 max-w-4xl mx-auto">
              <img src="/img/image2.png" alt="" className="w-full" />
              <div className="p-6">
                <h1 className="text-xl font-bold mb-4">Certifysend MVP Data Collection</h1>
                <p className="text-sm text-gray-600 mb-6">Fill out the form carefully for registration</p>

                <div className="mb-6">
                  <label className="block text-sm font-medium mb-2">Full Name</label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <input
                        type="text"
                        placeholder=""
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#5570F1] text-sm"
                      />
                      <div className="text-xs text-gray-400 mt-1">First Name</div>
                    </div>
                    <div>
                      <input
                        type="text"
                        placeholder=""
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#5570F1] text-sm"
                      />
                      <div className="text-xs text-gray-400 mt-1">Last Name</div>
                    </div>
                  </div>
                </div>

                <div className="mb-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="">
                    <label className="block text-sm font-medium mb-2">Email Address</label>
                    <input
                      type="email"
                      placeholder=""
                      className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#5570F1] text-sm"
                    />
                    <div className="text-xs text-gray-400 mt-1">Ex: certifysend@gmail.com</div>
                  </div>

                  <div className="">
                    <label className="block text-sm font-medium mb-2">Phone Number</label>
                    <input
                      type="tel"
                      placeholder=""
                      className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#5570F1] text-sm"
                    />
                    <div className="text-xs text-gray-400 mt-1">Ex: +324 706 580 8995</div>
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium mb-2">Short Text</label>
                  <input
                    type="text"
                    placeholder="Type a short text"
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#5570F1] text-sm"
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium mb-2">Long Text</label>
                  <textarea
                    placeholder="Ex: Creative Brand/Product Designer | Transforming Vision into Reality | Empowering Startups and VC Funds with Scalable Design Solutions | Leveraging Innovation to Shape Memorable Experiences"
                    rows="4"
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#5570F1] text-sm resize-none"
                  ></textarea>
                  <div className="text-xs text-gray-400 mt-1">Type Sublabel</div>
                </div>
              </div>

              <div className="flex justify-end p-6">
                <button className="bg-[#5570F1] text-white px-4 py-2 rounded-md text-sm mb-10 flex items-center gap-1">
                  Submit <img src="/img/arrow-forward.png" alt="" className="" />
                </button>
              </div>
            </div>
          )}

          {activeTab === "settings" && (
            <div className="bg-white rounded-lg p-6 shadow-sm max-w-4xl mx-auto">
              <h2 className="text-lg font-medium mb-1">Form Settings</h2>
              <p className="text-sm text-gray-500 mb-6">Customize form status and properties</p>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                <p className="text-xs text-gray-500 mb-2">Enter a name for your form</p>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-[#5570F1]"
                />
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-1">Form Status</label>
                <p className="text-xs text-gray-500 mb-2">Enable, disable, or conditionally enable your form</p>
                <div className="border border-gray-200 rounded-md p-3 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="rounded-full bg-[#5570F1] p-2">
                      <img src="/img/button-icon-white.png" alt="" className="w-8 h-8" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Enabled</p>
                      <p className="text-xs text-gray-500">Your form is currently visible and able to receive submissions</p>
                    </div>
                  </div>
                  <div className="bg-[#E5E7EB] rounded-full text-[#A6A8B1]">
                    <ChevronRight />
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-1">Thank You Page</label>
                <p className="text-xs text-gray-500 mb-2">Choose an Action After Submission</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div
                    className={`border ${
                      selectedOption === "thank-you-page" ? "border-[#5570F1]" : "border-gray-200"
                    } rounded-md p-4 cursor-pointer`}
                    onClick={() => setSelectedOption("thank-you-page")}
                  >
                    <div className="flex items-start mb-1">
                      <div className="mr-2 mt-0.5">
                        <div
                          className={`w-4 h-4 rounded-full border ${
                            selectedOption === "thank-you-page" ? "border-[#5570F1] bg-[#5570F1]" : "border-gray-300"
                          } flex items-center justify-center`}
                        >
                          {selectedOption === "thank-you-page" && (
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                          )}
                        </div>
                      </div>
                      <div>
                        <p className="text-sm font-medium">Show a Thank You Page after submission</p>
                        <p className="text-xs text-gray-500 mt-1">
                          Display a thank-you message with next steps after form submission.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div
                    className={`border ${
                      selectedOption === "external-link" ? "border-[#5570F1]" : "border-gray-200"
                    } rounded-md p-4 cursor-pointer`}
                    onClick={() => setSelectedOption("external-link")}
                  >
                    <div className="flex items-start">
                      <div className="mr-2 mt-0.5">
                        <div
                          className={`w-4 h-4 rounded-full border ${
                            selectedOption === "external-link" ? "border-[#5570F1] bg-[#5570F1]" : "border-gray-300"
                          } flex items-center justify-center`}
                        >
                          {selectedOption === "external-link" && (
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                          )}
                        </div>
                      </div>
                      <div>
                        <p className="text-sm font-medium">Redirect to an external link after submission</p>
                        <p className="text-xs text-gray-500 mt-1">
                          Automatically redirect users to an external page after form submission.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {selectedOption === "thank-you-page" && (
                  <div className="mt-4 bg-white border border-gray-100 rounded-md p-8 flex flex-col items-center justify-center text-center">
                    <img src="/img/thank-you.png" alt="" className="w-full" />
                  </div>
                )}

                {selectedOption === "external-link" && (
                  <div className="mt-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Enter URL</label>
                    <input
                      type="text"
                      value={externalLink}
                      onChange={(e) => setExternalLink(e.target.value)}
                      className="w-full p-2 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-[#5570F1]"
                      placeholder="https://example.com/thank-you"
                    />
                    <p className="text-xs text-gray-500 mt-2">
                      Redirect using HTTP POST to send submission data to the target page, ensuring the page supports HTTP POST requests.
                    </p>
                  </div>
                )}
              </div>

              <div className="flex justify-end mt-8">
                <button
                  className="bg-[#5570F1] text-white px-4 py-2 rounded-md flex items-center gap-2"
                  onClick={handleSaveEdit}
                >
                  Save Edit
                  <img src="/img/arrow-forward.png" alt="" className="" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {showPopup && (
        <div className="fixed inset-0 w-screen h-screen bg-black/20 flex items-center justify-center z-50">
          <div className="bg-white shadow-lg rounded-lg max-w-6xl mx-auto p-10 space-y-8">
            <div className="bg-white p-4 shadow-lg">
              <div className="flex justify-between items-center">
                <div className="">
                  <h3 className="text-lg font-medium">Share with link</h3>
                </div>
                <button
                  onClick={() => setShowPopup(false)}
                  className="hover:text-gray-700 border border-gray-100"
                >
                  <X size={25} />
                </button>
              </div>

              <p className="text-sm text-gray-600 mb-4">
                Your form is securely published and ready to use at this address:
              </p>
              <div className="rounded-md">
                <div className="flex items-center justify-between bg-gray-50 p-2 rounded-md border border-gray-200 mb-4">
                  <div className="flex gap-1">
                    <img src="/img/Icon-left.png" alt="" className="w-5 h-5" />
                    <span className="text-sm text-gray-700 truncate">{externalLink}</span>
                  </div>
                  <div className="">
                    <img src="/img/Right Content.png" alt="" className="w-5 h-5 justify-end flex" />
                  </div>
                </div>
                <div className="flex justify-end">
                  <button
                    className="text-white p-2 rounded-md bg-[#5570F1] text-sm font-medium focus:outline-none"
                    onClick={() => navigator.clipboard.writeText(externalLink)}
                  >
                    Copy Link
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 shadow-lg space-y-6">
              <div className="">
                <h2 className="text-lg font-semibold mb-2">Share Form</h2>
                <span className="text-sm text-gray-600 mb-4">
                  Share your form link in various social posts and through email.
                </span>
              </div>

              <div className="flex space-x-4 items-center">
                <button className="flex flex-col items-center text-sm text-gray-600 hover:text-gray-800 focus:outline-none">
                  <img src="/img/Vector1.png" alt="chat" className="w-5 h-5 mb-1" />
                  <span>Chat</span>
                </button>
                <button className="flex flex-col items-center text-sm text-gray-600 hover:text-gray-800 focus:outline-none">
                  <img src="/img/Vector3.png" alt="WhatsApp" className="w-5 h-5 mb-1" />
                  <span>WhatsApp</span>
                </button>
                <button className="flex flex-col items-center text-sm text-gray-600 hover:text-gray-800 focus:outline-none">
                  <img src="/img/Vector4.png" alt="telegram" className="w-5 h-5 mb-1" />
                  <span>Telegram</span>
                </button>
                <button className="flex flex-col items-center text-sm text-gray-600 hover:text-gray-800 focus:outline-none">
                  <img src="/img/Group.png" alt="x" className="w-5 h-5 mb-1" />
                  <span>X</span>
                </button>
                <button className="flex flex-col items-center text-sm text-gray-600 hover:text-gray-800 focus:outline-none">
                  <img src="/img/email.png" alt="email" className="w-5 h-5 mb-1" />
                  <span>Email</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FormBuilder;