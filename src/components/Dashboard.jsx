"use client";

import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();
  const [hasData, setHasData] = useState(false);

  const CustomDropdown = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState('All');
    const dropdownRef = useRef(null);

    const options = ['All', 'Today', 'This Week', 'This Month'];

    useEffect(() => {
      const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
          setIsOpen(false);
        }
      };

      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
      <div className="relative" ref={dropdownRef}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center pl-2 pr-3 py-1 text-gray-500 text-sm md:text-base"
        >
          <span>{selected}</span>
          <ChevronDown className="h-3 w-3 md:h-4 md:w-4 ml-1 md:ml-2" />
        </button>
        
        {isOpen && (
          <div className="absolute right-0 mt-1 w-28 md:w-32 bg-white shadow-lg rounded-md z-10">
            {options.map((option) => (
              <div
                key={option}
                className="px-2 md:px-3 py-1.5 md:py-2 text-sm md:text-base text-gray-500 hover:bg-gray-50 cursor-pointer"
                onClick={() => {
                  setSelected(option);
                  setIsOpen(false);
                }}
              >
                {option}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  const mockStats = [
    { title: "Total Certificates Sent", count: hasData ? 872 : 0, icon: "/img/icon.png" },
    { title: "Total Webinars Hosted", count: hasData ? 21 : 0, icon: "/img/icon-2.png" },
    { title: "Total Forms Filed", count: hasData ? 256 : 0, icon: "/img/file-icon.png" },
  ];

  const mockActivities = [
    {
      title: "Certificate Generation",
      desc: hasData ? "Recent Certificates" : "No Certificate Generated Yet?",
      short: hasData ? "Last certificate: Leadership Summit Certificate" : "Create your first certificate project now and experience the power of automation. It's quick, efficient, and hassle-free!",
      icon: "/img/iconContainer.png",
      button: "Generate Certificate",
      action: () => navigate("/projects"),
      items: hasData ? Array(4).fill(null).map((_, i) => ({
        text: "100 certificates sent for Web Development Bootcamp",
        type: "sent",
        date: "Today at 3:00 PM"
      })) : []
    },
    {
      title: "Webinar Registrations",
      desc: hasData ? "Upcoming Webinars" : "No Webinar Registrations Yet?",
      short: hasData ? "Latest registration: Leadership Training Webinar" : "Create your first webinar registration form now to engage your audience and ensure a seamless experience.",
      icon: "/img/iconContainer2.png",
      button: "Create Registration Form",
      action: () => navigate("/forms"), 
      items: hasData ? Array(10).fill({
        text: "85 new registrations for Leadership Training Webinar",
        type: "new"
      }) : []
    },
    {
      title: "Form Submissions",
      desc: hasData ? "Recent Submissions" : "No Form Submissions Yet?",
      short: hasData ? "Registration form: In developer review (5 submissions today)" : "Get started by sharing your registration or feedback form and watch the responses roll in.",
      icon: "/img/iconContainer3.png",
      button: "Create a New Form",
      action: () => navigate("/forms"),
      items: hasData ? Array(10).fill({
        text: "Registration form: In developer review (5 submissions today)",
        type: "review"
      }) : []
    },
    {
      title: "Activity Log",
      desc: hasData ? "Recent Activities" : "No Activity Log Yet?",
      short: hasData ? "User Jane Doe updated the email template for StartupCo Campaign" : "Start your first task to populate your activity log and keep track of your progress effortlessly.",
      icon: "/img/iconContainer5.png",
      button: "Get Started",
      action: () => navigate("/activity-log"),
      items: hasData ? Array(10).fill({
        text: "User Jane Doe updated the email template for StartupCo Campaign",
        type: "update"
      }) : []
    }
  ];

  const mockNotifications = hasData ? Array(15).fill(null).map((_, i) => {
    const types = ["warning", "review", "update", "info"];
    return {
      text: "It would take 24 years to reach 0 Leadership Summit Certificate",
      type: types[i % types.length]
    };
  }) : [];

  const getTypeStyles = (type) => {
    const styles = {
      sent: "bg-[#B6BFE8]",
      scheduled: "bg-[#FF8B49]",
      new: "bg-[#FFE3C9]",
      review: "bg-[#F1A055]",
      update: "bg-[#5570F1]",
      warning: "bg-[#D42620]",
      reminder: "bg-[#5570F1]",
      success: "bg-[#519C66]",
      info: "bg-[#5570F1]"
    };
    return styles[type] || "bg-gray-400";
  };

  return (
    <div className="w-full px-3 sm:px-4 md:px-6 py-4 bg-gray-50 space-y-4 sm:space-y-6 md:space-y-8">
      <button
        onClick={() => setHasData(!hasData)}
        className="mb-2 sm:mb-4 px-3 sm:px-4 py-1.5 sm:py-2 bg-[#5570F1] text-white text-sm sm:text-base rounded hover:bg-[#4560E1] transition-colors"
      >
        Toggle Data State
      </button>

      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mt-4 sm:mt-6">
        {mockStats.map((stat) => (
          <div
            key={stat.title}
            className="p-4 sm:p-5 md:p-6 bg-white rounded-lg hover:shadow-lg transition-shadow duration-300"
          >
            <div className="flex items-center justify-between">
              <img
                src={stat.icon}
                alt={stat.title}
                className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
              />
              <CustomDropdown />
            </div>
            <div className="mt-3 md:mt-4">
              <p className="font-inter font-normal text-[#8B8D97] text-xs sm:text-sm leading-tight sm:leading-[20.3px] tracking-normal">{stat.title}</p>
              <h2 className="font-normal text-xl sm:text-2xl md:text-3xl lg:text-[36px] leading-tight md:leading-[43.2px] tracking-[-2%] md:tracking-[-4%] text-[#33343A]">{stat.count}</h2>
            </div>
          </div>
        ))}
      </div>

      <h2 className="font-semibold text-base sm:text-lg md:text-[18px] leading-tight md:leading-[26.1px] tracking-[0%] text-[#53545C] mt-4 sm:mt-6">Recent Activity</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 sm:gap-4">
        <div className="lg:col-span-2 space-y-3 sm:space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {mockActivities.map((activity) => (
              <div
                key={activity.title}
                className="p-4 sm:p-5 md:p-6 bg-white rounded-lg hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center justify-between mb-3 md:mb-4">
                  <h3 className="font-medium text-base sm:text-lg md:text-xl text-[#37393F] truncate pr-2">{activity.title}</h3>
                  <CustomDropdown />
                </div>
                
                {hasData ? (
                  <div className="mt-3 md:mt-4 h-[200px] sm:h-[250px] md:h-[300px] overflow-y-auto">
                    <ul className="space-y-2 sm:space-y-3">
                      {activity.items.map((item, index) => (
                        <li key={index} className="text-xs sm:text-sm">
                          <div className="flex items-start">
                            <span className={`w-2 h-2 rounded-full mt-1.5 mr-2 ${getTypeStyles(item.type)}`}></span>
                            <div className="flex-1">
                              <span className="text-[#787486]">{item.text}</span>
                              {activity.title === "Certificate Generation" && (
                                <div className="mt-1">
                                  <span className="bg-[#F7F7F7] text-[#787486] text-xs px-2 py-0.5 rounded-md">
                                    {item.date}
                                  </span>
                                </div>
                              )}
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <div className="text-center">
                    <img
                      src={activity.icon}
                      alt={activity.title}
                      className="mx-auto mb-3 md:mb-4 w-16 h-16 sm:w-20 sm:h-20"
                    />
                    <div className="mb-3 md:mb-4">
                      <h2 className="text-base sm:text-lg md:text-xl font-medium text-gray-900">{activity.desc}</h2>
                      <p className="text-xs sm:text-sm w-full sm:w-4/5 md:w-2/3 mx-auto text-gray-500 mt-1 sm:mt-2">{activity.short}</p>
                    </div>
                    <button
                      className="text-[#5570F1] hover:text-[#4560E1] mt-2 sm:mt-4 flex items-center justify-center mx-auto transition-colors text-sm sm:text-base"
                      onClick={activity.action}
                    >
                      {activity.button}
                      <svg className="ml-1 sm:ml-2 w-3 h-3 sm:w-4 sm:h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

       
        <div className="bg-white rounded-lg p-4 sm:p-5 md:p-6">
          <div className="flex items-center justify-between mb-3 md:mb-4">
            <h3 className="font-medium text-base sm:text-lg md:text-xl text-[#45464E]">Notifications</h3>
            <CustomDropdown />
          </div>
          {hasData ? (
            <div className="overflow-y-auto" style={{ maxHeight: "300px", height: "calc(100vh - 350px)", minHeight: "200px" }}>
              <ul className="space-y-2 sm:space-y-3">
                {mockNotifications.map((notification, index) => (
                  <li key={index} className="flex items-start pb-2 sm:pb-3 border-b border-gray-100">
                    <span className={`w-2 h-2 rounded-full mt-1.5 mr-2 ${getTypeStyles(notification.type)}`}></span>
                    <span className="text-[#787486] text-xs sm:text-sm">
                      {notification.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-10 sm:py-16 md:py-24 lg:py-32">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gray-100 rounded-full flex items-center justify-center mb-3 sm:mb-4">
                <img src="/img/icon-notification.png" alt="Notifications" className="w-6 h-6 sm:w-8 sm:h-8" />
              </div>
              <h3 className="text-base sm:text-lg font-medium text-gray-900 mb-1 sm:mb-2">No Notifications Yet?</h3>
              <p className="text-xs sm:text-sm text-gray-500 text-center mb-4 sm:mb-6 w-full sm:w-4/5">
                Stay informed! We'll notify you about certificate delivery status, webinar registrations, and form submissions.
              </p>
              <button className="text-[#5570F1] hover:text-[#4560E1] flex items-center space-x-1 sm:space-x-2 text-sm sm:text-base">
                <span>Set Up Notifications</span>
                <svg className="w-3 h-3 sm:w-4 sm:h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;