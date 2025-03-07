import { useState, useEffect } from "react";
import { LogOut } from "lucide-react";

const Sidebar = ({ activePage, setActivePage }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsCollapsed(false);
        setIsMobileSidebarOpen(false);
      }
    };
    
    handleResize();
    
    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  useEffect(() => {
    const handleClickOutside = (e) => {
      const sidebar = document.getElementById('sidebar');
      if (isMobileSidebarOpen && sidebar && !sidebar.contains(e.target) && window.innerWidth < 768) {
        setIsMobileSidebarOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMobileSidebarOpen]);

  const menuItems = [
    { name: "Dashboard", icon: "/img/home.png" },
    { name: "Projects", icon: "/img/elements.png" },
    { name: "Certificates", icon: "/img/badge.png" },
    { name: "Forms", icon: "/img/file.png" },
    { name: "Bulk Email", icon: "/img/mail-add.png" },
    { name: "Sent", icon: "/img/send-alt.png" },
  ];

  return (
    <>
      <div className="md:hidden fixed top-4 left-4 z-50">
        <button 
          className="p-2 rounded-md bg-white shadow-md"
          onClick={() => setIsMobileSidebarOpen(true)}
          aria-label="Open menu"
        >
          <img src="/img/carbon_menu.png" alt="Menu" className="w-6 h-6" />
        </button>
      </div>

      {isMobileSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden transition-opacity duration-300"
          onClick={() => setIsMobileSidebarOpen(false)}
        ></div>
      )}
      <div
        id="sidebar"
        className={`bg-gray-50 h-screen flex flex-col justify-between fixed z-50 transition-all duration-300 ease-in-out
          ${isCollapsed ? 'w-16' : 'w-64'} 
          ${isMobileSidebarOpen ? 'left-0' : '-left-full md:left-0'}
          shadow-lg md:shadow-none overflow-y-auto`}
      >
        <div className="flex flex-col h-full">
         
          <div className="flex items-center justify-between p-4 border-b border-gray-100">
            {!isCollapsed ? (
              <div className="flex justify-center w-full">
                <img src="/img/Frame 53038.png" alt="Logo" className="h-8 md:h-10" />
              </div>
            ) : (
              <div className="mx-auto">
                <img src="/img/Frame 53038.png" alt="Logo" className="h-8 w-8 object-contain" />
              </div>
            )}
            
            <button
              onClick={() => setIsCollapsed(!isCollapsed)}
              className="absolute top-4 right-2 p-1 hidden md:block"
              aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
            >
              <img
                src="/img/collapse.png"
                alt="Toggle sidebar"
                className="w-5 h-5 transform transition-transform duration-300"
                style={{ transform: isCollapsed ? "rotate(180deg)" : "rotate(0deg)" }}
              />
            </button>

            <button
              onClick={() => setIsMobileSidebarOpen(false)}
              className="absolute top-4 right-4 p-1 md:hidden"
              aria-label="Close menu"
            >
              <img src="/img/collapse.png" alt="Close" className="w-5 h-5" />
            </button>
          </div>

          <nav className="flex-grow mt-6 px-2">
            <ul className="space-y-1">
              {menuItems.map((item) => (
                <li key={item.name}>
                  <button
                    className={`w-full flex items-center p-3 rounded-lg transition-colors duration-200
                      ${activePage === item.name 
                        ? "bg-[#F2F4FF] text-[#5570F1]" 
                        : "text-gray-700 hover:bg-gray-200"
                      } ${isCollapsed ? "justify-center" : "justify-start"}`}
                    onClick={() => {
                      setActivePage(item.name);
                      setIsMobileSidebarOpen(false);
                    }}
                    aria-current={activePage === item.name ? "page" : undefined}
                  >
                    <img src={item.icon} alt="" className="w-5 h-5" />
                    {!isCollapsed && (
                      <span className="ml-3 font-medium text-sm">{item.name}</span>
                    )}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="p-2 space-y-2 border-t border-gray-100">
          <button 
            className={`w-full flex items-center p-2 rounded-lg hover:bg-gray-200 transition-colors
              ${isCollapsed ? "justify-center" : "justify-start"}`}
          >
            <img src="/img/button-icon (1).png" alt="" className="w-5 h-5" />
            {!isCollapsed && <span className="ml-3 text-sm">Help Center</span>}
          </button>

          <div className={`bg-[#F2F4FF] rounded-lg p-3 ${isCollapsed ? "text-center" : ""}`}>
            <div className="flex items-center space-x-2 mb-1">
              <img src="/img/gift.png" alt="" className="w-5 h-5" />
              {!isCollapsed && <span className="text-sm">Free Gift Awaits You!</span>}
            </div>
            {!isCollapsed && (
              <span className="text-xs text-[#5570F1] font-medium">Upgrade your account</span>
            )}
          </div>

          <div className="flex items-center justify-between py-2 px-1">
            <div className="flex items-center space-x-2">
              <img 
                src="/img/Avatars.png" 
                alt="Profile" 
                className="w-8 h-8 rounded-full object-cover border border-gray-200" 
              />
              {!isCollapsed && (
                <div className="flex flex-col">
                  <p className="text-sm font-medium line-clamp-1">Sodiq Designer</p>
                  <p className="text-xs text-gray-500 line-clamp-1">sodiq@certifysend</p>
                </div>
              )}
            </div>
            
            <button 
              className={`p-1 rounded-full hover:bg-gray-200 ${isCollapsed ? "hidden" : ""}`}
              aria-label="Logout"
            >
              <LogOut className="w-5 h-5 text-gray-500" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;