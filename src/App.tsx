import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, useNavigationType, useLocation } from 'react-router-dom';
import OnboardingPage2 from "./pages/OnboardingPage3/OnboardingPage2";

import './App.css';

import ProfilePage from './pages/Profilepage/ProfilePage';
import NewSidebar from './Components/NewSidebar/NewSidebar';
import WelcomePage from './Components/WelcomePage/WelcomePage';
import Onboarding1 from './Components/Onboarding1/Onboarding1';
import Onboarding2 from './Components/Onboarding2/Onboarding2';
import Onboarding3 from './Components/Onboarding3/Onboarding3';
import UserInfoPage from './Components/UserInfo/UserInfoPage';
import WalletLogin from './Components/walletLogin/WalletLogin';
import Home from './Components/Main/Main';
import ChatWindow from './Components/NewChatWindows/ChatWindow';
import MarketPlace from './Components/MarketPlace/MarketPlace';
import NewChatWindows from './Components/NewChatWindows/NewChatWindows';

const App: React.FC = () => {
  const [isOnboardingComplete, setIsOnboardingComplete] = useState<boolean>(false);
  const [onboardingStep, setOnboardingStep] = useState<number>(1);
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  

  useEffect(() => {
    const completedOnboarding = localStorage.getItem('onboardingComplete');
    if (completedOnboarding) {
      setIsOnboardingComplete(true);
    }
  }, []);

  const completeOnboarding = () => {
    setIsOnboardingComplete(true);
    localStorage.setItem('onboardingComplete', 'true');
  };

  const handleNextStep = () => {
    setOnboardingStep((prevStep) => {
      if (prevStep < 3) {
        const nextStep = prevStep + 1;
        return nextStep;
      } else {
        return prevStep;
      }
    });
  };

  return (
    <Routes>
      {!isOnboardingComplete && (
        <>
          <Route path="/" element={<Navigate to={`/onboarding${onboardingStep}`} />} />
          <Route path="/login" element={<WalletLogin onNext={completeOnboarding} />} />
          <Route path="/onboarding1" element={<WelcomePage onNext={handleNextStep} />} />
          <Route path="/onboarding2" element={<Onboarding1 onNext={handleNextStep} />} />
          <Route path="/onboarding3" element={<Onboarding2 onNext={handleNextStep} />} />
          <Route path="/onboarding4" element={<Onboarding3 onNext={handleNextStep} />} />
          <Route path="/onboarding5" element={<UserInfoPage onNext={completeOnboarding} />} />
          <Route path="/home" element={<Home />} />
        </>
      )}
      {isOnboardingComplete && (
        <>
          <Route path="/pin" element={<OnboardingPage2 onNext={completeOnboarding} />} />
          <Route path="*" element={<MainApp />} />
        </>
      )}
    </Routes>
  );
};

const MainApp: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  const onToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark');
  };

  return (
    <div className="app-container">
      <NewSidebar isOpen={isSidebarOpen} onToggleSidebar={onToggleSidebar} toggleDarkMode={toggleDarkMode} />
      <div className={`main-content content ${isSidebarOpen ? 'expanded' : 'collapsed'} ${isDarkMode ? "dark" : "light"}`}>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/chat" element={<ChatWindow />} />
          <Route path="/marketplace" element={<MarketPlace />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/" element={<Navigate to="/home" />} />
        </Routes>
      </div>
    </div>
  );
};

const RootApp: React.FC = () => (
  <Router>
    <App />
  </Router>
);

export default RootApp;
