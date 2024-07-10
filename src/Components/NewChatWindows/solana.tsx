import React, { useState } from 'react';

const SolanaChatApp: React.FC = () => {
  const [message, setMessage] = useState<string>('');
  const [messages, setMessages] = useState<string[]>([]);

  const sendMessage = async () => {
    if (!message) return;

    const response = await fetch(`/api/actions/chat?message=${encodeURIComponent(message)}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ account: '7assT46TtcP5jg1FXSnPtSZo4zCJWME7kBcwUFtCvqhL' }) // Replace with actual public key
    });

    const data = await response.json();
    console.log(data);

    // Display the message for demo purposes
    setMessages([...messages, message]);
    setMessage('');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Solana Chat Action</h1>
      <div id="chatBox" className="w-full max-w-lg p-4 border border-gray-300 rounded mb-4 bg-white shadow">
        {messages.map((msg, index) => (
          <p key={index}>{msg}</p>
        ))}
      </div>
      <input
        type="text"
        id="messageInput"
        placeholder="Enter your message"
        className="w-full max-w-lg p-2 border border-gray-300 rounded mb-4"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button
        onClick={sendMessage}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Send
      </button>
    </div>
  );
};

export default SolanaChatApp;
