const express = require('express');
const router = express.Router();
const ChatLog = require('../../models/chatlog');

router.get('/chat-logs', async (req, res) => {
  try {
    const chatLogs = await ChatLog.find().sort({ timestamp: -1 });
    res.json(chatLogs);
  } catch (error) {
    console.error('Error fetching chat logs:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// saves new chat log
router.post('/chat-logs', async (req, res) => {
  const { user, message } = req.body;

  try {
    const newChatLog = new ChatLog({ user, message });
    await newChatLog.save();
    res.status(201).json(newChatLog);
  } catch (error) {
    console.error('Error saving chat log:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;