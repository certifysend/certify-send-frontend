import React, { useState } from 'react';
import { ChevronLeft, Search, Grid, List, MoreVertical, Download, Share2, MessageSquare, Bell } from 'lucide-react';

const SummaryTab = ({ certificateData }) => (
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
);

const PreviewCertificateTab = () => (
  <div className="p-6">
    <div className="text-center">
      <h2 className="text-xl font-medium mb-4">Certificate Preview</h2>
    </div>
  </div>
);

const RecipientListTab = () => (
  <div className="p-6">
    <div className="text-center">
      <h2 className="text-xl font-medium mb-4">Recipient List</h2>
    </div>
  </div>
);

const MessageContentTab = () => (
  <div className="p-6">
    <div className="text-center">
      <h2 className="text-xl font-medium mb-4">Message Content</h2>
    </div>
  </div>
);

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
      text: `Congratulations on successfully completing the {Course Title}!...`
    },
    certificate: {
      name: "Certificate of Achievement",
      recipients: 149,
      createdDate: "Thursday, 16 Jan 2025",
      previewImage: "/certificate-preview.png"
    }
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'Summary':
        return <SummaryTab certificateData={certificateData} />;
      case 'Preview certificate':
        return <PreviewCertificateTab />;
      case 'Recipient List':
        return <RecipientListTab />;
      case 'Message Content / Send / Schedule':
        return <MessageContentTab />;
      default:
        return <SummaryTab certificateData={certificateData} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="border-b">
        <div className="max-w-screen-2xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button 
                className="hover:bg-gray-100 p-2 rounded-full"
                onClick={onBack}
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <h1 className="text-lg font-medium">Certificate of Achievement</h1>
            </div>
            <div className="flex items-center space-x-6">
              <Bell className="w-5 h-5 text-gray-600" />
              <MessageSquare className="w-5 h-5 text-gray-600" />
              <div className="w-8 h-8 bg-[#5570F1] rounded-full text-white flex items-center justify-center">
                SD
              </div>
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
                    ? 'text-[#5570F1] font-medium' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
                {activeTab === tab && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#5570F1]" />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-screen-2xl mx-auto px-6 py-8">
        {renderTabContent()}
      </div>
    </div>
  );
};

export default CertificateDetails;