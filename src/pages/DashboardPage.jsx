import { useState } from "react";
import Sidebar from "../components/SideBar";
import Header from "../components/Header";
import Dashboard from "../components/Dashboard";
import Projects from "../components/Projects";
import Certificates from "../components/Certificates";
import Forms from "../components/Forms";
import BulkEmail from "../components/BulkEmail";
import SentEmail from "../components/SentEmail";

const DashboardPage = () => {
  const [activePage, setActivePage] = useState("Dashboard");

  return (
    <div className="flex font-inter">
        
      <Sidebar activePage={activePage} setActivePage={setActivePage} />
      <div className="flex-1 ml-36 p-6">
        <Header />
      <div className={`p-6 flex-1 transition-all ml-${activePage === "Dashboard" ? "64" : "16"}`}>
        {activePage === "Dashboard" && <Dashboard />}
        {activePage === "Projects" && <Projects />}
        {activePage === "Certificates" && <Certificates />}
        {activePage === "Forms" && <Forms />}
        {activePage === "Bulk Email" && <BulkEmail />}
        {activePage === "Sent" && <SentEmail />}
      </div>
    </div>
    </div>
  );
};

export default DashboardPage;
