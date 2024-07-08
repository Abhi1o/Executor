import React, { useState, useEffect, useRef } from "react";
// import { Link } from "react-router-dom";
import "./NewChatWindows.css";

const NewChatWindows: React.FC = () => {
  const [currentChat, setCurrentChat] = useState<string | null>(null);

  const startChat = (chatType: string) => {
    setCurrentChat(chatType);
  };

  return (
    <div className="flex  py-6 pb-14 text-slate-800">
      <div className="flex-1 flex flex-col items-center justify-center  grow md:pt-18  p-8">
        
          <MainChat startChat={startChat} />
       

        
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
      <div className=" grow px-10 py-20 w-full overflow-y-auto scroll-smooth scrollbar-none m-auto">
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
            color="yellow"
            label="Cosmos Transaction"
            svg="M 50,5
    A 45,45 0 0 1 95,50
    A 45,45 0 0 1 50,95
    A 45,45 0 0 1 5,50
    A 45,45 0 0 1 50,5
    M 50,0
    A 50,50 0 0 0 0,50
    A 50,50 0 0 0 50,100
    A 50,50 0 0 0 100,50
    A 50,50 0 0 0 50,0
    Z
    M 30,50
    A 20,20 0 0 1 50,30
    A 20,20 0 0 1 70,50
    A 20,20 0 0 1 50,70
    A 20,20 0 0 1 30,50
    Z
    M 20,50
    L 80,50
    M 50,20
    L 50,80"
          />
          <PageLink
            onClick={() => startChat("Video generation")}
            color="#52BA69"
            label="Chat AI"
            svg="M11.541 1.245a2 2 0 0 1 .914 0c.348.082.652.281.893.439h0l8.522 5.54c.206.133.465.3.662.536a2 2 0 0 1 .377.695c.09.294.089.602.089.847v5.551c-.002.214-.016.458-.088.693a2 2 0 0 1-.377.695c-.197.236-.456.403-.662.536h0l-8.522 5.54c-.242.158-.545.358-.893.439a2 2 0 0 1-.914 0c-.348-.082-.652-.281-.893-.439h0l-8.523-5.54c-.206-.133-.465-.3-.662-.536a2 2 0 0 1-.377-.695c-.09-.294-.089-.602-.089-.847V9.148c.002-.214.016-.458.088-.693a2 2 0 0 1 .377-.695c.197-.236.456-.403.662-.536h0l8.523-5.54c.242-.158.545-.358.893-.439zm-8.543 9.097l.004 4.612 7.996 5.202v-4.624l-8-5.19zm18 0l-8 5.19v4.624l7.996-5.207.004-4.607z"
          />
          {/* <PageLink
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
          /> */}
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
      <svg className="inline-block w-14 h-14 relative z-1" width="2" height="2" viewBox="0 0 24 24">
        <path fill={color} d={svg} />
      </svg>
    </div>
    {label}
    <svg className="inline-block w-6 h-6 ml-auto fill-n-4 transition-colors group-hover:fill-n-7 dark:group-hover:fill-n-4" width="24" height="24" viewBox="0 0 24 24">
      <path d="M14.707 5.293a1 1 0 0 0-1.414 1.414L17.586 11H4a1 1 0 1 0 0 2h13.586l-4.293 4.293a1 1 0 0 0 1.414 1.414l6-6a1 1 0 0 0 0-1.414l-6-6z" />
    </svg>
  </div>
);


// interface CardProps {
//   title: string;
//   onClick: () => void;
// }

// const Card: React.FC<CardProps> = ({ title, onClick }) => (
//   <div
//     className="p-4 bg-gray-50 rounded-lg shadow cursor-pointer hover:bg-gray-100"
//     onClick={onClick}
//   >
//     <h2 className="text-xl">{title}</h2>
//   </div>
// );

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
