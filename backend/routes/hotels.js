// libraries
import express from "express";
import mongoose from "mongoose";

// modules
import Hotel from "../models/Hotel.js"
import { createHotel, delteHotel, getAllHotel, getOneHotel, updateHotel } from "../Controllers/hotel.js";
import { createError } from "../utils/error.js";


const router =express.Router()
router.post("/", createHotel);
router.put("/:id",updateHotel);
router.delete("/:id",delteHotel);
router.get("/:id",getOneHotel);
router.get("/",getAllHotel);

export default router;
