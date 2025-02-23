import { useState } from "react";
import { LogOut } from "lucide-react";

const Sidebar = ({ setActivePage }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("Dashboard");

  const menuItems = [
    { name: "Dashboard", icon: "/img/home.png" },
    { name: "Projects", icon: "/img/elements.png" },
    { name: "Certificates", icon: "/img/badge.png" },
    { name: "Forms", icon: "/img/file.png" },
  ];

  const emailItems = [
    { name: "Bulk Email", icon: "/img/mail-add.png" },
    { name: "Sent", icon: "/img/send-alt.png" },
  ];

  return (
    <>
      <div className="md:hidden fixed top-4 left-4 z-50">
        <button onClick={() => setIsMobileSidebarOpen(true)}>
          <img src="/img/menu.png" alt="Menu" className="w-8" />
        </button>
      </div>
      <div
        className={`bg-gray-50 h-screen p-4 transition-all duration-300 fixed z-50 flex flex-col justify-between ${
          isCollapsed ? "w-16" : "w-64"
        } 
        ${isMobileSidebarOpen ? "left-0" : "-left-64"} md:left-0`}
      >
        <div>
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="absolute top-4 right-4 p-2 hidden md:block"
          >
            <img
              src="/img/collapse.png"
              alt="Collapse"
              className="w-6 transform transition-transform duration-300"
              style={{ transform: isCollapsed ? "rotate(180deg)" : "rotate(0deg)" }}
            />
          </button>

         
          <button
            onClick={() => setIsMobileSidebarOpen(false)}
            className="absolute top-4 right-4 p-2 md:hidden"
          >
            <img src="/img/close.png" alt="Close" className="w-6" />
          </button>

          
          {!isCollapsed && (
            <div className="mb-6 flex justify-center">
              <img src="/img/Frame 53038.png" alt="Logo" className="w-40" />
            </div>
          )}

         
          <ul className="mt-12 space-y-4">
            {menuItems.map((item) => (
              <li
                key={item.name}
                className={`flex items-center space-x-2 cursor-pointer p-2 rounded 
                  ${activeItem === item.name ? "bg-[#F2F4FF]" : "hover:bg-gray-200"}`}
                onClick={() => {
                  setActiveItem(item.name);
                  setActivePage(item.name);
                  setIsMobileSidebarOpen(false); 
                }}
              >
                <img src={item.icon} alt={item.name} className="w-6" />
                {!isCollapsed && <span>{item.name}</span>}
              </li>
            ))}
          </ul>

          {!isCollapsed && <p className="mt-6 mb-2 text-gray-500 text-sm">Email Category</p>}

          <ul className="space-y-4">
            {emailItems.map((item) => (
              <li
                key={item.name}
                className={`flex items-center space-x-2 cursor-pointer p-2 rounded 
                  ${activeItem === item.name ? "bg-[#F2F4FF]" : "hover:bg-gray-200"}`}
                onClick={() => {
                  setActiveItem(item.name);
                  setActivePage(item.name);
                  setIsMobileSidebarOpen(false); 
                }}
              >
                <img src={item.icon} alt={item.name} className="w-6" />
                {!isCollapsed && <span>{item.name}</span>}
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-4">
          <div className="flex items-center space-x-2 cursor-pointer hover:bg-gray-200 p-2 rounded">
            <img src="/img/button-icon (1).png" alt="Help Center" className="w-6" />
            {!isCollapsed && <span>Help Center</span>}
          </div>
          <div className="bg-[#F2F4FF] p-4">
          <button className="flex items-center space-x-2  rounded w-full">
            <img src="/img/gift.png" alt="Upgrade" className="w-6" />
            {!isCollapsed && <span>Free Gift Awaits You!</span>}
            
          </button>
          <span className="text-[#5570F1]">Upgrade your account</span>
          </div>
          <div className="flex items-center justify-between p-2 rounded">
            <div className="flex items-center space-x-2">
              <img src="/img/Avatars.png" alt="Profile" className="w-8 h-8 rounded-full" />
              {!isCollapsed && (
                <div>
                  <p className="text-sm font-semibold">Sodiq Designer</p>
                  <p className="text-xs text-gray-500">sodiq@certifysend</p>
                </div>
              )}
            </div>
            {!isCollapsed && (
              <button>
                <div className="w-10 h-10 mx-auto">
                  <LogOut className="w-8 h-8 text-gray-400" />
                </div>
              </button>
            )}
          </div>
        </div>
      </div>

     
      {isMobileSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsMobileSidebarOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Sidebar;