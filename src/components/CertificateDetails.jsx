import React, { useState } from 'react';
import { ChevronLeft } from 'lucide-react';
import PreviewCertificate from './PreviewCertificate';
import RecipientList from './RecipientList';
import MessageContent from './MessageContent';

const CertificateDetails = ({ onBack = () => {} }) => {
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
      createdDate: "Thursday, it h1 Jan 2025",
      previewImage: "/certificate-preview.png"
    }
  };
  
  return (
    <div className="min-h-screen bg-white">
      <div className="border-b">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 py-3 sm:py-4 mt-3 sm:mt-5">
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

      <div className="border-b">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6">
          <div className="flex space-x-3 sm:space-x-6 md:space-x-8 overflow-x-auto scrollbar-hide">
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

      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 py-4 sm:py-6 md:py-8">
        {activeTab === 'Preview certificate' ? (
          <PreviewCertificate />
        ) : activeTab === 'Recipient List' ? (
          <RecipientList />
        ) : activeTab === 'Message Content / Send / Schedule' ? (
          <MessageContent />
        ) : (
          <div className="flex flex-col lg:flex-row lg:space-x-6 space-y-6 lg:space-y-0">
            <div className="flex-1 overflow-auto">
              <div className="mb-6">
                <div className="flex justify-between items-center mb-3 sm:mb-4 flex-wrap gap-2">
                  <h2 className="text-base sm:text-lg font-medium">Certificate Status</h2>
                  <span className="text-green-600 bg-green-50 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm">
                    {certificateData.status}
                  </span>
                </div>
              </div>

              <div className="mb-6">
                <h2 className="text-base sm:text-lg font-medium mb-3 sm:mb-4 flex items-center flex-wrap">
                  {certificateData.messageContent.title}
                  <span className="text-gray-500 text-xs sm:text-sm ml-2">
                    {certificateData.messageContent.subTitle}
                  </span>
                </h2>
                <div className="bg-gray-50 p-4 sm:p-6 rounded-lg text-sm sm:text-base whitespace-pre-wrap overflow-y-auto max-h-[calc(100vh-300px)] md:max-h-[500px]">
                  {certificateData.messageContent.text}
                </div>
              </div>
            </div>

            <div className="w-full lg:w-72 xl:w-80 2xl:w-96 flex-shrink-0">
              <div className="bg-white border rounded-lg p-4 sticky top-4">
                <div className="mb-4">
                  <img 
                    src={certificateData.certificate.previewImage || "/img/cert-image.png"} 
                    alt="Certificate Preview" 
                    className="w-full rounded-lg shadow-lg"
                  />
                </div>

                <div className="space-y-3 text-sm sm:text-base">
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

export default CertificateDetails;