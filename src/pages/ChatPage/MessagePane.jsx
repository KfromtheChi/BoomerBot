import React, { useState } from 'react';
import './MessagePane.css';

export default function MessagePane({ onSendMessage }) {
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim()) {
      onSendMessage(message);
      setMessage('');
    }
  };

  return (
    <form className="message-pane" onSubmit={handleSubmit}>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Message BoomerBot..."
      />
      <button type="submit">Ask</button>
    </form>
  );
};
