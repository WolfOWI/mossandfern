const express = require("express");
const router = express.Router();
const Plant = require("../models/Plant");

// Get all plants
router.get("/", async (req, res) => {
  try {
    const plants = await Plant.find();
    res.json(plants);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
