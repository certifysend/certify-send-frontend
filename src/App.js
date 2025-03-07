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
import PricingSection from "./pages/Pricing";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermOfService";
import SiteMap from "./pages/Sitemap";
import SuccessStories from "./pages/SuccessStories";
import HelpCenter from "./pages/HelpCenter";
import Blog from "./pages/Blog";
import HowToAutomate from "./pages/HowtoAutomate";
import OnboardingGuide from "./pages/OnboardingGuide";
import Feature from "./pages/Feature";


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
          <Route path="/pricing" element={<PricingSection />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="service-term" element={<TermsOfService />} />
          <Route path="site-map" element={<SiteMap />} />
          <Route path="success-stories" element={<SuccessStories />} />
          <Route path="/help" element={<HelpCenter />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<HowToAutomate />} />
          <Route path="/onboarding" element={<OnboardingGuide />} />
          <Route path="/features" element={<Feature />} />
          
        
        </Routes>
      
    </div>
  );
}

export default App;