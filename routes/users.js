import express from "express";

import {
  updateUser,
  deleteUser,
  getUser,
  getUsers,
} from "../controllers/user.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

// router.get("/checkauthentication", verifyToken, (req, res, next) => {
//   res.send("Hollo user, you are logged in");
// });
// router.get("/checkuser/:id", verifyUser, (req, res, next) => {
//   res.send("Hollo user, you are logged in and you can delete your account");
// });
// router.get("/checkadmin/:id", verifyAdmin, (req, res, next) => {
//   res.send("Hollo admin, you are logged in and you can delete all accounts");
// });

//update Users
router.put("/:id", verifyUser, updateUser);
//delete Users
router.delete("/:id", verifyUser, deleteUser);
//get a specefic User
router.get("/:id", verifyUser, getUser);

//get all Users
router.get("/", verifyAdmin, getUsers);

export default router;
