import React, { useState } from 'react';
import { ChevronLeft, Search, ChevronDown, Grid, List } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import EmptyState from "./EmptyState";
import PreviewCertificate from "./PreviewCertificate";
import RecipientList from "./RecipientList";
import MessageContent from './MessageContent';
import UploadCertificatePane from "./UploadCertificatePane";
import FormBuilder from "./FormBuilder";
import BulkEmailPane from "./BulkEmail";

const CertificateDetails = ({ onBack }) => {
  const [activeTab, setActiveTab] = useState('Summary');

  const tabs = [
    'Summary',
    'Preview certificate',
    'Recipient List',
    'Message Content / Send / Schedule'
  ];

  const certificateData = {
    status: "Delivered on Saturday, 20 Jan 2025",
    messageContent: {
      title: "Message Content",
      subTitle: "(6 fields)",
      text: `Congratulations on successfully completing the {Course Title}!

We are thrilled to recognize your hard work and dedication. As a token of your achievement, we've prepared a certificate just for you.

Here are the details of your accomplishment:

Course Title: {Course Title}
Completion Date: {Completion Date}
Instructor: {Instructor}

Click the button below to download your certificate.

[Download Certificate]

Thank you for your commitment to reaching this growth! We hope this achievement motivates you to continue reaching new heights.

If you have any questions or face any issues, feel free to contact us at {Support Email}.

Best regards,
{Organization/School} Team`
    },
    certificate: {
      name: "Certificate of Achievement",
      recipients: 149,
      createdDate: "Thursday, 16 Jan 2025",
      previewImage: "img/cert-image.png",
    
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <div className="border-b">
        <div className="max-w-screen-2xl mx-auto sm:px-6 py-3 sm:py-4 mt-3 sm:mt-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 sm:space-x-4">
              <button 
                className="hover:bg-gray-100 p-1 sm:p-2 rounded-full flex items-center text-[#5570F1]"
                onClick={onBack}
              >
                <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="text-sm sm:text-base">Back</span>
              </button>
              <h1 className="text-base sm:text-lg font-medium">Certificate of Achievement</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="border-b sticky top-0 bg-white z-10">
        <div className="max-w-screen-2xl mx-auto sm:px-6">
          <div className="flex space-x-3 sm:space-x-4 md:space-x-6 border-b mb-4 sm:mb-6 overflow-x-auto scrollbar-hide pb-1 -mx-9 sm:-mx-6 px-4 sm:px-6 w-screen sm:w-auto">
            {tabs.map((tab) => (
              <button
                key={tab}
                className={`py-2 sm:py-4 px-1 whitespace-nowrap relative text-sm sm:text-base ${
                  activeTab === tab 
                    ? 'text-blue-600 font-medium' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
                {activeTab === tab && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600" />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-hidden w-screen">
        {activeTab === 'Preview certificate' ? (
          <PreviewCertificate />
        ) : activeTab === 'Recipient List' ? (
          <RecipientList />
        ) : activeTab === 'Message Content / Send / Schedule' ? (
          <MessageContent />
        ) : (
        <div className="max-w-screen-2xl mx-auto sm:px-6 py-4">
          <div className="flex flex-col lg:flex-row lg:space-x-6 space-y-6 lg:space-y-0">
            <div className="flex-1 flex flex-col">
              <div className="mb-6 sm:mb-8">
                <div className="flex justify-between items-center mb-3 sm:mb-4">
                  <h2 className="text-base sm:text-lg font-medium">Certificate Status</h2>
                </div>
              </div>

              <div className="flex-1 bg-gray-50 p-4 sm:p-6 rounded-lg">
                <h2 className="text-base sm:text-lg font-medium mb-3 sm:mb-4">
                  {certificateData.messageContent.title}
                  <span className="text-gray-500 text-xs sm:text-sm ml-2">
                    {certificateData.messageContent.subTitle}
                  </span>
                </h2>
                <div className="text-sm sm:text-base whitespace-pre-wrap">
                  {certificateData.messageContent.text}
                </div>
              </div>
            </div>
            <div className="w-full lg:w-80 xl:w-96 flex flex-col justify-between">
              <div className="text-end">
                <span className="text-green-600 bg-green-50 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm">
                  {certificateData.status}
                </span>
              </div>


              <div className="bg-white border rounded-lg p-4 whitespace-pre-wrap">
                <div className="mb-4 sm:mb-6">
                  <img 
                    src={certificateData.certificate.previewImage} 
                    alt="Certificate Preview" 
                    className="w-full rounded-lg shadow-lg"
                  />
                </div>

                <div className="space-y-3 sm:space-y-4 text-sm sm:text-base">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Certificate Name</span>
                    <span className="font-medium">{certificateData.certificate.name}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">No. Recipients</span>
                    <span className="font-medium">{certificateData.certificate.recipients}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Created Date</span>
                    <span className="font-medium">{certificateData.certificate.createdDate}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

const ProjectsList = ({ certificates, onSelect, viewMode, isRecentlyViewed }) => {
  if (certificates.length === 0) {
    return (
      <div className="mt-6 md:mt-12 lg:mt-16 flex justify-center">
        <div className="bg-[#F9FAFB] w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl py-6 sm:py-8 md:py-12 lg:py-16 px-3 md:px-4 lg:px-8 rounded-lg">
          <EmptyState />
        </div>
      </div>
    );
  }

  if (viewMode === 'grid') {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
        {certificates.map((cert) => (
          <div 
            key={cert.id}
            className="bg-white rounded-lg border shadow-sm hover:shadow-md transition cursor-pointer"
            onClick={() => onSelect(cert)}
          >
            <img 
              src={cert.preview} 
              alt={cert.title}
              className="w-full h-32 sm:h-40 object-cover rounded-t-lg"
            />
            <div className="p-3 sm:p-4">
              <h3 className="font-medium text-sm sm:text-base truncate">{cert.title}</h3>
              <p className="text-xs sm:text-sm text-gray-500 mt-1">
                <span className={cert.edited === "Now" ? "text-[#5570F1]" : ""}>
                  {cert.edited === "Now" ? "Edited " : ""}{cert.createdAt}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    );
  } else {
    return (
      <div className="bg-white rounded-lg border shadow-sm overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 text-xs sm:text-sm">
            <tr>
              <th className="px-3 sm:px-6 py-2 sm:py-3 text-left font-medium text-gray-500">File Name</th>
              <th className="px-3 sm:px-6 py-2 sm:py-3 text-left font-medium text-gray-500">Last Modified</th>
              <th className="px-3 sm:px-6 py-2 sm:py-3 text-left font-medium text-gray-500">Created</th>
              <th className="px-3 sm:px-6 py-2 sm:py-3 text-left font-medium text-gray-500">Star</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 text-[#101928] text-xs sm:text-sm">
            {certificates.map((cert) => (
              <tr 
                key={cert.id}
                className="hover:bg-gray-50 cursor-pointer"
                onClick={() => onSelect(cert)}
              >
                <td className="px-3 sm:px-6 py-2 sm:py-4 flex items-center gap-2 sm:gap-4">
                  <img 
                    src={cert.preview} 
                    alt={cert.title}
                    className="w-16 sm:w-24 h-12 sm:h-16 object-cover rounded"
                  />
                  <span className="truncate max-w-[150px] sm:max-w-none">{cert.title}</span>
                </td>
                <td className="px-3 sm:px-6 py-2 sm:py-4">{cert.modified}</td>
                <td className="px-3 sm:px-6 py-2 sm:py-4">{cert.createdAt}</td>
                <td className="px-3 sm:px-6 py-2 sm:py-4">
                  <img src={cert.star} alt="Star rating" className="w-4 sm:w-6" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
};

const Projects = ({ setActivePage }) => {
  const navigate = useNavigate();
  const [activeView, setActiveView] = useState('main');
  const [activeTab, setActiveTab] = useState("Recently viewed");
  const [viewMode, setViewMode] = useState('grid');
  const [setShowFormBuilder] = useState(false);
  const [certificates] = useState([
    {
      id: 1,
      title: 'Certificate of Achievement',
      modified: 'Just Now',
      edited: 'Now',
      createdAt: 'Saturday, 18 Jan 2025',
      star: '/img/Rating.png',
      preview: '/img/cert-image.png'
    },
    {
      id: 2,
      title: 'Productivity Hacks Workshop',
      modified: '1 hour ago',
      edited: '1 hour ago',
      createdAt: 'Saturday, 18 Jan 2025',
      star: '/img/Rating.png',
      preview: '/img/cert-image.png'
    },
    {
      id: 3,
      title: 'Party Invite',
      modified: '1 hour ago',
      edited: '1 hour ago',
      createdAt: 'Saturday, 18 Jan 2025',
      star: '/img/Rating.png',
      preview: '/img/cert-image.png'
    },
    {
      id: 4,
      title: 'Certificate of Achievement',
      modified: '25 minutes ago',
      edited: '25 minutes ago',
      createdAt: 'Saturday, 18 Jan 2025',
      star: '/img/Rating.png',
      preview: '/img/cert-image.png'
    }
  ]);

  const [showEmptyState, setShowEmptyState] = useState(true);

  const mainTabs = [
    { name: "Recently viewed" },
    { name: "View all certificates" },
    { name: "All form responses" },
    { name: "Starred" },
    { name: "All draft" }
  ];

  const quickActions = [
    { 
      title: "Generate certificate", 
      description: "Create and automate a new certificate", 
      icon: "/img/icon.png",
      action: () => {
        setShowEmptyState(false);
        setActivePage && setActivePage("Certificates");
        setActiveView("uploadCertificate");
      }
    },
    { 
      title: "Create new form", 
      description: "Design and manage a new form with ease", 
      icon: "/img/icon-create.png",
      action: () => {
        setShowEmptyState(false);
        setActivePage && setActivePage("Forms");
        setActiveView("formBuilder");
      }
    },
    { 
      title: "Bulk Email", 
      description: "Upload and process a bulk email", 
      icon: "/img/icon-bulk.png",
      action: () => {
        setShowEmptyState(false);
        setActivePage && setActivePage("Bulk Email");
        setActiveView("bulkEmail");
      }
    },
    { 
      title: "New plan setup", 
      description: "Set up and customize a new subscription plan", 
      icon: "/img/icon-plan.png",
      action: () => {
        if (navigate) {
          navigate("/pricing");
        } else {
          console.log("Navigate to pricing page");
        }
      }
    }
  ];

  const renderSearchAndFilters = () => {
    const isRecentlyViewed = activeTab === "Recently viewed";
    const isViewAllCertificates = activeTab === "View all certificates";

    return (
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 md:mb-6 gap-3 md:gap-4">
        <div className="relative w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
          <Search className="absolute left-2 sm:left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-3.5 h-3.5 sm:w-4 sm:h-4" />
          <input 
            type="text" 
            placeholder="Search here..." 
            className="w-full pl-7 sm:pl-10 pr-2 sm:pr-4 py-1 sm:py-2 border rounded-lg text-xs sm:text-sm focus:ring-2 focus:ring-[#5570F1] focus:border-[#5570F1]"
          />
        </div>
        <div className="flex items-center justify-between w-full sm:w-auto sm:justify-end">
          <div className="flex items-center space-x-2 md:space-x-4">
            {isRecentlyViewed && (
              <select className="text-xs sm:text-sm text-gray-600 hover:text-gray-900 border rounded px-1.5 py-1 sm:px-2 sm:py-1.5">
                <option>All files</option>
                <option>Option 1</option>
                <option>Option 2</option>
              </select>
            )}
            {isViewAllCertificates && (
              <select className="text-xs sm:text-sm text-gray-600 hover:text-gray-900 border rounded px-1.5 py-1 sm:px-2 sm:py-1.5">
                <option>Sent</option>
                <option>Ongoing</option>
                <option>Not sent</option>
              </select>
            )}
            <button className="text-xs sm:text-sm hover:text-[#5570F1] flex items-center whitespace-nowrap">
              Last viewed <ChevronDown className="h-3 w-3 sm:h-4 sm:w-4 ml-0.5 sm:ml-1" />
            </button>
          </div>

          <div className="flex items-center space-x-1 md:space-x-2 ml-2 sm:ml-4">
            <button 
              onClick={() => setViewMode('grid')} 
              className="p-0.5 sm:p-1 rounded hover:bg-gray-100"
            >
              <Grid className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${viewMode === 'grid' ? 'text-[#5570F1]' : 'text-gray-400'}`} />
            </button>
            <button 
              onClick={() => setViewMode('list')} 
              className="p-0.5 sm:p-1 rounded hover:bg-gray-100"
            >
              <List className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${viewMode === 'list' ? 'text-[#5570F1]' : 'text-gray-400'}`} />
            </button>
          </div>
        </div>
      </div>
    );
  };

  const renderTabs = (tabs) => (
    <div className="flex space-x-3 sm:space-x-4 md:space-x-6 border-b mb-4 sm:mb-6 overflow-x-auto scrollbar-hide pb-1 -mx-9 sm:-mx-6 px-8 sm:px-6 w-screen sm:w-auto">
      {tabs.map((tab, index) => (
        <button
          key={index}
          className={`py-1.5 sm:py-2 px-1 whitespace-nowrap text-xs sm:text-sm flex-shrink-0 ${
            activeTab === tab.name 
              ? "text-[#5570F1] border-b-2 border-[#5570F1] font-medium" 
              : "text-gray-500 hover:text-[#5570F1]"
          }`}
          onClick={() => setActiveTab(tab.name)}
        >
          {tab.name}
        </button>
      ))}
    </div>
  );

  const handleCertificateSelect = (certificate) => {
    setActiveView('certificateDetails');
  };

  const getFilteredCertificates = () => {
    if (activeTab === "Recently viewed") {
      return certificates;
    } else if (activeTab === "Starred") {
      return certificates.filter(cert => cert.star && cert.star.includes('Rating'));
    } else if (activeTab === "All draft") {
      return certificates.filter(cert => cert.id % 2 === 0);
    } else if (activeTab === "View all certificates") {
      return certificates;
    } else {
      return [];
    }
  };

  const renderMainView = () => (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-2 py-5 md:py-0 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-4 lg:gap-6 mb-6 sm:mb-8">
        {quickActions.map((action, index) => (
          <div 
            key={index} 
            className="p-2 sm:p-3 md:p-4 lg:p-6 bg-white border rounded-lg hover:shadow-md transition cursor-pointer"
            onClick={() => {
              action.action(); 
              setShowEmptyState(false);
            }}
          >
            <div className="flex items-center space-x-1.5 sm:space-x-2 md:space-x-3">
              <img 
                src={action.icon} 
                alt={action.title} 
                className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 flex-shrink-0" 
              />
              <div className="min-w-0">
                <h3 className="text-gray-800 font-medium text-xs sm:text-sm truncate">{action.title}</h3>
                <p className="text-gray-500 text-[10px] sm:text-xs mt-0.5 md:mt-1 line-clamp-1 sm:line-clamp-2">{action.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {renderTabs(mainTabs)}
      
      {!showEmptyState && renderSearchAndFilters()}
      
      {showEmptyState ? (
        <div className="flex flex-col items-center justify-center mt-8 sm:mt-20 bg-[#F9FAFB] max-w-lg mx-auto p-4 sm:p-5 rounded-lg">
        <img src="/img/elements.png" alt="element" className="mb-4 sm:mb-6 w-16 sm:w-auto" />
        <h2 className="text-center mb-2 font-medium text-sm sm:text-base">No Projects Created Yet</h2>
        <p className="text-center mb-4 sm:mb-6 text-gray-500 text-xs sm:text-sm">
        It looks like you haven't created any projects yet. Start by creating a new project to manage your certificates and forms
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
      ) : (
        <ProjectsList 
          certificates={getFilteredCertificates()} 
          onSelect={handleCertificateSelect}
          viewMode={viewMode}
          isRecentlyViewed={activeTab === "Recently viewed"}
        />
      )}
    </>
  );

  const renderActiveView = () => {
    switch (activeView) {
      case 'main':
        return renderMainView();
      case 'certificateDetails':
        return <CertificateDetails onBack={() => setActiveView('main')} />;
      case 'uploadCertificate':
        return <UploadCertificatePane onBack={() => setActiveView('main')} />;
      case 'formBuilder':
        return <FormBuilder onClose={() => setActiveView('main')} />;
      case 'bulkEmail':
        return <BulkEmailPane onBack={() => setActiveView('main')} />;
      default:
        return renderMainView();
    }
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-6 flex-1 max-w-full xl:max-w-[1440px] overflow-hidden">
      {renderActiveView()}
    </div>
  );
};

export default Projects;