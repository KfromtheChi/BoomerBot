const { GoogleGenerativeAI } = require("@google/generative-ai");

// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(process.env.API_KEY);

// ...

const geminiModel = genAI.getGenerativeModel({ model: "gemini-pro-vision"});

// ...
module.exports = {
  genAI,
  geminiModel,
}