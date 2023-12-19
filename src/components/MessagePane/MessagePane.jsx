import React from 'react';

const MessagePane = ({ onSendMessage, aiResponse, messages }) => {
  return (
    <div>
      {/* Render User and AI Messages */}
      {messages.map((message, index) => (
        <div key={index} className={message.from === 'user' ? 'user-message' : 'ai-message'}>
          <strong>{message.from === 'user' ? 'User:' : 'AI:'}</strong> {message.text}
        </div>
      ))}

      {/* Optionally, render the AI response if available */}
      {aiResponse && (
        <div className="ai-message">
          <strong>AI:</strong> {aiResponse.text}
        </div>
      )}

      {/* Add the logic for sending a new message */}
      {/* This part is not included in your code snippet, but you need to implement it */}
    </div>
  );
};

export default MessagePane;