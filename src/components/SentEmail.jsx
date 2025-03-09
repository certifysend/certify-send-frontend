"use client";

import { useState, useEffect } from "react";
import { Search,ChevronLeft } from 'lucide-react';
import EmailCompositionPane from "./EmailCompositionPane";
import FormBuilder from "./FormBuilder";

const SentEmail = ({ onNavigate }) => {
  const [view, setView] = useState("empty");
  const [selectedProject, setSelectedProject] = useState(null);
  const [projectsLoaded, setProjectsLoaded] = useState(false);
  const [showFormBuilder, setShowFormBuilder] = useState(false);
  const [showEmailPane, setShowEmailPane] = useState(false);

  useEffect(() => {
    if (view === "list" && !projectsLoaded) {
      const timer = setTimeout(() => {
        setProjectsLoaded(true);
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [view, projectsLoaded]);

  const handleProjectSelection = (project) => {
    setSelectedProject(project);
    setView("detail");
  };

  const handleBackToList = () => {
    setSelectedProject(null);
    setView("list");
  };

  const handleCertificateSelection = () => {
    setView("list");
    setProjectsLoaded(true);
  };

  const handleCreateForm = () => {
    setShowFormBuilder(true);
  };

  const handleCloseFormBuilder = () => {
    setShowFormBuilder(false);
  };

  const toggleEmailPane = () => setShowEmailPane(!showEmailPane);

  const handleCloseEmailPane = () => {
    setShowEmailPane(false);
  };

  const truncateText = (text) => {
    return text.length > 50 ? text.substring(0, 50) + "..." : text;
  };

  const sentProjects = [
    { id: 1, title: "Students' details", timestamp: "5:54AM", sentCount: 10, deliveredCount: 8 },
    { id: 2, title: "User Experience Database", timestamp: "5:54AM", sentCount: 15, deliveredCount: 12 },
    { id: 3, title: "Certificate of Achievement", timestamp: "5:54AM", sentCount: 5, deliveredCount: 5 },
    { id: 4, title: "Party Partyyy", timestamp: "5:54AM", sentCount: 20, deliveredCount: 18 },
    { id: 5, title: "Productivity Hacks...", timestamp: "5:54AM", sentCount: 8, deliveredCount: 6 },
  ];

  const recipientsList = [
    {
      id: 1,
      firstName: "Sodiq",
      lastName: "Tajudeen",
      email: "tajudeen1901@gmail.com",
      status: "Failed",
      sentDate: "Saturday, 18 Jan, 2025",
    },
    {
      id: 2,
      firstName: "Sodiq",
      lastName: "Tajudeen",
      email: "tajudeen1901@gmail.com",
      status: "Delivered",
      sentDate: "Saturday, 18 Jan, 2025",
    },
    {
      id: 3,
      firstName: "Sodiq",
      lastName: "Tajudeen",
      email: "tajudeen1901@gmail.com",
      status: "Delivered",
      sentDate: "Saturday, 18 Jan, 2025",
    },
    {
      id: 4,
      firstName: "Sodiq",
      lastName: "Tajudeen",
      email: "tajudeen1901@gmail.com",
      status: "In progress",
      sentDate: "Saturday, 18 Jan, 2025",
    },
    {
      id: 5,
      firstName: "Sodiq",
      lastName: "Tajudeen",
      email: "tajudeen1901@gmail.com",
      status: "Delivered",
      sentDate: "Saturday, 18 Jan, 2025",
    },
    {
      id: 6,
      firstName: "Sodiq",
      lastName: "Tajudeen",
      email: "tajudeen1901@gmail.com",
      status: "Delivered",
      sentDate: "Saturday, 18 Jan, 2025",
    },
    {
      id: 7,
      firstName: "Sodiq",
      lastName: "Tajudeen",
      email: "tajudeen1901@gmail.com",
      status: "Delivered",
      sentDate: "Saturday, 18 Jan, 2025",
    },
    {
      id: 8,
      firstName: "Sodiq",
      lastName: "Tajudeen",
      email: "tajudeen1901@gmail.com",
      status: "In progress",
      sentDate: "Saturday, 18 Jan, 2025",
    },
  ];

  const StatusBadge = ({ status }) => {
    const getStatusColor = () => {
      switch (status) {
        case "Delivered":
          return "bg-green-100 text-green-800";
        case "Failed":
          return "bg-red-100 text-red-800";
        case "In progress":
          return "bg-yellow-100 text-yellow-800";
        default:
          return "bg-gray-100 text-gray-800";
      }
    };

    return <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor()}`}>{status}</span>;
  };

  const renderContent = () => {
    switch (view) {
      case "empty":
        return (
          <div className="flex flex-col items-center justify-center mt-8 sm:mt-20 bg-[#F9FAFB] max-w-lg mx-auto p-4 sm:p-5 rounded-lg">
            <img src="/img/iconContainer5.png" alt="element" className="mb-4 sm:mb-6 w-16 sm:w-auto" />
            <h2 className="text-center mb-2 font-medium text-sm sm:text-base">No Projects Created Yet</h2>
            <p className="text-center mb-4 sm:mb-6 text-gray-500 text-xs sm:text-sm">
              It looks like you haven't created any projects yet. Start by creating a new project to manage your certificates and forms
            </p>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 w-full sm:w-auto">
              <button
                onClick={handleCertificateSelection}
                className="bg-[#5570F1] text-white px-3 sm:px-4 py-2 rounded-lg hover:bg-[#4058c7] transition flex items-center justify-center gap-1 sm:gap-2 text-xs sm:text-sm w-full sm:w-auto"
              >
                <img src="/img/button-icon-gen.png" alt="" className="w-3 h-3 sm:w-4 sm:h-4" />
                Generate Certificate
              </button>
              <button
                onClick={handleCreateForm}
                className="bg-white text-[#5570F1] px-3 sm:px-4 py-2 rounded-lg border border-[#5570F1] hover:bg-[#5570F1]/10 transition flex items-center justify-center gap-1 sm:gap-2 text-xs sm:text-sm w-full sm:w-auto"
              >
                <img src="/img/file-colored.png" alt="" className="w-3 h-3 sm:w-4 sm:h-4" />
                Create New Form
              </button>
            </div>
          </div>
        );

      case "list":
        return (
          <div className="border border-gray-100 rounded-lg overflow-hidden">
            {!projectsLoaded ? (
              <div className="flex justify-center items-center py-20">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#5570F1]"></div>
              </div>
            ) : (
              <table className="w-full">
                <tbody>
                  {sentProjects.map((project) => (
                    <tr
                      key={project.id}
                      className="border-b border-gray-100 hover:bg-gray-50 cursor-pointer"
                      onClick={() => handleProjectSelection(project)}
                    >
                      <td className="pl-4 py-4">
                        <input
                          type="checkbox"
                          className="rounded border-gray-300"
                          onClick={(e) => e.stopPropagation()}
                        />
                      </td>
                      <td className="py-4 w-1/4">
                        <span className="font-medium text-gray-800">{project.title}</span>
                      </td>
                      <td className="py-4 text-gray-500 text-sm w-2/3">{truncateText(project.title)}</td>
                      
                      <td className="py-4 pr-4 text-right text-gray-500 text-xs">{project.timestamp}</td>
                      <td className="py-4 pr-4 text-right">
                        <button
                          className="text-gray-400 hover:text-gray-600 cursor-pointer"
                          onClick={(e) => {
                            e.stopPropagation();
                            console.log("Delete project", project.id);
                          }}
                        >
                           <img src="/img/del.png" alt="" className="w-5 h-5 bg-black" />
                        </button>
                       
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        );

      case "detail":
        return (
          <>
            <div className="flex items-center mb-6">
              <button onClick={handleBackToList} className="flex items-center text-gray-500 hover:text-gray-700">
                <ChevronLeft className="w-4 h-4 mr-1" />
                <span>{selectedProject?.title}</span>
              </button>
            </div>

            <div className="mb-6">
              <ul className="flex border-b">
                <li className="mr-6">
                  <button className="pb-2 border-b-2 border-[#5570F1] text-[#5570F1] font-medium text-sm">
                    Recipient List
                  </button>
                </li>
                <li className="mr-6">
                  <button className="pb-2 text-gray-500 text-sm" onClick={() => setView("message")}>
                    Message Content / Send / Schedule
                  </button>
                </li>
              </ul>
            </div>

            <div className="border border-gray-100 rounded-lg overflow-hidden bg-white">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      S/N
                    </th>
                    <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      First Name
                    </th>
                    <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Last Name
                    </th>
                    <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Email Address
                    </th>
                    <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Sent Date
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {recipientsList.map((recipient, index) => (
                    <tr key={recipient.id} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-4 px-4 text-sm">{index + 1}</td>
                      <td className="py-4 px-4 text-sm font-medium text-blue-600">{recipient.firstName}</td>
                      <td className="py-4 px-4 text-sm font-medium text-blue-600">{recipient.lastName}</td>
                      <td className="py-4 px-4 text-sm">{recipient.email}</td>
                      <td className="py-4 px-4">
                        <StatusBadge status={recipient.status} />
                      </td>
                      <td className="py-4 px-4 text-sm text-gray-500">{recipient.sentDate}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div className="flex justify-center py-4 bg-white">
                <nav className="flex items-center space-x-1">
                  <button className="p-2 rounded-md text-gray-400 hover:text-gray-700">
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button className="px-3 py-1 rounded-md text-gray-500 hover:bg-gray-100">1</button>
                  <button className="px-3 py-1 rounded-md text-gray-500 hover:bg-gray-100">2</button>
                  <button className="px-3 py-1 rounded-md bg-blue-100 text-blue-700">3</button>
                  <button className="px-3 py-1 rounded-md text-gray-500 hover:bg-gray-100">4</button>
                  <button className="px-3 py-1 rounded-md text-gray-500 hover:bg-gray-100">5</button>
                  <button className="px-3 py-1 rounded-md text-gray-500 hover:bg-gray-100">6</button>
                  <button className="p-2 rounded-md text-gray-400 hover:text-gray-700">
                    <span className="transform rotate-180">
                      <ChevronLeft className="w-4 h-4" />
                    </span>
                  </button>
                </nav>
              </div>
            </div>
          </>
        );

      case "message":
        return <EmailCompositionPane recipients={recipientsList} onClose={handleCloseEmailPane} />;

      default:
        return null;
    }
  };

  if (showFormBuilder) {
    return <FormBuilder onClose={handleCloseFormBuilder} />;
  }

  return (
    <div className="container mx-auto bg-white md:p-6 py-8 md:py-12">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-lg font-medium text-gray-900">
          {view === "detail" || (view === "message" && selectedProject) ? selectedProject?.title : "Sent"}
        </h1>
        <button
          className="flex items-center gap-2 px-4 py-2 bg-[#5570F1] text-white rounded-lg text-sm"
          onClick={toggleEmailPane}
        >
          Send Bulk Email
          <img src="/img/arrow-forward.png" alt="" className="" />
        </button>

        
      </div>

      {(view === "list" || view === "detail") && (
        <div className="flex flex-col sm:flex-row justify-end mb-6 gap-4">
          <div className="relative w-full sm:w-64">
            <input
              type="text"
              placeholder="Search here..."
              className="w-full px-4 py-2 border border-gray-200 rounded-lg text-sm pl-10"
            />
            <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
          </div>
          <button className="flex items-center gap-1 px-4 py-2 text-sm">
            <img src="/img/filter-alt.png" alt="" className="" />
            Filter
          </button>
        </div>
      )}

      {showEmailPane ? (
        <EmailCompositionPane recipients={recipientsList} onClose={handleCloseEmailPane} />
      ) : (
        renderContent()
      )}
    </div>
  );
};

export default SentEmail;
