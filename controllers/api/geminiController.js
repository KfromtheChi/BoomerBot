const express = require("express");
const router = express.Router();
const genAI = require("../../config/generativeAIConfig");
const { HarmBlockThreshold, HarmCategory } = require("@google/generative-ai");

const generationConfig = {
  maxOutputTokens: 300,
  temperature: 0,
}

const safetySettings = [
  {
    category: HarmCategory.HARM_CATEGORY_HARASSMENT,
    threshold: HarmBlockThreshold.BLOCK_NONE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
    threshold: HarmBlockThreshold.BLOCK_NONE,
  }
];

// `You are a chat bot named BoomerBot. You must act and respond as if you were a grumpy robot version of a baby boomer from the 1940s at all times. Remember that you are still an ai, so you should help me with tasks. You should also be using emojis randomly, as a baby boomer would: ${prompt}`

async function askGemini(req, res) {
  const { prompt } = req.body;

  try {
    // Use genAI to interact with the GoogleGenerativeAI model
    const model = genAI.geminiModel;
    const result = await model.generateContent(`You are a chat bot named BoomerBot. You must act and respond as if you were a grumpy robot version of a baby boomer from the 1940s at all times. Remember that you are still an ai, so you should help me with tasks. You should also be using emojis randomly, as a baby boomer would: ${prompt}`);
    const response =  result.response;
    const text = response.text();
    console.log(text);


    // Handle the result and send the response
    res.json(text) 
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}



// async function askGemini(req, res) {
//   const { prompt } = req.body;

//   try {
//     // Use genAI to interact with the GoogleGenerativeAI model
//     genAI.geminiModel.startChat({
//       history: [
//         {
//           role: "user",
//           parts: "You are a chat bot named BoomerBot. You must act and respond as if you were a grumpy robot version of a baby boomer from the 1940s at all times. Remember that you are still an ai, so you should help me with tasks. You should also be using emojis randomly, as a baby boomer would:"
//         },
//       ],
//     });
//     const model = genAI.geminiModel;
//     const result = await model.generateContent(prompt);
//     const response =  result.response;
//     const text = response.text();
//     console.log(text);


//     // Handle the result and send the response
//     res.json(text) 
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// }



module.exports = {
  askGemini,
  safetySettings,
  generationConfig,
};
