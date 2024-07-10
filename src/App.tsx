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
import MarketPlace from './Components/MarketPlace/MarketPlace';
import ChatPage from './Components/NewChatWindows/UiChatWindowcopy';
import SolanaChatApp from './Components/NewChatWindows/solana';
import SendToken from './Components/NewChatWindows/solanasendtokend';
import WalletPage from './Components/WalletPage/WalletPage';
// import AgentComponent from './Components/NewChatWindows/AgentComponents';

interface Agent {
  id: string;
  name: string;
  type: string;
  action: string;
  icon: string;
}
const App: React.FC = () => {
  const [isOnboardingComplete, setIsOnboardingComplete] = useState<boolean>(false);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
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
    const loggedIn = localStorage.getItem('isAuthenticated');
    if (completedOnboarding) {
      setIsOnboardingComplete(true);
    }
    if (loggedIn === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const completeOnboarding = () => {
    setIsOnboardingComplete(true);
    setIsAuthenticated(true);
    localStorage.setItem('isAuthenticated', 'true');
    localStorage.setItem('onboardingComplete', 'true');
  };

  const handleNextStep = () => {
    setOnboardingStep((prevStep) => (prevStep < 3 ? prevStep + 1 : prevStep));
  };

  const handleLogin = () => {
    setIsAuthenticated(true);
    localStorage.setItem('isAuthenticated', 'true');
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('isAuthenticated');
  };

  return (
    <Routes>
      {!isOnboardingComplete && (
        <>
          <Route path="/" element={<Navigate to={`/onboarding${onboardingStep}`} />} />
          <Route path="/onboarding1" element={<WelcomePage onNext={handleNextStep} />} />
          <Route path="/onboarding2" element={<Onboarding1 onNext={handleNextStep} />} />
          <Route path="/onboarding3" element={<Onboarding2 onNext={handleNextStep} />} />
          <Route path="/onboarding4" element={<Onboarding3 onNext={handleNextStep} />} />
          <Route path="/onboarding5" element={<UserInfoPage onNext={completeOnboarding} />} />
          <Route path="*" element={<WelcomePage onNext={handleNextStep} />} />

          {/* <Route path="/home" element={<Home onLogout={handleLogout} />} /> */}
        </>
      )}
      {isOnboardingComplete && !isAuthenticated && (
        <>
          <Route path="/login" element={<WalletLogin onLogin={handleLogin} />} />
          <Route path="*" element={<WalletLogin onLogin={handleLogin} />} />
        </>
      )}
      {isOnboardingComplete && isAuthenticated && (
        <>
          {/* <Route path="/home" element={<Home onLogout={handleLogout} />} /> */}
          <Route path="/pin" element={<OnboardingPage2 onNext={completeOnboarding} />} />
          <Route path="*" element={<MainApp onLogout={handleLogout} />} />
        </>
      )}
    </Routes>
  );
};

const MainApp: React.FC<{ onLogout: () => void }> = ({ onLogout }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  // const [selectedAgents, setSelectedAgents] = useState<Agent[]>([]);

  // const handleSelectAgent = (agent: Agent) => {
  //   if (!selectedAgents.some(a => a.name === agent.name)) {
  //     setSelectedAgents([...selectedAgents, agent]);
  //   }
  // };

  const [selectedAgents, setSelectedAgents] = useState<Agent[]>(() => {
    const storedAgents = localStorage.getItem('selectedAgents');
    return storedAgents ? JSON.parse(storedAgents) : [];
  });

  const handleSelectAgent = (agent: Agent) => {
    setSelectedAgents(prevAgents => {
      const newAgents = [...prevAgents, agent];
      localStorage.setItem('selectedAgents', JSON.stringify(newAgents));
      return newAgents;
    });
  };
  
  const handleRemoveAgent = (agentId: string) => {
    setSelectedAgents(prevAgents => {
      const updatedAgents = prevAgents.filter(agent => agent.id !== agentId);
      localStorage.setItem('selectedAgents', JSON.stringify(updatedAgents));
      return updatedAgents;
    });
  };


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
          <Route path="/home" element={<Home onLogout={onLogout} />} />
          <Route path="/chat" element={<ChatPage selectedAgents={selectedAgents} removeAgent={handleRemoveAgent}
    />} />
          <Route path="/marketplace" element={<MarketPlace 
      onSelectAgent={handleSelectAgent}
      selectedAgents={selectedAgents} // Pass this prop
    />} />
          
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/wallet" element={<WalletPage/>} />
          <Route path="/*" element={<Navigate to="/home" />} />
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
