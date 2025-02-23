import React, { useState } from 'react';
import { X } from 'lucide-react';
import SentSuccessModal from './SentSuccessModal';

const SchedulePopup = ({ onClose, onSchedule }) => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('1:48');
  const [selectedPeriod, setSelectedPeriod] = useState('AM');
  const [selectedMonth, setSelectedMonth] = useState('January 2025');
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const weekDays = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];

  const handleSchedule = () => {
    setShowSuccessModal(true);
  };

  const handleViewProjects = () => {
    setShowSuccessModal(false);
    onClose();
  };

  if (showSuccessModal) {
    return <SentSuccessModal onViewProjects={handleViewProjects} />;
  }

  return (
    <div className="fixed inset-0 bg-black/20 flex items-center justify-center z-[60]">
      <div className="bg-white rounded-lg w-[600px] p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg">Schedule send</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X size={20} />
          </button>
        </div>

        <div className="text-sm text-gray-500 mb-6">West Africa Standard Time</div>

        <div className="flex gap-12">
          <div className="flex-1">
            <div className="flex justify-between items-center mb-4">
              <select 
                value={selectedMonth}
                onChange={(e) => setSelectedMonth(e.target.value)}
                className="text-sm font-medium border-none focus:ring-0 bg-transparent"
              >
                <option>January 2025</option>
                <option>February 2025</option>
              </select>
              
              <div className="flex gap-2">
                <button className="p-1 text-[#5570F1]">&lt;</button>
                <button className="p-1 text-[#5570F1]">&gt;</button>
              </div>
            </div>

            <div className="grid grid-cols-7 gap-2">
              {weekDays.map(day => (
                <div key={day} className="text-xs text-center text-gray-500 py-2">{day}</div>
              ))}
              {[...Array(3)].map((_, i) => (
                <div key={`empty-${i}`} className="text-center py-2"></div>
              ))}
              {days.map(day => (
                <button
                  key={day}
                  onClick={() => setSelectedDate(day)}
                  className={`text-sm py-2 rounded-full hover:bg-gray-100 ${
                    selectedDate === day ? 'bg-[#5570F1] text-white hover:bg-[#5570F1]' : ''
                  }`}
                >
                  {day}
                </button>
              ))}
            </div>
          </div>

          <div className="w-48">
            <div className="mb-4">
              <label className="text-sm text-gray-700 mb-2 block">Time</label>
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={selectedTime}
                  onChange={(e) => setSelectedTime(e.target.value)}
                  className="w-20 text-sm border rounded-md px-3 py-1.5"
                />
                <select
                  value={selectedPeriod}
                  onChange={(e) => setSelectedPeriod(e.target.value)}
                  className="text-sm border rounded-md px-3 py-1.5 bg-transparent"
                >
                  <option>AM</option>
                  <option>PM</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-3 mt-6">
          <button
            onClick={onClose}
            className="flex-1 px-4 py-2 border rounded-md text-sm hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            onClick={handleSchedule}
            className="flex-1 px-4 py-2 bg-[#5570F1] text-white rounded-md text-sm hover:bg-[#4457b4]"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default SchedulePopup;