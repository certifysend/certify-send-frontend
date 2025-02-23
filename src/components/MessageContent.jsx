import React from 'react';
import { Minus, Maximize2, X } from 'lucide-react';

const MessageContent = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg">
      <div className="bg-[#5570F1] text-white p-3 rounded-t-lg flex items-center justify-between">
        <h3 className="font-normal">Message Content / Send / Schedule</h3>
        <div className="flex items-center space-x-2">
          <button className="hover:bg-blue-700 p-1 rounded">
            <Minus className="w-4 h-4" />
          </button>
          <button className="hover:bg-blue-700 p-1 rounded">
            <Maximize2 className="w-4 h-4" />
          </button>
          <button className="hover:bg-blue-700 p-1 rounded">
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="p-4">
        <div className="flex justify-between items-center mb-4 text-sm">
          <div>Recipients {'- to - 150 Attendees'}</div>
          <div className="text-gray-500">Cc Bcc</div>
        </div>

        <div className="mb-4">
          <div className="text-gray-500 text-sm mb-1">Subject</div>
          <div>Congratulations, {`${'{First Name}'}`}! Your Certificate of Completion is Ready</div>
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

      <div className="p-2 border-t flex items-center">
        <button className="text-gray-500 px-4">Send</button>
        <span className="text-gray-300 px-2">|</span>
        <button className="text-gray-500 font-bold px-2">A</button>
        <div className="flex-grow"></div>
        <button className="text-gray-500 px-2">⋮</button>
        <button className="text-gray-500 px-2">🗑</button>
      </div>
    </div>
  );
};

export default MessageContent;