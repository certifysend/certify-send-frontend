import React, { useState } from 'react';
import { ChevronLeft, Search, ChevronDown } from 'lucide-react';
import EmptyState from "./EmptyState";
import PreviewCertificate from "./PreviewCertificate";
import RecipientList from "./RecipientList";
import MessageContent from './MessageContent';

const CertificateDetails = ({ onBack }) => {
  const [activeTab, setActiveTab] = useState('Summary');

  const tabs = [
    'Summary',
    'Preview certificate',
    'Recipient List',
    'Message Content / Send / Schedule'
  ];

  const certificateData = {
    status: "Delivered on Saturday, 18 Jan 2025",
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
      previewImage: "/certificate-preview.png"
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="border-b">
        <div className="max-w-screen-2xl mx-auto px-6 py-4 mt-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button 
                className="hover:bg-gray-100 p-2 rounded-full flex items-center text-[#5570F1]"
                onClick={onBack}
              >
                <ChevronLeft className="w-5 h-5" />
                <span className="">Back</span>
              </button>
              <h1 className="text-lg font-medium">Certificate of Achievement</h1>
            </div>
          </div>
        </div>
      </div>


      <div className="border-b">
        <div className="max-w-screen-2xl mx-auto px-6">
          <div className="flex space-x-8">
            {tabs.map((tab) => (
              <button
                key={tab}
                className={`py-4 px-1 relative ${
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

      <div className="max-w-screen-2xl mx-auto px-6 py-8">
        {activeTab === 'Preview certificate' ? (
          <PreviewCertificate />
        ) : activeTab === 'Recipient List' ? (
          <RecipientList />
        ) : activeTab === 'Message Content / Send / Schedule' ? (
          <MessageContent />
        ) : (
          <div className="flex space-x-8">
            <div className="flex-1">
              <div className="mb-8">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-lg font-medium">Certificate Status</h2>
                  <span className="text-green-600 bg-green-50 px-3 py-1 rounded-full text-sm">
                    {certificateData.status}
                  </span>
                </div>
              </div>

              <div className="mb-8">
                <h2 className="text-lg font-medium mb-4">
                  {certificateData.messageContent.title}
                  <span className="text-gray-500 text-sm ml-2">
                    {certificateData.messageContent.subTitle}
                  </span>
                </h2>
                <div className="bg-gray-50 p-6 rounded-lg whitespace-pre-wrap">
                  {certificateData.messageContent.text}
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="w-96">
              <div className="bg-white border rounded-lg p-4">
                <div className="mb-6">
                  <img 
                    src={certificateData.certificate.previewImage} 
                    alt="Certificate Preview" 
                    className="w-full rounded-lg shadow-lg"
                  />
                </div>

                <div className="space-y-4">
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
        )}
      </div>
    </div>
  );
};

const Projects = () => {
  const [activeView, setActiveView] = useState('main');
  const [activeTab, setActiveTab] = useState("Recently viewed");
  const [viewMode, setViewMode] = useState('grid');
  const [certificates] = useState([
    {
      id: 1,
      title: 'User Experience Database',
      modified: 'Just Now',
      createdAt: 'Saturday, 18 Jan 2023',
      star: '/img/Rating.png',
      preview: '/img/cert-image.png'
    }
  ]);

  const mainTabs = [
    { name: "Recently viewed" },
    { name: "View all certificates" },
    { name: "All form responses" },
    { name: "Starred" },
    { name: "All draft" }
  ];

  const quickActions = [
    { title: "Generate Certificate", description: "Create and automate a new certificate", icon: "/img/icon.png" },
    { title: "Create New Form", description: "Design and manage a new form with ease", icon: "/img/icon-create.png" },
    { title: "Bulk Email", description: "Upload and process a bulk email", icon: "/img/icon-bulk.png" },
    { title: "New Plan Setup", description: "Set up and customize a new subscription plan", icon: "/img/icon-plan.png" }
  ];

  const renderSearchAndFilters = () => {
    const isRecentlyViewed = activeTab === "Recently viewed";
    const isViewAllCertificates = activeTab === "View all certificates";

    return (
      <div className="flex justify-between items-center mb-6">
        <div className="relative w-1/3">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input 
            type="text" 
            placeholder="Search here..." 
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-300 focus:border-blue-300"
          />
        </div>
        <div className="flex items-center space-x-4">
          {isRecentlyViewed && (
            <select className="text-gray-600 hover:text-gray-900 border rounded px-2 py-1">
              <option>All files</option>
              <option>Option 1</option>
              <option>Option 2</option>
            </select>
          )}
          {isViewAllCertificates && (
            <select className="text-gray-600 hover:text-gray-900 border rounded px-2 py-1">
              <option>Sent</option>
              <option>Ongoing</option>
              <option>Not sent</option>
            </select>
          )}
          <button className="hover:text-gray-900 flex items-center">Last viewed <ChevronDown className='h-5 w-5' /> </button>
          <button onClick={() => setViewMode('grid')}>
            <img src='/img/menu-icon.png' alt="menu" className={`w-10 h-10 ${viewMode === 'grid' ? 'text-blue-600' : 'text-gray-400'}`} />
          </button>
          <button onClick={() => setViewMode('list')}>
            <img src='/img/menu2-con.png' alt="menu" className={`w-10 h-10 ${viewMode === 'list' ? 'text-blue-600' : 'text-gray-400'}`} />
          </button>
        </div>
      </div>
    );
  };

  const renderTabs = (tabs) => (
    <div className="flex space-x-4 border-b mb-6">
      {tabs.map((tab, index) => (
        <button
          key={index}
          className={`py-2 px-4 ${
            activeTab === tab.name 
              ? "text-[#5570F1] border-b-2 border-[#5570F1]" 
              : "text-gray-500 hover:text-[#5570F1]"
          }`}
          onClick={() => setActiveTab(tab.name)}
        >
          {tab.name}
        </button>
      ))}
    </div>
  );

  const renderCertificateGrid = () => (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {certificates.map((cert) => (
        <div 
          key={cert.id}
          className="bg-white rounded-lg shadow hover:shadow-lg transition cursor-pointer"
          onClick={() => setActiveView('certificateDetails')}
        >
          <img 
            src={cert.preview} 
            alt={cert.title}
            className="w-full h-40 object-cover rounded-t-lg"
          />
          <div className="p-4">
            <h3 className="font-semibold">{cert.title}</h3>
            <p className="text-sm text-gray-500">{cert.createdAt}</p>
          </div>
        </div>
      ))}
    </div>
  );

  const renderCertificateList = () => (
    <div className="bg-white rounded-lg shadow">
      <table className="w-full">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">File Name</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Last Modified</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Created</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Star</th>
            
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 text-[#101928]">
          {certificates.map((cert) => (
            <tr 
              key={cert.id}
              className="hover:bg-gray-50 cursor-pointer"
              onClick={() => setActiveView('certificateDetails')}
            >
              <td className="px-6 py-4 flex items-center">
              <img 
            src={cert.preview} 
            alt={cert.title}
            className="w-40 h-20 object-cover rounded-t-lg"
          />{cert.title}</td>
              <td className="px-6 py-4">{cert.modified}</td>
              <td className="px-6 py-4">{cert.createdAt}</td>
              <td className="px-6 py-4"><img src={cert.star} alt={cert.title} className="" /></td>
             
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  const renderMainView = () => (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {quickActions.map((action, index) => (
          <div key={index} className="p-8 bg-white shadow rounded-lg hover:shadow-lg transition flex items-center space-x-3">
            <img src={action.icon} alt={action.title} className="w-8 h-8" />
            <div>
              <h3 className="text-[#2C2D33]  text-sm">{action.title}</h3>
              <p className="text-gray-500 text-xs">{action.description}</p>
            </div>
          </div>
        ))}
      </div>

      {renderTabs(mainTabs)}
      {renderSearchAndFilters()}
      
      {certificates.length === 0 ? (
        <div className="mt-32 bg-[#F9FAFB] max-w-md mx-auto py-12 px-2 rounded-lg">
          <EmptyState />
        </div>
      ) : (
        viewMode === 'grid' ? renderCertificateGrid() : renderCertificateList()
      )}
    </>
  );

  return (
    <div className={`container mx-auto ${activeView === 'certificateDetails' ? '' : 'p-6'} flex-1 space-y-6`}>
      {activeView === 'main' ? renderMainView() : <CertificateDetails onBack={() => setActiveView('main')} />}
    </div>
  );
};

export default Projects;