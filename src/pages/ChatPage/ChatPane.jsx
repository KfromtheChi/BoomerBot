import React from "react";
import "./ChatPane.css";

export default function ChatPane({ messages, aiResponse }) {
  return (
    <div className="chat-pane">
      {messages.map((msg, index) => (
        <div key={index} className={`message ${msg.from}`}>
          <div className="message-content">{msg.text}</div>
        </div>
      ))}
      {aiResponse && <div className="message ai message-content">{aiResponse}</div>}
    </div>
  );
}
