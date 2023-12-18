import React from 'react';

const MessagePane = ({ onSendMessage, aiResponse }) => {
  return (
    <div>
      {/* Render User Messages */}
      {aiResponse && (
        <div className="ai-message">
          <strong>AI:</strong> {aiResponse}
        </div>
      )}

      {/* Add the existing user message rendering logic here */}
    </div>
  );
};

export default MessagePane;