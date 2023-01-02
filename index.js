const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
mongoose.set("strictQuery", false);
//middlewares
app.use(cors());
app.use(express.json());

//connect with mongodb
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB);
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("Mongodb disconnected");
});
mongoose.connection.on("connected", () => {
  console.log("Mongodb connected");
});

app.get("/", (req, res) => {
  res.send("This is book now app server root");
});

app.listen(port, () => {
  connectDB();
  console.log(`Book Now app listening on port ${port}`);
});
