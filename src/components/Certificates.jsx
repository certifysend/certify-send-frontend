import React, { useState } from "react";
import { X, Minus, Maximize2 } from "lucide-react";
import EmailSchedule from './EmailSchedule';

const EmailCompositionPane = ({ onBack, onClose }) => {

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Email sending functionality would be implemented here');
    onClose();
  };

  const [showSchedulePopup, setShowSchedulePopup] = useState(false);

  return (
    <div className="fixed inset-0 w-screen h-screen bg-black/20 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg">
      <div className="bg-[#5570F1] text-white p-3 rounded-t-lg flex items-center justify-between">
        <h3 className="font-normal">Message Content / Send / Schedule</h3>
        <div className="flex items-center space-x-2">
          <button className="hover:bg-[#5570F1] p-1 rounded">
            <Minus className="w-4 h-4" />
          </button>
          <button className="hover:bg-[#5570F1] p-1 rounded">
            <Maximize2 className="w-4 h-4" />
          </button>
          <button onClick={onBack} className="hover:bg-[#5570F1] p-1 rounded">
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="p-4">
       
        <div className="flex justify-between items-center mb-4 text-sm">
          <div className="flex items-center gap-2">
          <h2 className="text-gray-500 text-sm mb-1">Recipients</h2>
          
          <p>{'- to - 150 Attendees'}</p>
          </div>
          <div className="text-gray-500">Cc Bcc</div>
        </div>

        <div className="mb-4 flex items-center gap-2">
          <h2 className="text-gray-500 text-sm mb-1">Subject</h2>
          <p>Congratulations, {`${'{First Name}'}`}! Your Certificate of Completion is Ready</p>
        </div>

        <div className="space-y-4 text-gray-800">
          <p>Hi {`(Name)`},</p>

          <p>Congratulations on successfully completing the {`{Course Title}!`}!</p>

          <p>We are thrilled to recognize your hard work and dedication. As a token of your achievement, we've prepared a certificate just for you.</p>

          <p>Here are the details of your accomplishment:</p>

          <p>
            Course Title: {'{Course Title}'} <br />
            Completion Date: {'{Completion Date}'} <br />
            Instructor: {'{Instructor Name}'} <br />
            Click the button below to download your certificate:
          </p>

          <p>[Download Certificate]</p>

          <p>Thank you for your commitment to learning and growth. We hope this achievement motivates you to continue reaching new heights!</p>

          <p>If you have any questions or face any issues, feel free to contact us at {`{Support Email}.`}</p>

          <p>
            Best regards, <br />
            {`(Organization Name)`} Team
          </p>
        </div>
      </div>

      <div className="p-2 border-t items-center space-y-2">
        <div className="flex">
        <button  onClick={() => setShowSchedulePopup(true)} className="px-2 rounded-md py-1 border border-[#5570F1] text-[#5570F1] font-light flex items-center"><img src="/img/button-icon-schedule.png" alt="" className="h-8 w-8" />Schedule send</button>
        </div>

        <div className="flex">
        <button onClick={handleSubmit} className="flex items-center gap-5 rounded-md py-2 px-4 bg-[#5570F1] text-white">Send <img src="/img/Arrow.png" alt="" className="" /></button>
        <span className="text-gray-300 px-2">|</span>
        <img src="/img/Draft Icons.png" alt="" className="" />
        <div className="flex-grow"></div>
        <button className="text-gray-500 px-2">
          <img src="/img/More.png" alt="" className="" />
        </button>
        <button className="text-gray-500 px-2">
          <img src="/img/Draft Toolbar Icons.png" alt="" className="h-7 w-7" />
        </button>
        </div>
      </div>
    </div>
    {showSchedulePopup && (
  <EmailSchedule
    onClose={() => setShowSchedulePopup(false)}
  />
)}
    </div>
    
  );
};

const UploadMethodModal = ({ onClose }) => {
  const [selectedMethod, setSelectedMethod] = useState("");
  const [showDetailsForm, setShowDetailsForm] = useState(false);
  const [showEmailPane, setShowEmailPane] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    certificateName: "",
  });

  const handleMethodSelect = (method) => {
    setSelectedMethod(method);
    if (method === "singleUpload") {
      setShowDetailsForm(true);
    } else {
      alert(`Selected Method: ${method}`);
      onClose();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowEmailPane(true);
  };

  return (
    <div className="fixed inset-0 w-screen h-screen bg-black/20 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-[480px] relative">
        <button 
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700 border border-gray-100"
        >
          <X size={25} />
        </button>

        {!showDetailsForm ? (
          <div className="p-6">
            <h2 className="text-lg font-medium mb-2">Select User Data Upload Method</h2>
            <p className="text-sm text-gray-600 mb-6">
              Choose how you want to upload user data for certificate automation.
            </p>
            
            <div className="space-y-4">
              <label className="flex items-start p-4 border rounded-lg cursor-pointer hover:border-[#5570F1]">
                <input
                  type="radio"
                  name="uploadMethod"
                  className="mt-1"
                  checked={selectedMethod === 'singleUpload'}
                  onChange={() => handleMethodSelect('singleUpload')}
                />
                <div className="ml-3">
                  <div className="font-medium">Single Upload</div>
                  <div className="text-sm text-gray-500">Upload a single entry manually for quick and precise additions.</div>
                </div>
              </label>

              <label className="flex items-start p-4 border rounded-lg cursor-pointer hover:border-[#5570F1]">
                <input
                  type="radio"
                  name="uploadMethod"
                  className="mt-1"
                  checked={selectedMethod === 'existingList'}
                  onChange={() => handleMethodSelect('existingList')}
                />
                <div className="ml-3">
                  <div className="font-medium">Select from Existing List</div>
                  <div className="text-sm text-gray-500">Choose from previously uploaded or saved entries to reuse data efficiently.</div>
                </div>
              </label>

              <label className="flex items-start p-4 border rounded-lg cursor-pointer hover:border-[#5570F1]">
                <input
                  type="radio"
                  name="uploadMethod"
                  className="mt-1"
                  checked={selectedMethod === 'bulkUpload'}
                  onChange={() => handleMethodSelect('bulkUpload')}
                />
                <div className="ml-3">
                  <div className="font-medium">Bulk Upload</div>
                  <div className="text-sm text-gray-500">Upload multiple entries at once using a CSV or Excel file for faster processing.</div>
                </div>
              </label>
            </div>
          </div>
        ) : (
          <div className="p-6">
            <div className="flex items-center mb-6">
              <button 
                onClick={() => setShowDetailsForm(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <img src="/img/Primary Button.png" alt="" className="h-8 w-8 cursor-pointer" />
              </button>
              <h2 className="text-lg font-medium ml-4">Single Upload</h2>
            </div>
            <p className="text-sm text-gray-600 mb-6">
              Upload a single entry manually for quick and precise additions.
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  First Name
                </label>
                <input
                  type="text"
                  placeholder="Enter First Name"
                  className="w-full p-2 border rounded-lg"
                  value={formData.firstName}
                  onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Last Name
                </label>
                <input
                  type="text"
                  placeholder="Enter Last Name"
                  className="w-full p-2 border rounded-lg"
                  value={formData.lastName}
                  onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Enter Email Address"
                  className="w-full p-2 border rounded-lg"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Certificate Name
                </label>
                <input
                  type="text"
                  placeholder="Enter Certificate Name"
                  className="w-full p-2 border rounded-lg"
                  value={formData.certificateName}
                  onChange={(e) => setFormData({...formData, certificateName: e.target.value})}
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#5570F1] text-white p-2 rounded-lg mt-6 flex text-center justify-center items-center gap-2"
              >
                Next Step
                <img src="/img/arrow-forward.png" alt="" className="" />
              </button>
            </form>
          </div>
        )}
      </div>
      {showEmailPane && (
        <EmailCompositionPane
          onBack={() => setShowEmailPane(false)}
          onClose={onClose}
        />
      )}
    </div>
  );
};

const RecipientListPane = ({ onBack}) => {
  const [showModal, setShowModal] = useState(false);
  const [showEmailPane, setShowEmailPane] = useState(false);

  const handleUploadDetails = () => {
    setShowModal(true);
  };

  const handleNextStep = () => {
    setShowEmailPane(true);
  };

  return (
    <div className="container mx-auto p-4 mt-10">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-lg font-medium">Recipient List</h1>
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-600">Save as draft</span>
          <div className="w-12 h-6 bg-gray-200 rounded-full p-1 cursor-pointer">
            <div className="w-4 h-4 bg-white rounded-full"></div>
          </div>
        </div>
      </div>

      <div className="flex justify-end items-center mb-6">
        <div className="flex items-center gap-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-300 focus:border-blue-300"
            />
            <img
              src="/img/search.png"
              alt="Search"
              className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4"
            />
          </div>
          <button className="text-gray-600 hover:text-gray-900 flex items-center gap-2">
            <img src="/img/filter-alt.png" alt="" className="h-5 w-5" />
            Filter
          </button>
          <button
            className="border border-[#5570F1] text-[#5570F1] px-4 py-2 rounded text-sm flex items-center gap-2"
            onClick={handleUploadDetails}
          >
            <img src="/img/button-icon-upload.png" alt="" className="w-4 h-4" />
            Upload Details
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">S/N</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">First Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Last Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Email Address</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Certificate Name</th>
            </tr>
          </thead>
          <tbody>
            {[...Array(9)].map((_, index) => (
              <tr key={index} className="border-b">
                <td className="px-6 py-4">{index + 1}</td>
                <td className="px-6 py-4"></td>

                <td className="px-6 py-4"></td>
                <td className="px-6 py-4"></td>
                <td className="px-6 py-4"></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex items-center justify-center py-4 border-t">
        <nav className="flex items-center space-x-2">
          <button className="p-2 border rounded hover:bg-gray-100">&lt;</button>
          <button className="p-2 rounded hover:bg-gray-100">1</button>
          <button className="p-2 rounded hover:bg-gray-100">2</button>
          <button className="p-2 rounded hover:bg-gray-100">3</button>
          <button className="p-2 rounded hover:bg-gray-100">4</button>
          <button className="p-2 rounded hover:bg-gray-100">5</button>
          <button className="p-2 border rounded hover:bg-gray-100">&gt;</button>
        </nav>
      </div>

      <div className="flex justify-end gap-2 mt-6">
        <button
          className="bg-gray-100 text-gray-600 px-4 py-2 rounded flex items-center gap-2 hover:bg-gray-200"
          onClick={onBack}
        >
          Back
        </button>
        <button
          className="bg-[#5570F1] text-white px-4 py-2 rounded flex items-center gap-2 hover:bg-[#4056b5]"
          onClick={handleNextStep}
        >
          Next Step
          <img src="/img/arrow-forward.png" alt="" className="w-4 h-4" />
        </button>
      </div>

      {showModal && <UploadMethodModal onClose={() => setShowModal(false)} />}
      {showEmailPane && (
        <EmailCompositionPane
          onBack={() => setShowEmailPane(false)}
          onClose={() => setShowEmailPane(false)}
        />
      )}
    </div>
  );
};

const FullCertificateView = ({ file, onBack, onNext }) => {
  const fileUrl = URL.createObjectURL(file);

  return (
    <div className="container mx-auto p-4 mt-10">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-lg font-medium">Upload Certificate</h1>
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-600">Save as draft</span>
          <div className="w-12 h-6 bg-gray-200 rounded-full p-1 cursor-pointer">
            <div className="w-4 h-4 bg-white rounded-full"></div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 p-8 h-[80vh] relative">
        <div className="h-full flex items-center justify-center">
          <img
            src={fileUrl}
            alt="Uploaded Certificate"
            className="max-w-full max-h-full object-contain rounded-lg"
          />
        </div>

        <div className="absolute bottom-4 right-4 flex gap-2">
          <button
            onClick={onBack}
            className="border border-[#5570F1] text-gray-600 px-4 py-2 rounded flex items-center gap-2 hover:bg-gray-50"
          >
            <img src="/img/upload.png" alt="" className="w-4 h-4" />
            Re-upload
          </button>
          <button
            onClick={onNext}
            className="bg-[#5570F1] text-white px-4 py-2 rounded flex items-center gap-2 hover:bg-[#4056b5]"
          >
            Next step
            <img src="/img/arrow-forward.png" alt="" className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

const UploadCertificatePane = () => {
  const [uploadedFile, setUploadedFile] = useState(null);
  const [currentPane, setCurrentPane] = useState("upload");
  const [showEmailPane, setShowEmailPane] = useState(false);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setUploadedFile(file);
      setCurrentPane("fullView");
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) {
      setUploadedFile(file);
      setCurrentPane("fullView");
    }
  };

  if (currentPane === "fullView") {
    return (
      <>
        <FullCertificateView
          file={uploadedFile}
          onBack={() => {
            setCurrentPane("upload");
            setUploadedFile(null);
          }}
          onNext={() => setCurrentPane("recipientList")}
        />
        {showEmailPane && (
          <EmailCompositionPane
            onBack={() => setShowEmailPane(false)}
            onClose={() => setShowEmailPane(false)}
          />
        )}
      </>
    );
  }

  if (currentPane === "recipientList") {
    return (
      <>
        <RecipientListPane
          onBack={() => setCurrentPane("fullView")}
          onNext={() => setShowEmailPane(true)}
        />
        {showEmailPane && (
          <EmailCompositionPane
            onBack={() => setShowEmailPane(false)}
            onClose={() => {
              setShowEmailPane(false);
              setCurrentPane("upload");
              setUploadedFile(null);
            }}
          />
        )}
      </>
    );
  }

  return (
    <div className="container mx-auto p-4 mt-10">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-lg font-medium">Upload Certificate</h1>
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-600">Save as draft</span>
          <div className="w-12 h-6 bg-gray-200 rounded-full p-1 cursor-pointer">
            <div className="w-4 h-4 bg-white rounded-full"></div>
          </div>
        </div>
      </div>

      <div className="bg-white border-b border-gray-200 p-2 mb-4">
        <div className="flex items-center gap-4">
          <div className="flex gap-2">
            <button className="p-1">
              <img src="/img/photo.png" alt="" className="w-5 h-5" />
            </button>
            <button className="p-1 border-r border-gray-200 pr-2">
              <img src="/img/pages.png" alt="" className="w-5 h-5" />
            </button>
          </div>

          <div className="flex items-center gap-2">
            <select className="border rounded px-2 py-1 text-sm">
              <option>Aptos (body)</option>
            </select>
            <select className="border rounded px-2 py-1 text-sm w-14">
              <option>12</option>
            </select>
          </div>
          <div className="flex items-center gap-1">
            <button className="p-1 hover:bg-gray-100 rounded">
              <img src="/img/align-left.png" alt="" className="w-4 h-4" />
            </button>
            <button className="p-1 hover:bg-gray-100 rounded">
              <img src="/img/bold.png" alt="" className="w-4 h-4" />
            </button>
            <button className="p-1 hover:bg-gray-100 rounded">
              <img src="/img/italic.png" alt="" className="w-4 h-4" />
            </button>
            <button className="p-1 hover:bg-gray-100 rounded">
              <img src="/img/underline.png" alt="" className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 p-8 h-[80vh]">
        <div
          className={`border-2 border-dashed border-gray-300 rounded-lg h-full flex flex-col items-center justify-center bg-[#F9FAFB] ${
            uploadedFile ? "p-0" : "p-8"
          }`}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          {uploadedFile ? (
            <div className="w-full h-full flex items-center justify-center">
              {uploadedFile.type.startsWith("image/") ? (
                <img
                  src={URL.createObjectURL(uploadedFile)}
                  alt="Uploaded file"
                  className="max-w-full max-h-full object-contain"
                />
              ) : (
                <iframe
                  src={URL.createObjectURL(uploadedFile)}
                  className="w-full h-full"
                  title="Uploaded PDF"
                />
              )}
            </div>
          ) : (
            <>
              <img src="/img/file-upload-states.png" alt="" className="w-16 h-16 mb-4" />
              <div className="text-center space-y-3">
                <label className="cursor-pointer">
                  <h2 className="text-[#5570F1]">
                    Click to upload <span className="text-gray-600">or drag and drop</span>
                  </h2>
                  <input
                    type="file"
                    className="hidden"
                    onChange={handleFileUpload}
                    accept=".png,.jpg,.jpeg,.pdf"
                  />
                </label>
                <p className="text-xs text-gray-500 mt-1">
                  PNG, JPG or PDF (max. 800x400px)
                </p>
                <p className="text-gray-600">OR</p>
                <div className="flex justify-center">
                  <label
                    htmlFor="file"
                    className="cursor-pointer bg-[#5570F1] text-white px-4 py-2 rounded-md text-center"
                  >
                    Browse file
                  </label>
                  <input
                    type="file"
                    id="file"
                    className="hidden"
                    onChange={handleFileUpload}
                  />
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      <div className="flex justify-end mt-4">
        <button
          className="bg-[#5570F1] text-white px-6 py-2 rounded flex items-center gap-2 opacity-50 cursor-not-allowed"
          disabled
        >
          <span>Next Step</span>
          <img src="/img/arrow-forward.png" alt="" className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default UploadCertificatePane;