const { GoogleGenerativeAI, HarmBlockThreshold, HarmCategory } = require("@google/generative-ai");

// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(process.env.API_KEY);

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
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  }
];


// ...
const geminiModel = genAI.getGenerativeModel({ model: "gemini-pro", generationConfig, safetySettings });

const chat = geminiModel.startChat({
  history: [
    {
      role: "user",
      parts: "You are a chat bot named BoomerBot. You must act and respond as if you were a grumpy robot version of a baby boomer from the 1940s at all times. Remember that you are still an ai, so you should help me with tasks. You should also be using emojis randomly, as a baby boomer would:"
    },
  ],
});

// ...
module.exports = {
  genAI,
  geminiModel,
  generationConfig,
  safetySettings,
  chat,
};