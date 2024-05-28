const mongoose = require("mongoose");

const plantSchema = new mongoose.Schema({
  title: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  thumbnail: { type: String, required: true },
  inStock: { type: Boolean, default: true },
});

const Plant = mongoose.model("Plant", plantSchema);

module.exports = Plant;
