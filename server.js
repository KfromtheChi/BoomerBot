const express = require("express");
const path = require("path");
const favicon = require("serve-favicon");
const mongoose = require('mongoose');
const logger = require("morgan");
const bodyParser = require("body-parser");
const chatLogRoutes = require('./routes/API/chatLogRoutes');

// Always require and configure near the top
require("dotenv").config();

// Connect to the database
require("./config/database");

const app = express();

app.use(logger("dev"));
app.use(express.json());

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true });

// Configure both serve-favicon & static middleware
// to serve from the production 'build' folder
app.use(favicon(path.join(__dirname, "build", "favicon.ico")));
app.use(express.static(path.join(__dirname, "build")));

// checkToken middleware - verifies token and assigns a user object of payload to req.user
// mount before routes
app.use(require("./config/checkToken"));

const port = process.env.PORT || 3001;

app.use(bodyParser.json());

app.use("/api/gemini", require("./routes/API/geminiRoutes"));

// Use the chatLogRoutes for '/api/chat-logs' route
app.use('/api/chat-logs', chatLogRoutes);

// Put API routes here, before the "catch all" route
app.use("/API/users", require("./routes/API/users"));

// The following "catch all" route (note the *) is necessary
// to return the index.html on all non-AJAX/API requests
app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.get('/api/chat-logs', async (req, res) => {
  try {
    const chatLogs = await ChatLog.find().sort({ timestamp: -1 });
    res.json(chatLogs);
  } catch (error) {
    console.error('Error fetching chat logs:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, function () {
  console.log(`Express app running on port ${port}`);
});
