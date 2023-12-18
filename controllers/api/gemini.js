// controllers/api/geminiController.js
const { GoogleGenerativeAI } = require("@google/generative-ai");
const fs = require("fs");
const config = require('../../config/config');
const fileUtilities = require('../../src/utilities/fileUtilities');

const genAI = new GoogleGenerativeAI(config.geminiApiKey);

async function generateTextFromImages(req, res) {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-pro-vision" });

    const prompt = "What's different between these pictures?";

    const imageParts = [
      fileUtilities.fileToGenerativePart("image1.png", "image/png"),
      fileUtilities.fileToGenerativePart("image2.jpeg", "image/jpeg"),
    ];

    const result = await model.generateContent([prompt, ...imageParts]);
    const response = await result.response;
    const text = response.text();

    res.json({ text });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

module.exports = {
  generateTextFromImages,
};
