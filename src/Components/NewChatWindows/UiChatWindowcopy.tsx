// src/components/ChatPage.tsx
import React, { useState, useRef, useEffect } from "react";
import { SigningStargateClient } from "@cosmjs/stargate";
import { DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import process from "../../Assets/Image/Infinity Loop (1).gif";
import complete from "../../Assets/Image/output-onlinegiftools (1).gif";
import chainConfig from "./config";
import "./NewChatWindows";
import {
  FiStar,
  FiShare2,
  FiMoreVertical,
  FiSend,
  FiTrash2,
} from "react-icons/fi";
import profile from "../../Assets/Image/Young_Person-removebg-preview.png";
import { format } from "date-fns"; // Add this import
interface ChainConfig {
  rpcEndpoint: string;
  prefix: string;
  denom: string;
  feeAmount: string;
  gas: string;
}
const testing = async (
  input: string,
  mnemonic: string,
  chainConfig: ChainConfig
) => {
  async function extractFunctionFromResponse(response: any) {
    const generatedText = response[0].generated_text;
    console.log("generatedText", generatedText);
    const asyncKeywordIndex = generatedText.indexOf("async");
    console.log("asyncKeywordIndex", asyncKeywordIndex);
    const assistantKeywordIndex = generatedText.indexOf("<assistant>:");
    console.log("assistantKeywordIndex", assistantKeywordIndex);
    if (asyncKeywordIndex !== -1 && asyncKeywordIndex > assistantKeywordIndex) {
      const functionStart = generatedText.indexOf(
        "async",
        assistantKeywordIndex
      );
      const functionEnd =
        generatedText.indexOf("return result.transactionHash;") +
        "return result.transactionHash;".length;

      const functionCode =
        generatedText.substring(functionStart, functionEnd) + "\n}";
      console.log("Extracted function code:", functionCode);

      const dynamicFunction = new Function(
        "DirectSecp256k1HdWallet",
        "SigningStargateClient",
        "mnemonic",
        "chainConfig",
        functionCode
      );
      const proxyFunction = async (
        DirectSecp256k1HdWallet: any,
        SigningStargateClient: any,
        mnemonic: string,
        chainConfig: any
      ): Promise<any> => {
        console.log("inside proxy function");
        try {
          const result = await dynamicFunction(
            DirectSecp256k1HdWallet,
            SigningStargateClient,
            mnemonic,
            chainConfig
          );
          return result;
        } catch (error) {
          console.error("Error in proxyFunction:", error);
          throw error;
        }
      };

      const result = await proxyFunction(
        DirectSecp256k1HdWallet,
        SigningStargateClient,
        mnemonic,
        chainConfig
      );

      return result;
    }

    return generatedText;
  }

  const url = "https://88db-18-213-200-192.ngrok-free.app/predict";
  const payload = {
    inputs: `<human>:${input} <assistant>:`,
  };

  const headers = {
    "Content-Type": "application/json",
  };

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(payload),
    });
    const data = await response.json();

    console.log("This is the output in json format", data);
    const extractedFunction = await extractFunctionFromResponse(data);
    console.log("extract function", extractedFunction);
    return extractedFunction;
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
};

const ChatPage: React.FC = () => {
  const [copy, setCopy] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(false);
  // const [loadingText, setLoadingText] = useState("Connecting to network...");
  // const messagesEndRef = useRef(null);
  const [messages, setMessages] = useState<any[]>([]);
  // const [input, setInput] = useState("");
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null);
  const [walletName, setWalletName] = useState("");

  const loadingGifUrl = process; // Replace with the actual path
  const completionGifUrl = complete; // Replace with the actual path
  const staticBotImageUrl = "https://ui8-brainwave.herokuapp.com/_next/image?url=%2Fimages%2Favatar-chat.jpg"; // Replace with the actual path

  useEffect(() => {
    const storedWalletName = localStorage.getItem("walletname");
    if (storedWalletName) {
      setWalletName(storedWalletName);
    }
  }, []);

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

  const handleSend = async () => {
    const isTransaction = true;
    const mnemonic =
      " sign public soldier jewel flavor bring you hand inject soft trust lens"; // Replace with actual mnemonic

    if (inputValue.trim()) {
      const userMessage = {
        type: "user",
        text: inputValue,
        time: format(new Date(), "hh:mm"),
      };
      setMessages([...messages, userMessage]);
      setInputValue("");

      const loadingMessage = {
        type: "loading",
        text: "Loading...",
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prevMessages) => [...prevMessages, loadingMessage]);

      setLoading(true);

      try {
        if (isTransaction) {
          // Add appropriate chainConfig values
          const transactionFunction = await testing(
            inputValue,
            mnemonic,
            chainConfig
          );
          console.log(transactionFunction);
          const transactionHash = await transactionFunction;
          const botReply = {
            type: "transaction",
            text: `Transaction successful: ${transactionHash}`,
            transactionHash,
            time: format(new Date(), "hh:mm"),
          };
          setMessages((prevMessages) => [
            ...prevMessages.slice(0, -1),
            botReply,
          ]);
          setTimeout(() => {
            setMessages((prevMessages) => {
              const updatedMessages = [...prevMessages];
              updatedMessages[updatedMessages.length - 1].type = "static";
              return updatedMessages;
            });
          }, 2000);
        } else {
          const botReply = {
            text: `Echo: ${inputValue}`,
            sender: "bot",
            timestamp: new Date(),
          };
          setMessages((prevMessages) => [
            ...prevMessages.slice(0, -1),
            botReply,
          ]);
        }
      } catch (error) {
        console.error("Error:", error);
        const botReply = {
          text: "Error occurred during transaction.",
          sender: "bot",
          timestamp: new Date(),
        };
        setMessages((prevMessages) => [...prevMessages.slice(0, -1), botReply]);
      }

      setLoading(false);
    }
  };

  const handleHashCopy = (transactionHash: string) => {
    navigator.clipboard.writeText(transactionHash).then(
      () => {
        setCopy(true);
        setTimeout(() => {
          setCopy(false);
        }, 3000);
      },
      (err) => {
        console.error("Could not copy text: ", err);
      }
    );
  };

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

  return (
    <div className="flex max-h-full overflow-none">
      {/* Left Section - Chat Window */}
      <div className="min-w-2.3/3 flex-grow flex flex-col border-r border-gray-200 shadow-2xl">
        {/* Nav Section */}
        <div className="flex items-center justify-between py-5 px-9 border-b border-gray-200 shadow-2xl shadow-gray-300/40">
          <h1 className="text-xl font-semibold">Hello</h1>
          <div className="flex items-center space-x-5">
            <FiStar className="cursor-pointer" />
            <FiShare2 className="cursor-pointer" />
            <FiMoreVertical className="cursor-pointer" />
          </div>
        </div>

        {/* Main Chat Section */}
        <div className=" px-9 relative z-2 grow p-10 space-y-10 overflow-y-auto scroll-smooth scrollbar-none h-[100vh]">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`mb-9 max-w-[50rem] ${
                message.type === "user" ? " ml-auto" : ""
              }`}
            >
              <div
                className={`inline-block rounded-[20px] w-[50rem] ${
                  message.type === "user"
                    ? "space-y-6 pt-6 px-6 pb-20 border-2  md:p-5 md:px-6 md:pb-14 border-gray-200 font-medium"
                    : "pt-6 px-6 pb-6 space-y-4 md:p-5 md:pb-14 font-medium bg-gray-200 "
                }`}
              >
                {message.text}
              </div>
              <div className="text-xs text-gray-400 mt-1">
                {message.type === "user" ? (
                  <>
                    <div className="-mt-8 flex items-end pr-6">
                      <div className="pb-0.5 caption1 text-n-4/50  font-medium ">
                        {message.time}
                      </div>
                      <div className="relative w-14 h-14 ml-auto rounded-2xl overflow-hidden shadow-[0_0_0_0.25rem_#FEFEFE] ">
                        <img
                          src={profile}
                          alt="user"
                          className="inline-block align-top transition-opacity object-cover bg-white"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="-mt-7 flex items-end pl-6">
                      <div className="relative shrink-0 w-14 h-14 mr-auto rounded-2xl overflow-hidden shadow-[0_0_0_0.25rem_#FEFEFE] ">
                        <img
                          src={
                            message.type === "loading"
                              ? loadingGifUrl
                              : message.type === "transaction"
                              ? completionGifUrl
                              : staticBotImageUrl
                          }
                          alt="Bot"
                          className="inline-block align-top transition-opacity opacity-100 object-cover"
                          loading="lazy"
                        />
                      </div>
                      <div className="-mt-9 flex items-center">
                        <div className="caption1 text-n-4/50 "></div>
                        <div className="pb-0.5 caption1 text-n-4/50  font-medium">
                          {message.time}
                        </div>
                        {message.transactionHash && (
                          <button
                            className="h-6 ml-3 px-2 bg-n-3 font-medium rounded-md caption1 txt-n-6 transition-colors hover:text-sky-500 dark:bg-n-7 bg-gray-200"
                            onClick={() =>
                              handleHashCopy(message.transactionHash)
                            }
                          >
                            {copy ? "Copied ✅" : "Copy Hash"}
                          </button>
                        )}
                        <button
                          className="h-6 ml-3 px-2 bg-n-3 rounded-md caption1 txt-n-6 font-medium transition-colors hover:text-primary-1 hover:text-sky-500 dark:bg-n-7 bg-gray-200"
                          onClick={() => handleSend()}
                        >
                          Regenerate response
                        </button>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Input Box */}
        <div className="relative z-5 px-10 pb-6 before:absolute before:-top-6 before:left-0 before:right-6 before:bottom-1/2 before:bg-gradient-to-b before:to-n-1 before:from-n-1/0 before:pointer-events-none 2xl:px-9 2xl:pb-6 md:px-4 md:pb-4 dark:before:to-n-6 dark:before:from-n-6/0">
          <div className="relative z-2 border-2 border-n-3 rounded-[20px] overflow-hidden dark:border-n-5">
            <div className="relative flex items-center min-h-[3.5rem] px-16 text-0">
              <button className="group absolute left-3 bottom-2 w-10 h-10 outline-none">
                <svg
                  className="inline-block w-7 h-7 fill-[#7F8689] transition-colors group-hover:fill-primary-1 dark:fill-n-4"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 3a9 9 0 1 1 0 18 9 9 0 1 1 0-18zm0 4.25a.75.75 0 0 0-.75.75h0v3.25H8l-.102.007A.75.75 0 0 0 8 12.75h0 3.25V16l.007.102A.75.75 0 0 0 12.75 16h0v-3.25H16l.102-.007A.75.75 0 0 0 16 11.25h0-3.25V8l-.007-.102A.75.75 0 0 0 12 7.25z"></path>
                </svg>
              </button>
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="flex-1 p-2 w-full py-3 bg-transparent body2 text-n-7 outline-none resize-none h-12"
                placeholder="Ask Executor anything "
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    handleSend();
                  }
                }}
              />
              <button
                onClick={handleSend}
                className="group absolute right-1 bottom-2 items-center text-center w-10 h-10"
              >
                <FiSend
                  fontSize="20px"
                  className="hover:text-blue-500 text-gray-600"
                />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section - Notifications and Chat History */}
      <div className="w-0.7/3 flex flex-col">
        <div className="flex items-center justify-between py-[16px] px-7 border-b border-gray-200">
          <div className="flex items-center space-x-2">
            <FiShare2 className="cursor-pointer" />
          </div>
          <div className="flex items-center space-x-2">
            <div className="relative">
              <button
                onClick={() => setShowPopup(!showPopup)}
                className="p-1 rounded-full hover:bg-gray-200 focus:outline-none"
              >
                <svg
                  className="inline-block w-7 h-6 fill-n-4 transition-colors group-hover:fill-primary-1 ui-open:fill-primary-1"
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
                          src={notification.imgSrc || "default_image.jpg"}
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
            {/* profile setting  */}
            <div className="relative">
              <button onClick={() => setProfileMenuOpen(!profileMenuOpen)}>
                <img
                  src={profile}
                  alt="Profile"
                  className="w-8 h-8 rounded-full cursor-pointer aspect-square"
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
          {/* notification  */}
        </div>

        <div className="flex-1 overflow-y-auto p-7 ">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <h2 className="text-base text-gray-400 font-semibold">
                Chat History
              </h2>
              <span className="text-xs rounded-lg px-2 py-[2px] font-medium text-gray-600 bg-gray-300 ">
                26/100
              </span>
            </div>

            <FiTrash2 className="cursor-pointer" />
          </div>
          {/* Chat History List */}
          <div className="w-full mt-8 mb-5">
            <div className="flex items-center justify-between mb-4 rounded-2xl border-2 px-4 py-3 bg-white">
              <div className="pr-5">
                <h3 className="text-base font-semibold">Executor AI UI Kit</h3>
                <p className="text-xs font-medium text-gray-400">
                  Write code (HTML, CSS and JS) for a simple...
                </p>
              </div>
              <img src={profile} alt="User" className="w-8 h-8 rounded-full" />
            </div>
            {/* Repeat for other chat history items */}
          </div>
        </div>

        <div className="p-7">
          <button className="w-full h-14 bg-blue-500 px-7 text-white py-2 rounded-xl">
            New Chat
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
