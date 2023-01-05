import express from "express";
import {
  createHotel,
  updateHotel,
  deleteHotel,
  getHotel,
  getHotels,
} from "../controllers/hotel.js";

const router = express.Router();

//create hotels
router.post("/", createHotel);
//update hotels
router.put("/:id", updateHotel);
//delete hotels
router.delete("/:id", deleteHotel);
//get a specefic hotel
router.get("/:id", getHotel);

//get all hotels
router.get("/", getHotels);

export default router;
