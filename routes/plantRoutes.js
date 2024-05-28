const express = require("express");
const router = express.Router();
const Plant = require("../models/Plant");

// GET ROUTES
// ---------------------------------------------
// Get all plants
router.get("/", async (req, res) => {
  try {
    const plants = await Plant.find();
    res.json(plants);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get a single plant by ID
router.get("/:id", async (req, res) => {
  try {
    const plant = await Plant.findById(req.params.id);
    if (plant) {
      res.json(plant);
    } else {
      res.status(404).send("Plant not found");
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
// ---------------------------------------------

module.exports = router;
