import express from "express";
import {
  createHotel,
  updateHotel,
  deleteHotel,
  getHotel,
  getHotels,
  countByCity,
  countByType,
} from "../controllers/hotel.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

//create hotels
router.post("/", verifyAdmin, createHotel);
//update hotels
router.put("/:id", verifyAdmin, updateHotel);
//delete hotels
router.delete("/:id", verifyAdmin, deleteHotel);
//get a specefic hotel
router.get("/find/:id", getHotel);

//get all hotels
router.get("/", getHotels);
router.get("/countByCity", countByCity);
router.get("/countByType", countByType);

export default router;
