import React, { useState } from "react";
import { X, Minus, Maximize2, Minimize2 } from "lucide-react";
import EmailSchedule from './EmailSchedule';
import SentSuccessModal from './SentSuccessModal'; 

const EmailCompositionPane = ({ onBack, onClose }) => {
  const [showSchedulePopup, setShowSchedulePopup] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false); 

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccessModal(true); 
  };

  const handleMinimize = () => {
    setIsMinimized(true);
    setIsMaximized(false);
  };

  const handleMaximize = () => {
    setIsMaximized(!isMaximized);
    setIsMinimized(false);
  };

  const handleClose = () => {
    onClose();
  };

  const handleSuccessModalClose = () => {
    setShowSuccessModal(false); 
    onClose();
  };

  return (
    <div className="fixed inset-0 w-screen h-screen bg-black/20 flex items-end justify-end z-50">
      {isMinimized && (
        <div className="fixed bottom-4 right-4 bg-white rounded-lg shadow-lg p-2 flex items-center gap-2">
          <button
            onClick={() => setShowSchedulePopup(true)}
            className="px-2 rounded-md py-1 border border-[#5570F1] text-[#5570F1] font-light flex items-center"
          >
            <img src="/img/button-icon-schedule.png" alt="" className="h-8 w-8" />
            Schedule send
          </button>
          <button
            onClick={handleSubmit}
            className="flex items-center gap-2 rounded-md py-2 px-4 bg-[#5570F1] text-white"
          >
            Send <img src="/img/Arrow.png" alt="" className="" />
          </button>
          <button
            onClick={handleMaximize}
            className="hover:bg-gray-100 p-1 rounded"
          >
            <Maximize2 className="w-4 h-4" />
          </button>
          <button
            onClick={handleClose}
            className="hover:bg-gray-100 p-1 rounded"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {!isMinimized && (
        <div
          className={`bg-white rounded-lg shadow-lg transition-all duration-300 flex flex-col ${
            isMaximized
              ? "w-[calc(100%-16rem)] h-full ml-64 mt-10" 
              : "w-1/2 h-[70vh] fixed bottom-4 right-4" 
          }`}
        >
          <div className="bg-[#5570F1] text-white p-3 rounded-t-lg flex items-center justify-between ">
            <h3 className="font-normal">Message Content / Send / Schedule</h3>
            <div className="flex items-center space-x-2">
              <button
                onClick={handleMinimize}
                className="hover:bg-[#5570F1] p-1 rounded"
              >
                <Minus className="w-4 h-4" />
              </button>
              <button
                onClick={handleMaximize}
                className="hover:bg-[#5570F1] p-1 rounded"
              >
                {isMaximized ? (
                  <Minimize2 className="w-4 h-4" />
                ) : (
                  <Maximize2 className="w-4 h-4" />
                )}
              </button>
              <button
                onClick={handleClose}
                className="hover:bg-[#5570F1] p-1 rounded"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="p-4 flex-1 overflow-y-auto">
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

            {isMaximized && (
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
            )}
          </div>

          <div className="p-4 border-t">
            <div className="flex">
              <button
                onClick={() => setShowSchedulePopup(true)}
                className="px-2 rounded-md py-1 border border-[#5570F1] text-[#5570F1] font-light flex items-center"
              >
                <img src="/img/button-icon-schedule.png" alt="" className="h-8 w-8" />
                Schedule send
              </button>
            </div>

            <div className="flex mt-2">
              <button
                onClick={handleSubmit}
                className="flex items-center gap-5 rounded-md py-2 px-4 bg-[#5570F1] text-white"
              >
                Send <img src="/img/Arrow.png" alt="" className="" />
              </button>
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
      )}

      {showSchedulePopup && (
        <EmailSchedule
          onClose={() => setShowSchedulePopup(false)}
        />
      )}

      {showSuccessModal && (
        <SentSuccessModal
          onClose={handleSuccessModalClose} 
        />
      )}
    </div>
  );
};

export default EmailCompositionPane;