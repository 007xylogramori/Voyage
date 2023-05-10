import express from "express";
import {
  updateUser,
  delteUser,
  getAllUser,
  getOneUser,
} from "../Controllers/user.js";
import { verifyToken } from "../utils/verifyToken.js";
const router = express.Router();
router.get("/checkauthentication", verifyToken, (req, res, next) => {
  res.send("hello u are authenticated");
});
router.put("/:id", updateUser);
router.delete("/:id", delteUser);
router.get("/:id", getOneUser);
router.get("/", getAllUser);

export default router;
