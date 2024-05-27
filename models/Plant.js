const mongoose = require("mongoose");

const plantSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  price: { type: Number, required: true },
  inStock: { type: Boolean, default: true },
  imageUrl: String,
});

const Plant = mongoose.model("Plant", plantSchema);

module.exports = Plant;
