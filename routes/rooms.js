import express from "express";
import {
  createRoom,
  updateRoom,
  deleteRoom,
  getRoom,
  getRooms,
} from "../controllers/room.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

//create rooms
router.post("/:hotelid", verifyAdmin, createRoom);
//update rooms
router.put("/:id", verifyAdmin, updateRoom);
//delete roomss
router.delete("/:id/:hotelid", verifyAdmin, deleteRoom);
//get a specefic room
router.get("/:id", getRoom);

//get all room
router.get("/", getRooms);

export default router;
