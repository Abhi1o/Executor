import React, { useState } from "react";
import {
  FiStar,
  FiShare2,
  FiMoreVertical,
  FiSend,
  FiTrash2,
} from "react-icons/fi";
import "./NewChatWindows";
import profile from "../../Assets/Image/Young_Person-removebg-preview.png";

const ChatPage: React.FC = () => {
  const [messages, setMessages] = useState([
    { type: "bot", text: "Hello! How can I help you today?", time: "Just now" },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim()) {
      setMessages([
        ...messages,
        { type: "user", text: input, time: "Just now" },
      ]);
      setInput("");
    }
  };

  return (
    <div className="flex min-h-[740px]">
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
        <div className="flex-1 px-9 relative z-2 grow p-10 space-y-10 overflow-y-auto scroll-smooth scrollbar-none ">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`mb-9 max-w-[50rem] ${
                message.type === "user" ? "text-right ml-auto" : ""
              }`}
            >
              <div
                className={`inline-block rounded-[20px] w-[50rem]  ${
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
                      <div className="relative w-16 h-16 ml-auto rounded-2xl overflow-hidden shadow-[0_0_0_0.25rem_#FEFEFE] ">
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
                    <div className="-mt-8 flex items-end pl-6">
                      <div className="relative shrink-0 w-16 h-16 mr-auto rounded-2xl overflow-hidden shadow-[0_0_0_0.25rem_#FEFEFE] ">
                        <img
                          src="/bot-icon.jpg"
                          alt="Bot"
                          className="inline-block w-6 h-6 rounded-full ml-2 nline-block align-top transition-opacity opacity-100 object-cover"
                          loading="lazy"
                        />
                      </div>
                      <div className="-mt-9 flex items-center">
                        <div className="caption1 text-n-4/50 "></div>
                        <div className="pb-0.5 caption1 text-n-4/50  font-medium">
                          {message.time}
                        </div>
                        <button className="h-6 ml-3 px-2 bg-n-3 font-medium rounded-md caption1 txt-n-6 transition-colors hover:text-sky-500 dark:bg-n-7 bg-gray-200 ">
                          Copy
                        </button>
                        <button className="h-6 ml-3 px-2 bg-n-3 rounded-md caption1 txt-n-6 font-medium transition-colors hover:text-primary-1 hover:text-sky-500 dark:bg-n-7 bg-gray-200">
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
        <div className=" z-5 px-16 pb-6 absolute -top-6 left-0 right-6 bottom-1/2 bg-gradient-to-b to-n-1 from-n-1/0 pointer-events-none 2xl:px-8 2xl:pb-5 md:px-40 md:pb-4 dark:to-n-6 dark:from-n-6/0">
        <div className="relative z-2 border-2 border-n-3 rounded-xl overflow-hidden dark:border-n-5">
                  <div className="relative flex items-center min-h-[3.5rem] px-16 text-0">
          
          <button className="group absolute left-3 bottom-2 w-10 h-10 outline-none"><svg className="inline-block w-7 h-7 fill-[#7F8689] transition-colors group-hover:fill-primary-1 dark:fill-n-4" width="24" height="24" viewBox="0 0 24 24">
            <path d="M12 3a9 9 0 1 1 0 18 9 9 0 1 1 0-18zm0 4.25a.75.75 0 0 0-.75.75h0v3.25H8l-.102.007A.75.75 0 0 0 8 12.75h0 3.25V16l.007.102A.75.75 0 0 0 12.75 16h0v-3.25H16l.102-.007A.75.75 0 0 0 16 11.25h0-3.25V8l-.007-.102A.75.75 0 0 0 12 7.25z"></path>
            </svg></button>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 p-2 w-full py-3 bg-transparent body2 text-n-7 outline-none resize-none placeholder:text-n-4/75 dark:text-n-1 dark:placeholder:text-n-4 h-12"
            placeholder="Ask Brainwave anything "
          />
          <button onClick={handleSend} className=" group absolute right-3 bottom-2 w-10 h-10">
            <FiSend />
          </button>


        </div>
        </div>

          
        </div>
      </div>

      {/* Right Section - Notifications and Chat History */}
      <div className="w-0.7/3 flex flex-col">
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <div className="flex items-center space-x-2">
            <FiShare2 className="cursor-pointer" />
            <img
              src={profile}
              alt="User"
              className="w-8 h-8 rounded-full cursor-pointer"
            />
          </div>
          <FiTrash2 className="cursor-pointer" />
        </div>

        <div className="flex-1 overflow-y-auto p-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Chat History</h2>
            <span className="text-sm text-gray-500">26/100</span>
          </div>
          {/* Chat History List */}
          <div>
            {/* Example Chat History Item */}
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-md font-semibold">Brainwave AI UI Kit</h3>
                <p className="text-sm text-gray-500">
                  Write code (HTML, CSS and JS) for a simple...
                </p>
              </div>
              <img src={profile} alt="User" className="w-8 h-8 rounded-full" />
            </div>
            {/* Repeat for other chat history items */}
          </div>
        </div>

        <div className="p-4">
          <button className="w-full bg-blue-500 text-white py-2 rounded-lg">
            New Chat
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
