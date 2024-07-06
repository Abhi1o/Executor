import React, { useState, useEffect, useRef } from "react";
import bannerAI from "../../Assets/Image/Ai_Server-removebg-preview.png";
import ai_brain from "../../Assets/Image/02_ai_brain_chip-removebg-preview.png";
import ConsortiumI from "../../Assets/Image/Consortium_Blockchain-removebg-preview.png";
import Blockchain__1 from "../../Assets/Image/Blockchain__1_-removebg-preview.png";
import Ai from "../../Assets/Image/Ai-removebg-preview.png";
import Ai_Processor from "../../Assets/Image/Ai_Processor-removebg-preview.png";
import Neural_Network from "../../Assets/Image/Neural_Network-removebg-preview.png";
// import Blockchain__4 from "../../Assets/Image/Blockchain__4_-removebg-preview.png";
// import Ethereum from "../../Assets/Image/Blockchain__2_-removebg-preview.png";
import profile from "../../Assets/Image/Young_Person-removebg-preview.png";
import { SiCardano } from "react-icons/si";
import { TbDots } from "react-icons/tb";
import { LuSendToBack } from "react-icons/lu";
import { TbCreditCardRefund } from "react-icons/tb";
import { PiInvoiceLight } from "react-icons/pi";
import { TbTableOptions } from "react-icons/tb";
// import { BorderBeam } from "../../magicui/border-beam";

const Main: React.FC = () => {
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  // Get wallet name from local storage
  const [walletName, setWalletName] = useState("");

  // const [isOpen, setIsOpen] = useState(false);

  //   const toggleNotifications = () => {
  //     setIsOpen(!isOpen);
  //   };

  const [showPopup, setShowPopup] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        popupRef.current &&
        !popupRef.current.contains(event.target as Node)
      ) {
        setShowPopup(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [popupRef]);

  useEffect(() => {
    const storedWalletName = localStorage.getItem("walletname");
    if (storedWalletName) {
      setWalletName(storedWalletName);
    }
  }, []);

  const notifications = [
    {
      id: 5,
      name: "Wilfred",
      message: "invited you to Photo retouch",
      time: "1 mins. ago",
      category: "UI8 Production",
      online: true,
      imgSrc: profile,
    },
    {
      id: 2,
      name: "Pinkie",
      message: "Agent is ready",
      time: "5 mins. ago",
      category: "",
      online: true,
      imgSrc: profile,
    },
    {
      id: 3,
      name: "Clementina",
      message: "Sended to cos0x26... ",
      time: "20 mins. ago",
      category: "",
      online: true,
      imgSrc: profile,
    },
    {
      id: 4,
      name: "Elmira",
      message: "Revived $500",
      time: "56 mins. ago",
      category: "",
      online: true,
      imgSrc: profile,
    },
    {
      id: 1,
      name: "Dexter",
      message: "Sended you $1000",
      time: "2 hours ago",
      category: "",
      online: true,
      imgSrc: profile,
    },
  ];

  // const toggleProfileMenu = () => {
  //   setProfileMenuOpen(!profileMenuOpen);
  // };
  return (
    <>
      <div className="px-6 pt-6">
        <header className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Dashboard</h2>
          <div className="flex items-center space-x-4">
            <button>
              <i className="fas fa-search"></i>
            </button>
            {/*notification */}
            <div className="relative">
              <button
                onClick={() => setShowPopup(!showPopup)}
                className="p-2 rounded-full hover:bg-gray-200 focus:outline-none"
              >
                <svg
                  className="inline-block w-6 h-6 fill-n-4 transition-colors group-hover:fill-primary-1 ui-open:fill-primary-1"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M11 3a1 1 0 0 1 .117 1.993L11 5l-3.664.001-.752.009-.299.008-.254.012-.31.025-.167.022-.141.027-.121.032-.106.038-.096.044a2 2 0 0 0-.874.874l-.048.106-.041.119-.034.139-.028.166-.022.2-.024.38-.01.317-.01.818v8.327l.01.818.01.317.015.265.009.115.022.2.028.166.034.139.041.119.048.106a2 2 0 0 0 .874.874l.106.048.119.041.139.034.166.028.2.022.38.024.317.01.818.01h8.327l.818-.01.317-.01.265-.015.115-.009.2-.022.166-.028.139-.034.119-.041.106-.048a2 2 0 0 0 .874-.874l.044-.096.02-.051.035-.112.015-.063.027-.141.022-.167.025-.31.012-.254.014-.647L19 16.2V13a1 1 0 0 1 1.993-.117L21 13l-.003 3.985-.006.443-.01.387-.016.338-.022.296-.03.26c-.046.327-.114.577-.218.825l-.084.186-.047.095a4 4 0 0 1-1.748 1.748l-.189.091c-.279.126-.551.207-.918.258l-.26.03-.296.022-.338.016-.387.01-.443.006L15.2 22l-8.185-.003-.443-.006-.387-.01-.338-.016-.296-.022-.26-.03c-.327-.046-.577-.114-.825-.218l-.186-.084-.095-.047a4 4 0 0 1-1.748-1.748l-.091-.189c-.126-.279-.207-.551-.258-.918l-.03-.26-.022-.296-.016-.338-.01-.387-.006-.443L2 16.2l.003-8.185.006-.443.01-.387.016-.338.022-.296.03-.26c.046-.327.114-.577.218-.825l.084-.186.047-.095a4 4 0 0 1 1.748-1.748l.189-.091a3.18 3.18 0 0 1 .918-.258l.26-.03.296-.022.338-.016.387-.01.443-.006L7.8 3H11zm9.828.172a4 4 0 0 1-5.657 5.657 4 4 0 0 1 5.657-5.657zm-4.243 1.414a2 2 0 0 0 2.828 2.828 2 2 0 0 0 .117-2.701l-.117-.127-.127-.117a2 2 0 0 0-2.701.117z"></path>
                </svg>
                <div className="absolute top-2.5 right-2.5 w-2 h-2 rounded-full bg-red-500 bg-accent-1"></div>
              </button>
              {showPopup && (
                <div
                  ref={popupRef}
                  className="absolute -right-3 mt-2 w-80 bg-white shadow-lg rounded-lg p-4 z-10"
                >
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold">Notifications</h2>
                    <button className="p-2 rounded-full hover:bg-gray-200 focus:outline-none">
                      <svg
                        className="inline-block w-6 h-6 fill-n-4 transition-colors group-hover:fill-primary-1"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        role="none"
                      >
                        <path
                          d="M12.5 2a2.49 2.49 0 0 1 1.766.73l.052.053a2.49 2.49 0 0 1 .68 1.607l.001.021L15 4.5v.014c0 .041.025.077.062.093a.1.1 0 0 0 .11-.022l.01-.01.063-.061.015-.014a2.49 2.49 0 0 1 1.617-.656l.074-.001a2.49 2.49 0 0 1 1.765.732l.707.707a2.49 2.49 0 0 1 .732 1.765l-.001.074a2.49 2.49 0 0 1-.656 1.618l-.014.015-.061.063-.01.01c-.029.029-.037.072-.021.11s.052.062.093.062h.014l.088.002h.021a2.49 2.49 0 0 1 1.608.68l.053.052A2.49 2.49 0 0 1 22 11.5v1a2.49 2.49 0 0 1-.73 1.766l-.053.052a2.49 2.49 0 0 1-1.608.68l-.021.001L19.5 15h-.014a.1.1 0 0 0-.093.062c-.016.037-.007.081.021.11l.01.01.061.063.014.015a2.49 2.49 0 0 1 .656 1.617l.001.074a2.49 2.49 0 0 1-.732 1.765l-.707.707a2.49 2.49 0 0 1-1.765.732c-.025 0-.05 0-.074-.001a2.49 2.49 0 0 1-1.617-.656l-.015-.014-.063-.061-.01-.01c-.029-.029-.072-.037-.11-.021a.1.1 0 0 0-.062.093v.014l-.002.088-.001.021a2.49 2.49 0 0 1-.68 1.608l-.052.053A2.49 2.49 0 0 1 12.5 22h-1a2.49 2.49 0 0 1-1.766-.73l-.052-.053a2.49 2.49 0 0 1-.68-1.608v-.021L9 19.544h0v-.058c0-.041-.025-.077-.062-.093s-.081-.007-.11.021l-.01.01-.063.061-.015.014a2.49 2.49 0 0 1-1.618.656l-.074.001a2.49 2.49 0 0 1-1.765-.732l-.707-.707a2.49 2.49 0 0 1-.732-1.765l.001-.074a2.49 2.49 0 0 1 .656-1.617l.014-.015.061-.063.01-.01a.1.1 0 0 0 .022-.11c-.016-.038-.052-.062-.093-.062H4.5a2.57 2.57 0 0 1-.088-.002l-.021-.001a2.49 2.49 0 0 1-1.607-.68l-.053-.052A2.49 2.49 0 0 1 2 12.5v-1a2.49 2.49 0 0 1 .73-1.766l.053-.052a2.49 2.49 0 0 1 1.607-.68h.021L4.456 9h0 .058c.041 0 .077-.025.093-.062s.007-.081-.022-.11l-.01-.01-.061-.063-.014-.015a2.49 2.49 0 0 1-.656-1.618l-.001-.074a2.49 2.49 0 0 1 .732-1.765l.707-.707a2.49 2.49 0 0 1 1.765-.732l.074.001a2.49 2.49 0 0 1 1.618.656l.015.014.063.061.01.01c.029.029.072.037.11.022S9 4.555 9 4.514V4.5l.002-.088v-.021a2.49 2.49 0 0 1 .68-1.607l.052-.053A2.49 2.49 0 0 1 11.5 2h1zm0 2h-1a.5.5 0 0 0-.5.5v.014A2.1 2.1 0 0 1 7.414 6l-.01-.01a.5.5 0 0 0-.707 0l-.707.707a.5.5 0 0 0 0 .707l.01.01A2.1 2.1 0 0 1 4.514 11H4.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h.014A2.1 2.1 0 0 1 6 16.586l-.01.01a.5.5 0 0 0 0 .707l.707.707a.5.5 0 0 0 .707 0l.01-.01A2.1 2.1 0 0 1 11 19.486v.014a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-.014A2.1 2.1 0 0 1 16.586 18l.01.01a.5.5 0 0 0 .707 0l.707-.707a.5.5 0 0 0 0-.707l-.01-.01A2.1 2.1 0 0 1 19.486 13h.014a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-.014A2.1 2.1 0 0 1 18 7.414l.01-.01a.5.5 0 0 0 0-.707l-.707-.707a.5.5 0 0 0-.707 0l-.01.01A2.1 2.1 0 0 1 13 4.514V4.5a.5.5 0 0 0-.5-.5zM12 8a4 4 0 1 1 0 8 4 4 0 1 1 0-8zm0 2a2 2 0 1 0 0 4 2 2 0 1 0 0-4z"
                          role="none"
                        ></path>
                      </svg>
                    </button>
                  </div>
                  {notifications.map((notification) => (
                    <div
                      key={notification.id}
                      className="flex items-start p-2 hover:bg-gray-100 rounded-lg mb-2"
                    >
                      <div className="relative">
                        <img
                          src={notification.imgSrc}
                          alt={notification.name}
                          className="w-10 h-10 rounded-full"
                        />
                        {notification.online && (
                          <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
                        )}
                      </div>
                      <div className="ml-4 flex-1">
                        <p className="text-sm font-medium">
                          {notification.name}{" "}
                          <span className="font-normal">
                            {notification.message}
                          </span>
                        </p>
                        <p className="text-xs text-gray-500">
                          {notification.time} · {notification.category}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="relative">
              <button onClick={() => setProfileMenuOpen(!profileMenuOpen)}>
                <img
                  src={profile}
                  alt="Profile"
                  className="w-8 h-8 rounded-full aspect-square"
                />
              </button>
              {profileMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg">
                  <div className="p-4">
                    <img
                      src={profile}
                      alt="Profile"
                      className="w-12 h-12 rounded-full mb-2"
                    />
                    <p className="font-bold">{walletName}</p>
                  </div>
                  <ul>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      Log out
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      Settings
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </header>
      </div>
      <div className="flex">
        <div className="w-4/6 p-6">
          {/* Banner */}
          <div className="relative bg-gradient-to-r from-sky-500 to-indigo-500 text-white p-10 rounded-2xl flex justify-between items-center mb-9 pb-12">
            <div>
              <h3 className="text-3xl font-bold pb-3">Diverse AI Agents</h3>
              <p className="text-sm text-slate-200">
                Agents for Seamless Blockchain Operations
              </p>
            </div>
            <img
              src={ConsortiumI}
              alt="Deal"
              className="w-52 h-52  absolute -bottom-14 right-10"
            />
          </div>

          {/* Choices */}
          <div className="flex space-x-4 mb-8 mt-4 pt-5">
            <button className="bg-yellow-200 py-2 px-4 rounded-full">
              Blockchain 🔗
            </button>
            <button className="bg-red-200 py-2 px-4 rounded-full">
              ChatAI 🤖
            </button>
            <button className="bg-green-200 py-2 px-4 rounded-full">
              Crypto 🪙
            </button>
            <button className="bg-blue-200 py-2 px-4 rounded-full">
              Transaction 💸
            </button>
            <button className="bg-teal-200 py-2 px-4 rounded-full">
              Cosmos 🔮
            </button>
          </div>

          {/* Nearby Restaurants */}
          <section className="mb-10">
            <div className="flex justify-between items-center mb-6">
              <h4 className="text-xl font-bold">Trending</h4>
              <button className="text-blue-500">View All</button>
            </div>
            <div className="grid  grid-cols-4 gap-4 grid-flow-col ">
              <div className="bg-white p-4 rounded-lg shadow transition-transform transform hover:scale-105">
                <img
                  src={ai_brain}
                  alt="Restaurant"
                  className="w-full h-36 rounded-lg mb-4"
                />
                <h5 className="font-bold">Perplexica</h5>
                <p className="text-sm text-gray-500">4.5 Stars</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow transition-transform transform hover:scale-105">
                <img
                  src={bannerAI}
                  alt="Restaurant"
                  className="w-full h-36 rounded-lg mb-4"
                />
                <h5 className="font-bold">Cosmos </h5>
                <p className="text-sm text-gray-500">4.6 Stars</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow transition-transform transform hover:scale-105">
                <img
                  src={Blockchain__1}
                  alt="Restaurant"
                  className="w-full h-36 rounded-lg mb-4"
                />
                <h5 className="font-bold">EchoBot</h5>
                <p className="text-sm text-gray-500">4.0 Stars</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow transition-transform transform hover:scale-105">
                <img
                  src={Ai_Processor}
                  alt="Restaurant"
                  className="w-full h-32 rounded-lg mb-4"
                />
                <h5 className="font-bold">ChatterBot</h5>
                <p className="text-sm text-gray-500">4.0 Stars</p>
              </div>
            </div>
          </section>

          {/* Most Popular */}
          {/* <section className="mb-6">
          <div className="flex justify-between items-center mb-4">
            <h4 className="text-lg font-bold">Most Popular</h4>
            <button className="text-blue-500">View All</button>
          </div>
          <div className="flex space-x-4">
            <div className="bg-white p-4 rounded-lg shadow">
              <img src={Ai} alt="Popular Dish" className="w-full h-24 rounded-lg mb-4" />
              <h5 className="font-bold">ChatMatic</h5>
              <p className="text-sm text-gray-500">4.2 Stars</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <img src={Ai_Processor} alt="Popular Dish" className="w-full h-24 rounded-lg mb-4" />
              <h5 className="font-bold">EchoBot</h5>
              <p className="text-sm text-gray-500">4.2 Stars</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <img src={Neural_Network} alt="Popular Dish" className="w-full h-24 rounded-lg mb-4" />
              <h5 className="font-bold">OmniChat</h5>
              <p className="text-sm text-gray-500">4.2 Stars</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <img src={Blockchain__4} alt="Popular Dish" className="w-full h-24 rounded-lg mb-4" />
              <h5 className="font-bold">SynthAI</h5>
              <p className="text-sm text-gray-500">4.2 Stars</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <img src={Ethereum} alt="Popular Dish" className="w-full h-24 rounded-lg mb-4" />
              <h5 className="font-bold">AssistBot</h5>
              <p className="text-sm text-gray-500">4.2 Stars</p>
            </div>
          </div>
        </section> */}
        </div>

        {/* Right Section */}
        <div className="w-2/6 p-6">
          <h4 className="text-lg font-bold mb-4">Wallet</h4>
          <div className="bg-white p-6 rounded-lg shadow mb-6">
            <div className="shadow-2xl">
              <div className="bg-gradient-to-r from-sky-500 to-indigo-500 h-14 rounded-tl-2xl rounded-tr-2xl flex justify-between p-4 items-center">
                <SiCardano color="white" fontSize="20px" />
                <TbDots color="white" fontSize="20px" />
              </div>
              <div className="bg-gray-700 p-4 rounded-br-2xl rounded-bl-2xl flex flex-col  justify-between mb-4">
                <div className=" mb-5">
                  <p className="text-white font-bold text-lg">
                    5598 6524 6786 9879
                  </p>
                </div>

                <div className="flex justify-between items-center">
                  {" "}
                  <p className="text-sm text-gray-200">Agent AI</p>
                  <img src={Ai} alt="Card" className="w-16 h-16" />
                </div>
              </div>
            </div>

            <div className="flex justify-between mb-2">
              <button className="bg-white-500 border-violet-500 border-2 text-slate-400 p-2 rounded-lg font-light">
                <LuSendToBack fontSize="29px" color="violet" />
                Send
              </button>
              <button className="bg-white-500 border-green-500 border-2 text-slate-400 p-2 rounded-lg font-light">
                <TbCreditCardRefund fontSize="29px" color="green" />
                Receive
              </button>
              <button className="bg-white-500 border-yellow-500 border-2 text-slate-400 p-2 rounded-lg font-light">
                <PiInvoiceLight fontSize="29px" color="yellow" />
                Invoice
              </button>
              <button className="bg-white-500 border-sky-500 border-2 text-slate-400 p-2 rounded-lg font-light">
                <TbTableOptions fontSize="29px" color="blue" />
                Options
              </button>
            </div>
          </div>

          {/* Recommended Section */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h4 className="text-lg font-bold mb-4">Recommended</h4>
            <div className="flex items-center mb-4">
              <img
                src={Neural_Network}
                alt="Recommended"
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <p className="font-bold">AIden</p>
                <p className="text-sm text-gray-500">Your AI Companion</p>
                <p className="text-xs text-gray-400">4.6 Stars</p>
              </div>
            </div>
            <div className="flex items-center mb-4">
              <img
                src={Blockchain__1}
                alt="Recommended"
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <p className="font-bold">TalkBuddy</p>
                <p className="text-sm text-gray-500">Your Talkative Friend</p>
                <p className="text-xs text-gray-400">4.3 Stars</p>
              </div>
            </div>
            <div className="flex items-center mb-4">
              <img
                src={Ai_Processor}
                alt="Recommended"
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <p className="font-bold">QuikChat</p>
                <p className="text-sm text-gray-500">
                  Instant Answers, Anytime
                </p>
                <p className="text-xs text-gray-400">4.3 Stars</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
