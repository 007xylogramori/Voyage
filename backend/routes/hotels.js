// libraries
import express from "express";
import mongoose from "mongoose";

// modules
import Hotel from "../models/Hotel.js"
import { countByCity, createHotel, deleteHotel, getAllHotel, getOneHotel, updateHotel } from "../Controllers/hotel.js";
import { createError } from "../utils/error.js";
import { verifyAdmin } from "../utils/verifyToken.js";


const router =express.Router()
router.post("/",verifyAdmin, createHotel);
router.put("/:id",verifyAdmin,updateHotel);
router.delete("/:id",verifyAdmin,deleteHotel);
router.get("/find/:id",getOneHotel);
router.get("/",getAllHotel);
router.get("/countByCity",countByCity);
router.get("/countByType",getAllHotel);

export default router;
