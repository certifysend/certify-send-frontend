import React, { useState } from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import CTA from "./CTA";

export default function HelpCenter() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Getting Started');

  const faqCategories = [
    'Getting Started',
    'Managing Recipients',
    'Sending Certificates & Bulk Emails',
    'Troubleshooting & Support',
    'Security & Account Management'
  ];

  const faqData = {
    'Getting Started': [
      {
        question: 'How do I create an account?',
        answer: 'To create an account, click on the Sign Up button on the homepage. Provide your name, email address, and a secure password. After signing up, complete the KYC process by verifying your NIN and phone number.'
      },
      {
        question: 'How do I log in?',
        answer: 'Simply click the Log In button, enter your registered email and password, and access your account. If you forget your password, use the Forgot Password option to reset it.'
      },
      {
        question: 'How do I upgrade my account?',
        answer: 'To upgrade, go to the Pricing Plans section in your account settings. Choose a plan that suits your needs and follow the payment instructions.'
      },
      {
        question: 'Is my data secure?',
        answer: 'Yes, your data is secure. We use industry-standard encryption and security practices to protect your information.'
      }
    ],
    'Managing Recipients': [
      {
        question: 'How do I add recipients?',
        answer: 'Navigate to the Recipients section and click "Add New Recipient". Fill in the required details and save.'
      }
    ],
    'Sending Certificates & Bulk Emails': [
      {
        question: 'How do I send bulk certificates?',
        answer: 'In the Certificates section, select "Bulk Send". Upload your recipient list and certificate template, then confirm and send.'
      }
    ],
    'Troubleshooting & Support': [
      {
        question: 'How can I get support?',
        answer: 'Contact our support team through the help center, email support@certifysend.com, or use the live chat option.'
      }
    ],
    'Security & Account Management': [
      {
        question: 'Is my data secure?',
        answer: 'Yes, your data is secure. We use industry-standard encryption and security practices to protect your information.'
      }
    ]
  };

  const filteredFAQs = faqData[selectedCategory].filter(faq => 
    faq.question.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-white text-[#53545C] font-inter font-normal text-base sm:text-lg lg:text-xl leading-6 sm:leading-7 tracking-tighter">
      <header className="bg-[#5570F1] text-white">
        <Banner />
        <Navbar variant="blue" />
        <div className="container mx-auto py-8 sm:py-12 lg:py-16 px-4 sm:px-6">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 sm:mb-4">Any questions rising?</h1>
          <p className="text-base sm:text-lg">
            We're here to assist you with any questions or issues you may encounter while using our platform. Below, you'll find answers to common questions, troubleshooting guides, and ways to contact our support team.
          </p>
        </div>
      </header>

      <section className="container mx-auto py-8 sm:py-10 lg:py-12 px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          <div className="bg-white border-2 rounded-lg p-4 sm:p-6">
            <form>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-gray-700 text-sm mb-2">First Name <span className="text-[#D42620]">*</span></label>
                  <input 
                    type="text" 
                    className="w-full p-2 sm:p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5570F1]"
                    placeholder="Input"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm mb-2">Last Name <span className="text-[#D42620]">*</span></label>
                  <input 
                    type="text" 
                    className="w-full p-2 sm:p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5570F1]"
                    placeholder="Input"
                  />
                </div>
              </div>
              
              <div className="mb-4">
                <label className="block text-gray-700 text-sm mb-2">How can we reach you?</label>
                <input 
                  type="text" 
                  className="w-full p-2 sm:p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5570F1]"
                  placeholder="Input"
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-gray-700 text-sm mb-2">Message</label>
                <textarea 
                  className="w-full p-2 sm:p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5570F1]"
                  rows="5"
                  placeholder="Enter your message"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="w-full bg-[#5570F1] text-white py-2 sm:py-3 rounded-lg hover:bg-[#4a62d6] transition duration-300"
              >
                Submit
              </button>
            </form>
          </div>
          
          <div className="rounded-lg p-4 sm:p-6 space-y-4 sm:space-y-8">
            <div className="bg-[#FEFDFD] p-3 rounded-lg border-2 flex items-center space-x-3 w-full sm:w-auto lg:w-2/3">
              <div className="p-2 rounded-full">
                <img src="/img/mail.png" alt="" className="w-6 h-6 sm:w-8 sm:h-8" />
              </div>
              <div>
                <p className="text-gray-500 text-xs sm:text-sm">Email Address</p>
                <p className="text-gray-800 font-medium text-sm sm:text-base">hello@certifysend.com</p>
              </div>
            </div>
            
            <div className="bg-[#FEFDFD] p-3 rounded-lg border-2 flex items-center space-x-3 w-full sm:w-auto lg:w-2/3">
              <div className="p-2 rounded-full">
                <img src="/img/phone.png" alt="" className="w-6 h-6 sm:w-8 sm:h-8" />
              </div>
              <div>
                <p className="text-gray-500 text-xs sm:text-sm">Phone Number</p>
                <p className="text-gray-800 font-medium text-sm sm:text-base">+234 (000) 1234 123 123</p>
              </div>
            </div>
            
            <div className="bg-[#FEFDFD] p-3 rounded-lg w-full sm:w-auto lg:w-2/3 border-2">
              <img src="/img/paper-clip.png" alt="" className="w-6 h-6 sm:w-8 sm:h-8" />
              <p className="text-gray-500 text-xs sm:text-sm mb-2">Social</p>
              <div className="flex flex-col space-y-2">
                <div className="flex flex-wrap gap-2 sm:gap-0 sm:justify-between items-center">
                  <div className="flex items-center space-x-1">
                    <span className="text-gray-800 text-sm sm:text-base">Twitter (X)</span>
                    <img src="/img/social-arrow.png" alt="" className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div className="flex items-center space-x-1">
                    <span className="text-gray-800 text-sm sm:text-base">LinkedIn</span>
                    <img src="/img/social-arrow.png" alt="" className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 sm:gap-0 sm:justify-between items-center">
                  <div className="flex items-center space-x-1">
                    <span className="text-gray-800 text-sm sm:text-base">Facebook</span>
                    <img src="/img/social-arrow.png" alt="" className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div className="flex items-center space-x-1">
                    <span className="text-gray-800 text-sm sm:text-base">Instagram</span>
                    <img src="/img/social-arrow.png" alt="" className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 sm:px-6 py-8 sm:py-10 lg:py-12">
        <div className="text-center mb-6 sm:mb-10">
          <h3 className="text-[14px] sm:text-[16px] font-semibold text-[#5570F1]">FAQ</h3>
          <h2 className="text-[20px] sm:text-[24px] lg:text-[36px] text-[#344054] font-normal">Frequently Asked Questions</h2>
          <p className="text-[14px] sm:text-[16px] lg:text-[18px] text-[#53545C] mx-auto mt-2">
            Need help with something? Here are our most frequently asked questions.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-8">
          <div className="bg-gray-50 rounded-lg p-3 sm:p-4 space-y-1 sm:space-y-2 w-full lg:w-1/2">
            {faqCategories.map((category) => (
              <button
                key={category}
                className={`w-full text-left px-3 sm:px-4 py-2 sm:py-3 transition-colors duration-300 text-sm sm:text-base ${
                  selectedCategory === category 
                    ? 'bg-[#F8F8F8] border-l-4 border-l-[#5570F1] font-semibold' 
                    : 'hover:bg-gray-100'
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="bg-white rounded-lg p-3 sm:p-4 w-full lg:w-1/2">
            <div className="mb-4 sm:mb-6">
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Search here..."
                  className="w-full p-2 sm:p-3 pl-8 sm:pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5570F1] text-sm sm:text-base"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="20" 
                  height="20" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  className="absolute left-2 sm:left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </div>
            </div>

            <div className="space-y-3 sm:space-y-4">
              {filteredFAQs.map((faq, index) => (
                <div 
                  key={index} 
                  className="border-l-4 border-l-[#5570F1] p-3 sm:p-4 lg:p-6 transition-shadow duration-300"
                >
                  <div className="flex justify-between items-center mb-2 sm:mb-4">
                    <h3 className="text-base sm:text-lg font-semibold text-gray-800">{faq.question}</h3>
                  </div>
                  <p className="text-sm sm:text-base text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </div>
  );
}
