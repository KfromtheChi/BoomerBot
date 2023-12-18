const express = require("express");
const router = express.Router();
const genAI = require("../../config/generativeAIConfig");

async function askGemini(req, res) {
  const { prompt } = req.body;

  try {
    // Use genAI to interact with the GoogleGenerativeAI model
    const model = genAI.geminiModel;
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    console.log(text);


    // Handle the result and send the response
    res.json({ response: result.response.text() });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

module.exports = {
  askGemini,
};
