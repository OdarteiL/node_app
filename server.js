const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const movieRoutes = require("./routes/appRouter");
const cors = require("cors");

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;
const uri = process.env.MONGODB_URI;

app.use(cors());

mongoose.connect(uri);

const db = mongoose.connection;

db.on("error", (err) => {
  console.error("MongoDB connection error:", err);
  process.exit(1);
});

db.once("open", () => {
  console.log("Connected to MongoDB");
});

app.use(express.json());
app.use("/movies", movieRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
