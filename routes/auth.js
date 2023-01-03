import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Welcome again from auth route");
});
router.get("/register", (req, res) => {
  res.send("Welcome again from auth route register");
});

export default router;
