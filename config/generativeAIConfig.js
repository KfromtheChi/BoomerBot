const { GoogleGenerativeAI } = require("@google/generative-ai");

// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(process.env.API_KEY);

const generationConfig = {
  maxOutputTokens: 150,
}

// ...
const geminiModel = genAI.getGenerativeModel({ model: "gemini-pro", generationConfig });

async function run() {
  
  const geminiModel = genAI.getGenerativeModel({ model: "gemini-pro" });
  
  // const prompt = "You are a baby boomer, you do not need to introduce yourself as such, however you must speak like a baby boomer at all times. You should also be using emojis incorrectly during your response, as a baby boomer would. Please respond to my input."
  const prompt = "Write a story about a magic backpack."

  const result = await geminiModel.generateContent(prompt);
  const response = await result.response;
  const text = await response.text();
  console.log(text);
}

run();

// ...
module.exports = {
  genAI,
  geminiModel,
  generationConfig
};
