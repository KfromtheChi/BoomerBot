import React, { useEffect, useState } from 'react';

const ChatLogsPage = () => {
    const [chatLogs, setChatLogs] = useState([]);

    useEffect(() => {
        const fetchChatLogs = async () => {
            try {
                const response = await fetch('/api/chat-logs');
                if (!response.ok) {
                    throw new Error('Failed to fetch chat logs');
                }
                const logs = await response.json();
                setChatLogs(logs);
            } catch (error) {
                console.error('Error fetching chat logs:', error);
            }
        };

        fetchChatLogs();
    }, []);

    return (
        <div>
            <h1>Chat Logs</h1>
            <ul>
                {chatLogs.map((log, index) => (
                    <li key={index}>{log.message}</li>
                ))}
            </ul>
        </div>
    );
};

export default ChatLogsPage;
