const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

// Connect to MongoDB with mongoose
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB", err);
  });

// Message that ensures everything is working.
app.get("/", (req, res) => {
  res.send("Express server is running and ready to receive requests");
});

// ROUTES
// -----------------------------------------------
// Plants Route
const plantRoutes = require("./routes/plantRoutes");
app.use("/plants", plantRoutes);
// -----------------------------------------------

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
