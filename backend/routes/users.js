import express from "express";
import {
  updateUser,
  delteUser,
  getAllUser,
  getOneUser,
} from "../Controllers/user.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";
const router = express.Router();


// router.get("/checkauthentication", verifyToken, (req, res, next) => {
//   res.send("hello u are authenticated");
// });
// router.get("/checkuser/:id", verifyUser, (req, res, next) => {
//   res.send("hello u are authenticated and you can delete account");
// });


router.put("/:id",verifyUser, updateUser);
router.delete("/:id",verifyUser, delteUser);
router.get("/:id", verifyUser, getOneUser);
router.get("/",verifyAdmin, getAllUser);

export default router;
