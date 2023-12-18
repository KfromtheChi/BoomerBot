// routes/api/geminiRoutes.js
const express = require("express");
const geminiController = require("../../controllers/api/geminiController");

const router = express.Router();

// router.post('/generate-text-from-images', geminiController.generateTextFromImages);
router.post("/ask", geminiController.askGemini);

module.exports = router;
