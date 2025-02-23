import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Signup from "./pages/Onboarding/Individual/Signup";
import VerifyEmail from "./pages/Onboarding/Individual/VerifyEmail";
import CreatePassword from "./pages/Onboarding/Individual/CreatePassword";
import CreatePasswordInstitution from "./pages/Onboarding/Institution/CreatePasswordInstitution";
import KYCPopup from "./pages/Onboarding/Individual/KYCPopup";
import KycForm from "./pages/Onboarding/Individual/KycForm";
import WelcomePopup from "./pages/Onboarding/Individual/WelcomePopup";
import InstitutionDetails from "./pages/Onboarding/Institution/InstitutionDetails";
import InstitutionEmailVerify from "./pages/Onboarding/Institution/InstitutionEmailVerify";
import InstitutionWelcomepopup from "./pages/Onboarding/Institution/InstitutionWelcomepopup";
import SignIn from "./components/auth/SignIn";
import ForgotPassword from "./components/auth/ForgotPassword";
import PasswordReset from "./components/auth/PasswordReset";
import PasswordResetSuccess from "./components/auth/PasswordResetSuccess";
import DashboardPage from "./pages/DashboardPage";


function App() {
  return (
    <div className="font-inter">
      
        <Routes>
        
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/create-password" element={<CreatePassword />} />
          <Route path="/verify-email" element={<VerifyEmail />} />
          <Route path="/kyc-popup" element={<KYCPopup />} />
          <Route path="/kyc-form" element={<KycForm />} />
          <Route path="/welcome-popup" element={<WelcomePopup />} />
          <Route path="/institution-details" element={<InstitutionDetails />} />
          <Route path="/institution-emailverify" element={<InstitutionEmailVerify />} />
          <Route path="/institution-welcomepopup" element={<InstitutionWelcomepopup />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/forgot-pass" element={<ForgotPassword />} />
          <Route path="/email-verify" element={<InstitutionEmailVerify />} />
          <Route path="/password-reset" element={<PasswordReset />} />
          <Route path="/password-reset-success" element={<PasswordResetSuccess />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/create-pass" element={<CreatePasswordInstitution />} />
        
        </Routes>
      
    </div>
  );
}

export default App;