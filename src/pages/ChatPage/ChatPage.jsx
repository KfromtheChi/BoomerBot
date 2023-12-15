import React, { useState } from 'react';
import MessagePane from './MessagePane';
import ChatPane from './ChatPane';
import './ChatPage.css';

export default function ChatPage() {
  const [messages, setMessages] = useState([]);

  const sendMessage = (message) => {
    setMessages([...messages, { from: 'user', text: message }]);
    // Here you would typically make an API call to get the AI's response
    // For now, we'll just simulate a response
    const aiResponse = 'This is a simulated response.';
    setMessages((prevMessages) => [
      ...prevMessages,
      { from: 'ai', text: aiResponse }
    ]);
  };

  return (
    <div className="chat-page">
      <ChatPane messages={messages} />
      <MessagePane onSendMessage={sendMessage} />
    </div>
  );
};
