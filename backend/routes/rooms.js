import express from "express"
import { createRoom, deleteRoom, getAllRoom, getOneRoom, updateRoom } from "../Controllers/room.js";
import { verifyAdmin,verifyToken,verifyUser } from "../utils/verifyToken.js";
const router=express.Router();


router.post("/:hotelid",verifyAdmin, createRoom);
router.put("/:id",verifyAdmin,updateRoom);
router.delete("/:id/:hotelid",verifyAdmin,deleteRoom);
router.get("/:id",getOneRoom);
router.get("/",getAllRoom);


export default router;