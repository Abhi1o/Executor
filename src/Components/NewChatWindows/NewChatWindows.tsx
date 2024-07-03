import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./NewChatWindows.css";

const NewChatWindows: React.FC = () => {
  const [currentChat, setCurrentChat] = useState<string | null>(null);

  const startChat = (chatType: string) => {
    setCurrentChat(chatType);
  };

  return (
    <div className="flex h-screen py-6 pb-14 text-slate-800">
      <div className="flex-1 flex flex-col items-center justify-center grow md:pt-18 w-2/3 bg-white p-8">
        {currentChat ? (
          <ChatWindow chatType={currentChat} />
        ) : (
          <MainChat startChat={startChat} />
        )}

        {renderChatBox()}
      </div>
      <hr className="h-screen border-y-gray-400" />
      <div className="w-1/3 bg-gray-400 p-4">
        <RightSidebar />
      </div>
    </div>
  );
};

interface MainChatProps {
  startChat: (chatType: string) => void;
}

const MainChat: React.FC<MainChatProps> = ({ startChat }) => {
  return (
    <>
      <div className="grow px-10 py-20 overflow-y-auto scroll-smooth scrollbar-none 2xl:py-12 md:px-4 md:pt-0 md:pb-6">
        <div className="mb-10 text-center">
          <div className="h3 leading-[4rem] 2xl:mb-2 2xl:h4 text-3xl font-bold mb-4">
            Unlock the power of AI
          </div>
          <div className="body1 text-n-4 2xl:body1S text-gray-600 mb-6">
            Chat with the smartest AI - Experience the power of AI with us
          </div>
        </div>
        <div className="max-w-[30.75rem] mx-auto">
          <PageLink
            onClick={() => startChat("Photo editing")}
            color="#8E55EA"
            label="Photo editing"
            svg="M12 1.995a1 1 0 0 1 .117 1.993L12 3.995l-5.232.001-1.357.037c-.438.036-.663.101-.819.18a2 2 0 0 0-.874.874c-.08.156-.145.381-.18.819-.029.35-.035.78-.037 1.357v9.464l.037 1.357c.036.438.101.663.18.819a2 2 0 0 0 .801.835c.086-.135.179-.238.24-.304.114-.123.258-.259.414-.402l.158-.144 8.508-7.735.466-.405a2.01 2.01 0 0 1 .619-.343 2 2 0 0 1 1.115-.035c.261.067.47.187.64.303l.322.24.169.134 2.831 2.265c.366.292.689.55.93.882a3 3 0 0 1 .463.964c.087.316.104.643.107 1.002v.275.568c0 .671.039 1.372-.136 2.026a4 4 0 0 1-2.828 2.828c-.448.12-.956.135-1.609.136H6.531c-.258 0-.508 0-.718-.014l-.566-.031c-.562-.046-1.079-.145-1.564-.392a4 4 0 0 1-1.748-1.748c-.247-.485-.346-1.002-.392-1.564-.038-.464-.043-1.018-.044-1.674V7.417l.044-1.674c.046-.562.144-1.079.392-1.564a4 4 0 0 1 1.748-1.748c.485-.247 1.002-.346 1.564-.392.464-.038 1.018-.043 1.674-.044H12zm-4 3.5a3 3 0 1 1 0 6 3 3 0 1 1 0-6zm14.207-3.207a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L17.5 5.581l3.293-3.293a1 1 0 0 1 1.414 0z"
          />
          <PageLink
            onClick={() => startChat("Video generation")}
            color="#D84C10"
            label="Video generation"
            svg="M11.998.998c6.075 0 11 4.925 11 11s-4.925 11-11 11-11-4.925-11-11 4.925-11 11-11zM9.962 7.915a.5.5 0 0 0-.365.199c-.1.133-.1.372-.1.849v6.069c0 .477 0 .716.1.849a.5.5 0 0 0 .365.199c.166.012.367-.117.768-.375l4.721-3.035c.348-.224.523-.336.583-.478a.5.5 0 0 0 0-.389c-.06-.142-.234-.254-.583-.478L10.73 8.29c-.401-.258-.602-.387-.768-.375z"
          />
          <PageLink
            onClick={() => startChat("Education feedback")}
            color="#0084FF"
            label="Education feedback"
            svg="M16.805.998c.278.002.593.018.877.121a2 2 0 0 1 1.195 1.195 2.28 2.28 0 0 1 .117.684h0 1.738l.381.011c.19.013.416.043.65.14a2 2 0 0 1 1.082 1.082c.097.234.127.46.14.65l.012.589h0v.953c-.002.653-.016 1.161-.136 1.609a4 4 0 0 1-2.828 2.828c-.381.102-.805.128-1.325.134a7.01 7.01 0 0 1-5.711 4.931h0v1.071h.444c2.516 0 4.556 2.04 4.556 4.556 0 .798-.647 1.444-1.445 1.444h0-9.111c-.798 0-1.444-.647-1.444-1.444 0-2.516 2.04-4.556 4.556-4.556h0 .444v-1.071a7.01 7.01 0 0 1-5.711-4.931c-.52-.006-.944-.032-1.324-.134a4 4 0 0 1-2.828-2.828C.997 7.522.997 6.931.998 6.136v-.871l.011-.381a2.03 2.03 0 0 1 .14-.65A2 2 0 0 1 2.232 3.15a2.03 2.03 0 0 1 .65-.14l.589-.012h1.53c.009-.226.037-.465.117-.684a2 2 0 0 1 1.195-1.195c.34-.124.726-.122 1.039-.121zM4.326 4.998h-.585c-.264 0-.396 0-.5.051-.09.044-.168.118-.217.206-.056.101-.063.229-.076.485-.032.603-.028 1.229.118 1.776A2 2 0 0 0 4.48 8.93c.119.032.26.049.518.058v-3.19c0-.28 0-.42-.054-.527a.5.5 0 0 0-.219-.219c-.089-.045-.201-.053-.398-.054zm15.474.003c-.281-.001-.422-.002-.529.053a.5.5 0 0 0-.22.219c-.055.107-.055.248-.055.529v3.187c.258-.009.399-.026.518-.058a2 2 0 0 0 1.414-1.414c.142-.529.142-1.167.11-1.771-.014-.255-.02-.382-.076-.483-.049-.088-.126-.161-.216-.206-.104-.051-.235-.052-.498-.053h0z"
          />
          <PageLink
            onClick={() => startChat("Code generation")}
            color="#52BA69"
            label="Code generation"
            svg=""
          />
          <PageLink
            onClick={() => startChat("Audio generation")}
            color="#E68A1D"
            label="Audio generation"
            svg=""
          />
        </div>
      </div>
    </>
  );
};

interface PageLinkProps {
  color: string;
  label: string;
  onClick: () => void;
  svg: string;
}

const PageLink: React.FC<PageLinkProps> = ({ color, label, onClick, svg }) => (
  <div
    onClick={onClick}
    className="group flex items-center mb-5 p-3.5 border border-n-3 rounded-xl h6 transition-all hover:border-transparent hover:shadow-lg last:mb-0 2xl:p-2.5 lg:p-3.5 dark:border-n-5 dark:hover:border-n-7 dark:hover:bg-n-7"
  >
    <div className="relative flex justify-center items-center w-15 h-15 mr-6">
      <div className="absolute inset-0 opacity-20 rounded-xl" style={{ backgroundColor: color }}></div>
      <svg className="inline-block w-14 h-14 relative z-1" width="24" height="24" viewBox="0 0 24 24">
        <path fill={color} d={svg} />
      </svg>
    </div>
    {label}
    <svg className="inline-block w-6 h-6 ml-auto fill-n-4 transition-colors group-hover:fill-n-7 dark:group-hover:fill-n-4" width="24" height="24" viewBox="0 0 24 24">
      <path d="M14.707 5.293a1 1 0 0 0-1.414 1.414L17.586 11H4a1 1 0 1 0 0 2h13.586l-4.293 4.293a1 1 0 0 0 1.414 1.414l6-6a1 1 0 0 0 0-1.414l-6-6z" />
    </svg>
  </div>
);

const renderChatBox = () => (
  <div className="relative z-5 px-10 pb-6 dark:bg-n-6">
    <div className="relative z-2 border-2 border-n-3 rounded-xl overflow-hidden dark:border-n-5">
      <div className="relative flex items-center min-h-[3.5rem] px-16 text-0">
        <button className="group absolute left-3 bottom-2 w-10 h-10 outline-none">
          <svg className="inline-block w-7 h-7 fill-[#7F8689] transition-colors group-hover:fill-primary-1 dark:fill-n-4" width="24" height="24" viewBox="0 0 24 24">
            <path d="M12 3a9 9 0 1 1 0 18 9 9 0 1 1 0-18zm0 4.25a.75.75 0 0 0-.75.75h0v3.25H8l-.102.007A.75.75 0 0 0 8 12.75h0 3.25V16l.007.102A.75.75 0 0 0 12.75 16h0v-3.25H16l.102-.007A.75.75 0 0 0 16 11.25h0-3.25V8l-.007-.102A.75.75 0 0 0 12 7.25z"></path>
          </svg>
        </button>
        <input
          type="text"
          className="text-black w-full py-3 bg-transparent body2 text-n-7 outline-none resize-none placeholder:text-n-4/75 dark:text-n-1 dark:placeholder:text-n-4"
          placeholder="Ask Me anything"
          style={{ height: '48px' }}
        />
        <button className="group absolute right-3 bottom-2 w-10 h-10">
          <svg className="inline-block w-6 h-6 fill-n-4 transition-colors group-hover:fill-primary-1" width="24" height="24" viewBox="0 0 24 24">
            <path d="M3 9a1 1 0 0 1 .993.883L4 10v4a1 1 0 0 1-1.993.117L2 14v-4a1 1 0 0 1 1-1zm4.5-4a1 1 0 0 1 .993.883L8.5 6v12a1 1 0 0 1-1.993.117L6.5 18V6a1 1 0 0 1 1-1zM12 2a1 1 0 0 1 .993.883L13 3v18a1 1 0 0 1-1.993.117L11 21V3a1 1 0 0 1 1-1zm4.5 3a1 1 0 0 1 .993.883L17.5 6v12a1 1 0 0 1-1.993.117L15.5 18V6a1 1 0 0 1 1-1zM21 9a1 1 0 0 1 .993.883L22 10v4a1 1 0 0 1-1.993.117L20 14v-4a1 1 0 0 1 1-1z"></path>
          </svg>
        </button>
      </div>
    </div>
  </div>
);

interface CardProps {
  title: string;
  onClick: () => void;
}

const Card: React.FC<CardProps> = ({ title, onClick }) => (
  <div
    className="p-4 bg-gray-50 rounded-lg shadow cursor-pointer hover:bg-gray-100"
    onClick={onClick}
  >
    <h2 className="text-xl">{title}</h2>
  </div>
);

interface ChatWindowProps {
  chatType: string;
}

const ChatWindow: React.FC<ChatWindowProps> = ({ chatType }) => {
  const [messages, setMessages] = useState<{ user: string, text: string }[]>([]);
  const [input, setInput] = useState("");
  const ws = useRef<WebSocket | null>(null);

  useEffect(() => {
    ws.current = new WebSocket("ws://localhost:8080");
    ws.current.onmessage = (event) => {
      const message = JSON.parse(event.data);
      setMessages((prevMessages) => [...prevMessages, message]);
    };

    return () => {
      if (ws.current) {
        ws.current.close();
      }
    };
  }, []);

  const sendMessage = () => {
    if (ws.current) {
      const message = {
        user: "user",
        text: input,
      };
      ws.current.send(JSON.stringify(message));
      setMessages((prevMessages) => [...prevMessages, message]);
      setInput("");
    }
  };

  return (
    <>
      <h1 className="text-3xl font-bold mb-4">{chatType}</h1>
      <div className="flex-1 overflow-auto mb-4">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`mb-4 ${msg.user === "user" ? "text-right" : "text-left"}`}
          >
            <div
              className={`inline-block p-4 rounded-lg ${msg.user === "user" ? "bg-blue-500 text-white" : "bg-gray-100"}`}
            >
              {msg.text}
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between w-full mt-8">
        <input
          className="flex-1 p-4 bg-gray-100 rounded-lg"
          placeholder="Type a message"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded ml-4"
          onClick={sendMessage}
        >
          Send
        </button>
      </div>
    </>
  );
};

const RightSidebar: React.FC = () => (
  <div>
    <div className="flex items-center justify-between mb-4">
      <span className="text-gray-600">Chat history</span>
      <button className="text-red-500">Clear</button>
    </div>
    <div className="space-y-4">
      <ChatHistoryCard title="Welcome page with input" />
      <ChatHistoryCard title="Photo retouch" />
      <ChatHistoryCard title="Auto generate title" />
    </div>
    <button className="w-full bg-blue-500 text-white px-4 py-2 rounded mt-4">
      New chat
    </button>
  </div>
);

interface ChatHistoryCardProps {
  title: string;
}

const ChatHistoryCard: React.FC<ChatHistoryCardProps> = ({ title }) => (
  <div className="flex flex-col pt-[8rem] pb-24 bg-n-1 rounded-r-[1.25rem] border-l border-n-3 shadow-lg lg:rounded-[1.25rem] lg:invisible lg:opacity-0 lg:transition-opacity lg:z-20 lg:border-l-0 lg:shadow-2xl md:fixed md:border-l md:rounded-none dark:bg-n-6 dark:border-n-5">
    <div className="absolute top-0 left-0 right-0 flex justify-end items-center h-18 px-9 border-b border-n-3 lg:pr-18 md:pr-16 dark:border-n-5">
      <div className="relative z-10 mr-8 lg:mr-6">
        <button className="group relative w-10 h-10" type="button">
          <svg className="inline-block w-6 h-6 fill-n-4 transition-colors group-hover:fill-primary-1" width="24" height="24" viewBox="0 0 24 24">
            <path d="...SVG_PATH..." />
          </svg>
          <div className="absolute top-2.5 right-2.5 w-2 h-2 rounded-full bg-accent-1"></div>
        </button>
      </div>
      <div className="relative z-10 mr-8 lg:mr-6 md:static">
        <button className="group relative w-10 h-10 rounded-full transition-shadow">
          <img alt="Avatar" loading="lazy" decoding="async" className="inline-block align-top opacity-100 rounded-full object-cover" src="/_next/image?url=%2Fimages%2Favatar.jpg&amp;w=3840&amp;q=75" />
          <div className="absolute -right-0.75 -bottom-0.75 w-4.5 h-4.5 bg-primary-2 rounded-full border-4 border-n-1 dark:border-n-6"></div>
        </button>
      </div>
      <button className="btn-dark btn-medium">Share</button>
    </div>
    <div className="absolute top-24 left-0 right-0 flex items-center px-9 md:px-6">
      <div className="base2 text-n-4/75">Chat history</div>
      <div className="ml-3 px-2 bg-n-3 rounded-lg caption1 text-n-4 dark:bg-n-5/50">26/100</div>
      <button className="group relative ml-auto text-0">
        <svg className="inline-block w-5 h-5 fill-n-4 transition-colors group-hover:fill-accent-1" width="24" height="24" viewBox="0 0 24 24">
          <path d="...SVG_PATH..." />
        </svg>
        <div className="absolute min-w-[8rem] top-1/2 -translate-y-1/2 right-full mr-2 px-2 py-1 rounded-lg bg-n-7 caption1 text-n-1 invisible opacity-0 transition-opacity pointer-events-none lg:hidden after:absolute after:top-1/2 after:left-full after:-translate-y-1/2 after:w-0 after:h-0 after:border-t-4 after:border-l-4 after:border-b-4 after:border-r-4 after:border-r-transparent after:border-l-n-7 after:border-t-transparent after:border-b-transparent group-hover:opacity-100 group-hover:visible">
          Clear chat history
        </div>
      </button>
    </div>
    <div className="grow overflow-y-auto scroll-smooth px-6 md:px-3">
      {renderChatItems()}
    </div>
    <div className="absolute left-0 right-0 bottom-0 p-6">
      <a className="btn-blue w-full" href="/">
        <svg className="inline-block w-6 h-6 undefined" width="24" height="24" viewBox="0 0 24 24">
          <path d="...SVG_PATH..." />
        </svg>
        <span>New chat</span>
      </a>
    </div>
  </div>
);

const renderChatItems = () => (
  <>
    <ChatItem href="/education-feedback" title="Brainwave AI UI Kit" description="Write code (HTML, CSS and JS) for a simple form with 3 input fields and a dropdown with 2 buttons, cancel and send" />
    <ChatItem href="/code-generation" title="Welcome page with input" description="Write code (HTML, CSS and JS) for a simple form with 3 input fields and a dropdown with 2 buttons, cancel and send" />
    <ChatItem href="/photo-editing" title="Photo retouch" description="Write code (HTML, CSS and JS) for a simple form with 3 input fields and a dropdown with 2 buttons, cancel and send" />
    <ChatItem href="/audio-generation" title="Auto generate title" description="Write code (HTML, CSS and JS) for a simple form with 3 input fields and a dropdown with 2 buttons, cancel and send" />
  </>
);

interface ChatItemProps {
  href: string;
  title: string;
  description: string;
}

const ChatItem: React.FC<ChatItemProps> = ({ href, title, description }) => (
  <div className="relative mt-2">
    <button className="absolute z-1 top-3 left-3 flex justify-center items-center border-2 border-n-4/50 w-5.5 h-5.5 rounded-md transition-colors">
      <svg className="inline-block w-4 h-4 fill-n-1 opacity-0 transition-opacity" width="24" height="24" viewBox="0 0 24 24">
        <path d="...SVG_PATH..." />
      </svg>
    </button>
    <a className="block" href={href}>
      <div className="group py-3 pl-12 pr-3 rounded-xl transition-colors hover:bg-n-3/75 dark:hover:bg-n-5">
        <div className="base1 font-semibold dark:text-n-1">{title}</div>
        <div className="mt-1 truncate caption1 text-n-4">{description}</div>
        <div className="flex justify-between items-center mt-2">
          <div className="flex -mt-0.5 -ml-0.5">
            <Avatar src="/_next/image?url=%2Fimages%2Favatar-1.jpg&amp;w=3840&amp;q=75" />
          </div>
          <div className="caption2 text-n-4/75">Just now</div>
        </div>
      </div>
    </a>
  </div>
);

interface AvatarProps {
  src: string;
}

const Avatar: React.FC<AvatarProps> = ({ src }) => (
  <div className="relative w-7 h-7 -ml-2.5 border-2 rounded-full first:ml-0 border-n-1 transition-colors group-hover:border-n-3/75 dark:border-n-6 dark:group-hover:border-n-5">
    <img alt="Avatar" loading="lazy" decoding="async" className="inline-block align-top opacity-100 rounded-full object-cover" src={src} />
  </div>
);

export default NewChatWindows;
