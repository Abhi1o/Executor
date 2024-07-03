import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from "../../Assets/Image/logo-svg.png";
import avatar from "../../Assets/Image/avatar.webp";
import "./NewSidebar.css"
interface NewSidebarProps {
  isOpen: boolean;
  onToggleSidebar: (isClosed: boolean) => void;
  toggleDarkMode: (isDarkMode: boolean) => void;
}

const NewSidebar: React.FC<NewSidebarProps> = ({ isOpen, onToggleSidebar, toggleDarkMode }) => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(location.pathname);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isSidebarClosed, setIsSidebarClosed] = useState(window.innerWidth < 768);

  const toggleSidebar = () => {
    setIsSidebarClosed(!isSidebarClosed);
    onToggleSidebar(!isSidebarClosed);
  };
  useEffect(() => {
    setActiveTab(location.pathname);
  }, [location.pathname]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsSidebarClosed(true);
        onToggleSidebar(true);
      } else {
        setIsSidebarClosed(false);
        onToggleSidebar(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [onToggleSidebar]);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setIsDarkMode(storedTheme === "dark");
      document.body.classList.toggle("dark", storedTheme === "dark");
    }
  }, []);

  const ontoggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    document.body.classList.toggle("dark", newMode);
    localStorage.setItem("theme", newMode ? "dark" : "light");
    toggleDarkMode(newMode);
  };

  const handleTabClick = (tab:string) => {
    setActiveTab(tab);
  };
  return (
    <>
      <div className={`sidebar ${isSidebarClosed ? "close" : ""}`}>
        <div className="sidebar-header ">
          {!isSidebarClosed && (
            <Link to="/chat" className="logo-link">
              <img src={logo} alt="Brainwave" className="logo" />
            </Link>
          )}
          <div className="bottom_content">
            <button
              className="menu-button expand_sidebar"
              onClick={toggleSidebar}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="menu-icon"
              >
                {!isSidebarClosed ? (
                  <path d="M19.5 2A2.5 2.5 0 0 1 22 4.5v15a2.5 2.5 0 0 1-2.5 2.5h-15A2.5 2.5 0 0 1 2 19.5v-15A2.5 2.5 0 0 1 4.5 2h15zM10 4H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"></path>
                ) : (
                  <path d="M19.5 2A2.5 2.5 0 0 1 22 4.5v15a2.5 2.5 0 0 1-2.5 2.5h-15A2.5 2.5 0 0 1 2 19.5v-15A2.5 2.5 0 0 1 4.5 2h15zM18 4h-4a2 2 0 0 0-2 2h0v12a2 2 0 0 0 2 2h0 4a2 2 0 0 0 2-2h0V6a2 2 0 0 0-2-2h0zM9.121 9.707a1 1 0 0 0-1.517 1.294h0L5 11a1 1 0 1 0 0 2h0l2.828-.001-.121.122a1 1 0 0 0 1.414 1.414h0l1.414-1.414c.271-.271.354-.659.25-1.002a1 1 0 0 0-.25-.998h0z"></path>
                )}
              </svg>
            </button>
            {/* <button className="menu-button collapse_sidebar" onClick={toggleSidebar}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="menu-icon"
            >
              
            </svg>
          </button> */}
          </div>

          {/* <div className="bottom_content">
          <div className="bottom " onClick={toggleSidebar}>
            
            <i className='bx bx-log-in'></i>
          </div>
          <div className="bottom collapse_sidebar" onClick={toggleSidebar}>
            
            <i className='bx bx-log-out'></i>
          </div>
        </div> */}
        </div>
        <div className="sidebar-content">
          <div className="false">
            <Link
              to="/home"
              className={`sidebar-item ${
                activeTab === "/home" ? "active" : ""
              }`}
              onClick={() => handleTabClick("/home")}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="sidebar-icon dashcolor"
              >
                <path d="M21 14a1 1 0 0 1 1 1v.839l-.031 1.356c-.032.395-.104.789-.296 1.167a3 3 0 0 1-1.311 1.311c-.378.193-.772.264-1.167.296-.375.031-.829.031-1.357.031H17a1 1 0 1 1 0-2h.8l1.232-.024c.272-.022.372-.06.422-.085a1 1 0 0 0 .437-.437c.025-.05.063-.15.085-.422.023-.283.024-.656.024-1.232V15a1 1 0 0 1 1-1zM3 14a1 1 0 0 1 1 1v1.196l.023.836c.022.272.06.372.085.422a1 1 0 0 0 .437.437c.049.025.15.063.422.085.283.023.656.024 1.232.024H7a1 1 0 1 1 0 2H6.161c-.527 0-.982 0-1.356-.031-.395-.032-.789-.104-1.167-.296a3 3 0 0 1-1.311-1.311c-.193-.378-.264-.772-.296-1.167-.024-.3-.029-.651-.03-1.049V15a1 1 0 0 1 1-1zm5-6a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0V9a1 1 0 0 1 1-1zm8 0a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0V9a1 1 0 0 1 1-1zm-4 0a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0V9a1 1 0 0 1 1-1zM7 4a1 1 0 1 1 0 2H5.804l-.836.023c-.272.022-.372.06-.422.085a1 1 0 0 0-.437.437c-.025.049-.063.15-.085.422-.017.213-.022.475-.023.836V9a1 1 0 1 1-2 0V7.854l.03-1.049c.032-.395.104-.789.296-1.167a3 3 0 0 1 1.311-1.311c.378-.193.772-.264 1.167-.296C5.18 4 5.634 4 6.161 4zm11.146 0l1.049.03c.395.032.789.104 1.167.296a3 3 0 0 1 1.311 1.311c.193.378.264.772.296 1.167.031.375.031.829.031 1.356V9a1 1 0 1 1-2 0v-.8l-.024-1.232c-.022-.272-.06-.372-.085-.422a1 1 0 0 0-.437-.437c-.05-.025-.15-.063-.422-.085A11.34 11.34 0 0 0 18.196 6H17a1 1 0 1 1 0-2z"></path>
              </svg>
              {!isSidebarClosed && (
                <span className="sidebar-item-name">Dashboard</span>
              )}
            </Link>
            <Link
              to="/chat"
              className={`sidebar-item ${
                activeTab === "/chat" ? "active" : ""
              }`}
              onClick={() => handleTabClick("/chat")}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="sidebar-icon chatcolor"
              >
                <path d="M16.257 3.04c.609.042 1.147.129 1.657.34a5 5 0 0 1 2.706 2.706c.211.51.299 1.048.34 1.657.04.592.04 1.319.04 2.221v.071l-.04 2.221c-.042.609-.129 1.147-.34 1.657a5 5 0 0 1-2.706 2.706c-.51.211-1.048.299-1.657.34-.592.04-1.319.04-2.221.04l-2.841.001-.392.019a1 1 0 0 0-.468.234c-.057.051-.116.121-.391.489l-1.505 1.945c-.371.437-.791.877-1.292 1.084A3 3 0 0 1 3.42 19.53c-.276-.466-.348-1.07-.383-1.643L3 16.107V9.665l.057-1.974c.06-.729.185-1.369.487-1.961A5 5 0 0 1 5.73 3.545c.592-.302 1.232-.428 1.961-.487.551-.045 1.202-.055 1.974-.057h5.015l1.577.04zM14.59 5H9.813l-1.959.051c-.605.049-.953.142-1.216.276a3 3 0 0 0-1.311 1.311c-.134.263-.226.611-.276 1.216-.041.505-.049 1.127-.051 1.959v6.483l.032 1.471c.016.268.039.456.065.589.023.112.042.155.043.157a1 1 0 0 0 1.237.412c.002-.002.043-.023.129-.1.101-.09.232-.227.406-.432l1.43-1.851c.208-.278.391-.523.617-.724a3 3 0 0 1 1.405-.703c.222-.045.449-.056.696-.058L14 15l2.121-.036c.507-.035.802-.099 1.027-.193a3 3 0 0 0 1.624-1.623c.093-.225.158-.521.193-1.027C19 11.605 19 10.946 19 10l-.036-2.121c-.035-.507-.099-.802-.193-1.027a3 3 0 0 0-1.623-1.624c-.225-.093-.521-.158-1.027-.193L14.59 5zM11 11a1 1 0 1 1 0 2h-3a1 1 0 1 1 0-2h3zm5-4a1 1 0 1 1 0 2h-8a1 1 0 1 1 0-2h8z"></path>
              </svg>
              {!isSidebarClosed && (
                <span className="sidebar-item-name">Chats</span>
              )}
            </Link>
            <Link
              to="/marketplace"
              className={`sidebar-item ${
                activeTab === "/marketplace" ? "active" : ""
              }`}
              onClick={() => handleTabClick("/marketplace")}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="sidebar-icon marketplacecolor"
              >
                <path d="M21 14a1 1 0 0 1 1 1h0v.839l-.031 1.356c-.032.395-.104.789-.296 1.167a3 3 0 0 1-1.311 1.311c-.378.193-.772.264-1.167.296-.375.031-.829.031-1.357.031h0H17a1 1 0 1 1 0-2h0 .8l1.232-.024c.272-.022.372-.06.422-.085a1 1 0 0 0 .437-.437c.025-.05.063-.15.085-.422.023-.283.024-.656.024-1.232h0V15a1 1 0 0 1 1-1zM3 14a1 1 0 0 1 1 1v1.196l.023.836c.022.272.06.372.085.422a1 1 0 0 0 .437.437c.049.025.15.063.422.085.283.023.656.024 1.232.024H7a1 1 0 1 1 0 2h-.839c-.527 0-.982 0-1.356-.031-.395-.032-.789-.104-1.167-.296a3 3 0 0 1-1.311-1.311c-.193-.378-.264-.772-.296-1.167-.024-.3-.029-.651-.03-1.049V15a1 1 0 0 1 1-1zm5-6a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0V9a1 1 0 0 1 1-1zm8 0a1 1 0 0 1 1 1h0v6a1 1 0 1 1-2 0h0V9a1 1 0 0 1 1-1zm-4 0a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0V9a1 1 0 0 1 1-1zM7 4a1 1 0 1 1 0 2h0-1.196l-.836.023c-.272.022-.372.06-.422.085a1 1 0 0 0-.437.437c-.025.049-.063.15-.085.422-.017.213-.022.475-.023.836V9a1 1 0 1 1-2 0h0V7.854l.03-1.049c.032-.395.104-.789.296-1.167a3 3 0 0 1 1.311-1.311c.378-.193.772-.264 1.167-.296C5.18 4 5.634 4 6.161 4zm11.146 0l1.049.03c.395.032.789.104 1.167.296a3 3 0 0 1 1.311 1.311c.193.378.264.772.296 1.167.031.375.031.829.031 1.356h0V9a1 1 0 1 1-2 0h0v-.8l-.024-1.232c-.022-.272-.06-.372-.085-.422a1 1 0 0 0-.437-.437c-.05-.025-.15-.063-.422-.085A11.34 11.34 0 0 0 18.196 6H17a1 1 0 1 1 0-2h0z"></path>
                 </svg>
              {!isSidebarClosed && (
                <span className="sidebar-item-name">Market Place</span>
              )}
            </Link>
            {/* <a href="/chat" className="sidebar-item">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="sidebar-icon searchcolor"
              >
                <path d="M10 3a7 7 0 0 1 7 7 6.97 6.97 0 0 1-1.393 4.191l5.1 5.102a1 1 0 0 1-1.414 1.414l-5.102-5.1A6.97 6.97 0 0 1 10 17a7 7 0 1 1 0-14zm0 2a5 5 0 1 0 0 10 5 5 0 1 0 0-10z"></path>
              </svg>
              <span className="sidebar-item-name">Search</span>
              <span className="shortcut">⌘ F</span>
            </a> */}
            <Link
              to="/profile"
              className={`sidebar-item ${
                activeTab === "/profile" ? "active" : ""
              }`}
              onClick={() => handleTabClick("/profile")}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="sidebar-icon profilecolor"
              >
                <path d="M22.207 15.293a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414l1.293 1.293 3.293-3.293a1 1 0 0 1 1.414 0zM21.5 12a1 1 0 1 1-2 0v-2h-16l.001 3.732.037 1.357c.036.438.101.663.18.819a2 2 0 0 0 .874.874c.156.08.381.145.819.18.45.037 1.032.038 1.889.038h4.2a1 1 0 1 1 0 2H7.259c-.805 0-1.469 0-2.011-.044-.562-.046-1.079-.145-1.564-.392a4 4 0 0 1-1.748-1.748c-.247-.485-.346-1.002-.392-1.564-.038-.464-.043-1.018-.044-1.674V8l.044-1.252c.046-.562.144-1.079.392-1.564a4 4 0 0 1 1.748-1.748c.485-.247 1.002-.346 1.564-.392.464-.038 1.018-.043 1.674-.044h8.819l2.01.044c.562.046 1.079.144 1.564.392a4 4 0 0 1 1.748 1.748c.247.485.346 1.002.392 1.564l.043 1.251L21.5 8v4zm-11 1a1 1 0 1 1 0 2h-4a1 1 0 1 1 0-2h4zm5.732-7.999H6.768l-1.357.037c-.438.036-.663.101-.819.18a2 2 0 0 0-.874.874c-.08.156-.145.381-.18.819L3.502 8h15.996l-.036-1.089c-.036-.438-.101-.663-.18-.819a2 2 0 0 0-.874-.874c-.156-.08-.381-.145-.819-.18-.35-.029-.78-.035-1.357-.037z"></path>
              </svg>
              {!isSidebarClosed && (
                <span className="sidebar-item-name">Profile</span>
              )}
            </Link>
            <Link
              to="/setting"
              className={`sidebar-item ${
                activeTab === "/setting" ? "active" : ""
              }`}
              onClick={() => handleTabClick("/setting")}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="sidebar-icon settingcolor"
              >
                <path d="M12.5 2a2.49 2.49 0 0 1 1.766.73l.052.053a2.49 2.49 0 0 1 .68 1.607l.001.021L15 4.5v.014c0 .041.025.077.062.093a.1.1 0 0 0 .11-.022l.01-.01.063-.061.015-.014a2.49 2.49 0 0 1 1.617-.656l.074-.001a2.49 2.49 0 0 1 1.765.732l.707.707a2.49 2.49 0 0 1 .732 1.765l-.001.074a2.49 2.49 0 0 1-.656 1.618l-.014.015-.061.063-.01.01c-.029.029-.037.072-.021.11s.052.062.093.062h.014l.088.002h.021a2.49 2.49 0 0 1 1.608.68l.053.052A2.49 2.49 0 0 1 22 11.5v1a2.49 2.49 0 0 1-.73 1.766l-.053.052a2.49 2.49 0 0 1-1.608.68l-.021.001L19.5 15h-.014a.1.1 0 0 0-.093.062c-.016.037-.007.081.021.11l.01.01.061.063.014.015a2.49 2.49 0 0 1 .656 1.617l.001.074a2.49 2.49 0 0 1-.732 1.765l-.707.707a2.49 2.49 0 0 1-1.765.732c-.025 0-.05 0-.074-.001a2.49 2.49 0 0 1-1.617-.656l-.015-.014-.063-.061-.01-.01c-.029-.029-.072-.037-.11-.021a.1.1 0 0 0-.062.093v.014l-.002.088-.001.021a2.49 2.49 0 0 1-.68 1.608l-.052.053A2.49 2.49 0 0 1 12.5 22h-1a2.49 2.49 0 0 1-1.766-.73l-.052-.053a2.49 2.49 0 0 1-.68-1.608v-.021L9 19.544h0v-.058c0-.041-.025-.077-.062-.093s-.081-.007-.11.021l-.01.01-.063.061-.015.014a2.49 2.49 0 0 1-1.618.656l-.074.001a2.49 2.49 0 0 1-1.765-.732l-.707-.707a2.49 2.49 0 0 1-.732-1.765l.001-.074a2.49 2.49 0 0 1 .656-1.617l.014-.015.061-.063.01-.01a.1.1 0 0 0 .022-.11c-.016-.038-.052-.062-.093-.062H4.5a2.57 2.57 0 0 1-.088-.002l-.021-.001a2.49 2.49 0 0 1-1.607-.68l-.053-.052A2.49 2.49 0 0 1 2 12.5v-1a2.49 2.49 0 0 1 .73-1.766l.053-.052a2.49 2.49 0 0 1 1.607-.68h.021L4.456 9h0 .058c.041 0 .077-.025.093-.062s.007-.081-.022-.11l-.01-.01-.061-.063-.014-.015a2.49 2.49 0 0 1-.656-1.618l-.001-.074a2.49 2.49 0 0 1 .732-1.765l.707-.707a2.49 2.49 0 0 1 1.765-.732l.074.001a2.49 2.49 0 0 1 1.618.656l.015.014.063.061.01.01c.029.029.072.037.11.022S9 4.555 9 4.514V4.5l.002-.088v-.021a2.49 2.49 0 0 1 .68-1.607l.052-.053A2.49 2.49 0 0 1 11.5 2h1zm0 2h-1a.5.5 0 0 0-.5.5v.014A2.1 2.1 0 0 1 7.414 6l-.01-.01a.5.5 0 0 0-.707 0l-.707.707a.5.5 0 0 0 0 .707l.01.01A2.1 2.1 0 0 1 4.514 11H4.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h.014A2.1 2.1 0 0 1 6 16.586l-.01.01a.5.5 0 0 0 0 .707l.707.707a.5.5 0 0 0 .707 0l.01-.01A2.1 2.1 0 0 1 11 19.486v.014a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-.014A2.1 2.1 0 0 1 16.586 18l.01.01a.5.5 0 0 0 .707 0l.707-.707a.5.5 0 0 0 0-.707l-.01-.01A2.1 2.1 0 0 1 19.486 13h.014a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-.014A2.1 2.1 0 0 1 18 7.414l.01-.01a.5.5 0 0 0 0-.707l-.707-.707a.5.5 0 0 0-.707 0l-.01.01A2.1 2.1 0 0 1 13 4.514V4.5a.5.5 0 0 0-.5-.5zM12 8a4 4 0 1 1 0 8 4 4 0 1 1 0-8zm0 2a2 2 0 1 0 0 4 2 2 0 1 0 0-4z"></path>
              </svg>
              {!isSidebarClosed && (
                <span className="sidebar-item-name">Settings</span>
              )}
            </Link>
          </div>
          <div className="sidebar-hr"></div>
          <div className="mb-auto pb-6">
            {/* <button className="sidebar-item">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="sidebar-icon"
              >
                <path d="M5.293 8.293a1 1 0 0 1 1.32-.083l.094.083L12 13.585l5.293-5.292a1 1 0 0 1 1.32-.083l.094.083a1 1 0 0 1 .083 1.32l-.083.094-6 6a1 1 0 0 1-1.32.083l-.094-.083-6-6a1 1 0 0 1 0-1.414z"></path>
              </svg>
              <span className="sidebar-item-name">Chat list</span>
            </button> */}
            {/* <div className="chat-list">
          <a href="/generation-socials-post" className="chat-item">
            <div className="chat-icon" style={{ backgroundColor: 'rgb(64, 68, 70)' }}></div>
            <span>Welcome</span>
            <div className="chat-count">48</div>
          </a>
          <a href="/" className="chat-item active">
            <div className="chat-icon" style={{ backgroundColor: 'rgb(142, 85, 234)' }}></div>
            <span>UI8 Production</span>
            <div className="chat-count">16</div>
          </a>
          <a href="/education-feedback" className="chat-item">
            <div className="chat-icon" style={{ backgroundColor: 'rgb(62, 144, 240)' }}></div>
            <span>Favorites</span>
            <div className="chat-count">8</div>
          </a>
          <a href="/code-generation" className="chat-item">
            <div className="chat-icon" style={{ backgroundColor: 'rgb(216, 76, 16)' }}></div>
            <span>Archived</span>
            <div className="chat-count">128</div>
          </a>
        </div> */}
          </div>
        </div>

        <div className="sidebar-footer">
          <div className="profile-sidenav-top">
            <div className="profile-card">
              <div className="profile-detail">
                <div className="relative w-10 h-10">
                  <div className="profile-image">
                    <img src={avatar} alt="Avatar" />
                    <div className="status-indicator"></div>
                  </div>
                </div>
                {!isSidebarClosed && (
                  <div className="profile-info">
                    <div className="profile-name">Tran Mau Tri Tam</div>
                    <div className="profile-email">tam@ui8.net</div>
                  </div>
                )}
                {/* {!isSidebarClosed && <div className="profile-status">Free</div>} */}
              </div>

              {/* {!isSidebarClosed && (
              <Link to="/pricing" className="upgrade-button">
                Upgrade to Pro
              </Link>
            )} */}
            </div>
          </div>

          <div className="theme-switcher">
            <button
              className={`theme-button ${isDarkMode ? "active" : ""}`}
              onClick={ontoggleDarkMode}
              id="Dark"
            ><svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="theme-icon"
              >
                <path d="M12 19a1 1 0 0 1 1 1h0v2a1 1 0 1 1-2 0h0v-2a1 1 0 0 1 1-1zm-4.979-2.017a1 1 0 0 1 .083 1.32l-.083.094-1.414 1.414a1 1 0 0 1-1.497-1.32l.083-.094 1.414-1.414a1 1 0 0 1 1.414 0zm11.372 0l1.414 1.414a1 1 0 1 1-1.414 1.414l-1.414-1.414a1 1 0 0 1 1.414-1.414zM12 6a6 6 0 1 1 0 12 6 6 0 1 1 0-12zm-8 5a1 1 0 1 1 0 2H2a1 1 0 1 1 0-2h2zm18 0a1 1 0 1 1 0 2h0-2a1 1 0 1 1 0-2h0zM5.513 4.11l.094.083 1.414 1.414a1 1 0 0 1-1.32 1.497l-.094-.083-1.414-1.414a1 1 0 0 1 1.32-1.497zm14.294.083a1 1 0 0 1 0 1.414l-1.414 1.414a1 1 0 0 1-1.414-1.414l1.414-1.414a1 1 0 0 1 1.414 0zM12 1a1 1 0 0 1 .993.883L13 2v2a1 1 0 0 1-1.993.117L11 4V2a1 1 0 0 1 1-1z"></path>
              </svg>
              {!isSidebarClosed && "Light"}
              
            </button>
            <button
              className={`theme-button ${!isDarkMode ? "active" : ""}`}
              onClick={ontoggleDarkMode}
              id="Light"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="theme-icon"
              >
                <path d="M7.744 1.089C3.672 2.93 1 6.991 1 11.538 1 17.868 6.132 23 12.462 23c4.547 0 8.608-2.672 10.449-6.744.38-.84-.483-1.703-1.323-1.323-1.213.548-2.532.836-3.894.836-5.226 0-9.462-4.236-9.462-9.462 0-1.362.287-2.682.836-3.894.38-.84-.483-1.703-1.323-1.323zM6.335 4.325l.078-.066-.003.018a11.53 11.53 0 0 0-.179 2.029c0 6.33 5.132 11.462 11.462 11.462l.411-.007c.41-.014.816-.051 1.218-.108l.418-.068-.065.079C17.914 19.737 15.303 21 12.462 21 7.236 21 3 16.764 3 11.538c0-2.841 1.263-5.452 3.335-7.213z"></path>
              </svg>
              {!isSidebarClosed && "Dark"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewSidebar;
