import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
import hotelsRoute from "./routes/hotels.js";
import roomsRoute from "./routes/rooms.js";
import usersRoute from "./routes/users.js";
import cookieParser from "cookie-parser";
dotenv.config();

const app = express();
const port = process.env.PORT || 5000;
mongoose.set("strictQuery", false);

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

//middlewares
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use("/server/auth", authRoute);
app.use("/server/hotels", hotelsRoute);
app.use("/server/rooms", roomsRoute);
app.use("/server/users", usersRoute);

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Somethig went wrong";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

// app.get("/", (req, res) => {
//   res.send("welcome to root");
// });

app.listen(port, () => {
  connectDB();
  console.log(`Book Now app listening on port ${port}`);
});
