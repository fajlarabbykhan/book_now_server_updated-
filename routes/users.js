import express from "express";

import {
  updateUser,
  deleteUser,
  getUser,
  getUsers,
} from "../controllers/user.js";
import { verifyToken } from "../utils/verifyToken.js";

const router = express.Router();

router.get("/checkauthentication", verifyToken, (req, res, next) => {
  res.send("Hollo user, you are logged in");
});
//update Users
router.put("/:id", updateUser);
//delete Users
router.delete("/:id", deleteUser);
//get a specefic User
router.get("/:id", getUser);

//get all Users
router.get("/", getUsers);

export default router;
