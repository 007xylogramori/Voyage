import Room from "../models/Room.js";
import Hotel from "../models/Hotel.js"
import { createError } from "../utils/error.js";

// --------Create room--------

export const createRoom =async(req,res,next)=>{
    const hotelId=req.params.hotelid;
    const newRoom=new Room(req.body);
    try {
        const savedroom = await newRoom.save();
        try {
            await Hotel.findByIdAndUpdate(hotelId,{$push:{rooms:savedroom._id}})
        } catch (error) {
           next(error) 
        }
        res.status(200).json(savedroom);
    } catch (error) {
        next(error)
    }

}

// -------Update Room--------

export const updateRoom=async(req,res,next)=>{
    try {
        const updatedRoom=await Room.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
        res.status(200).json(updatedRoom)
    } catch (error) {
        next(error)    }

}
// -----delteRoom------

export const deleteRoom=async(req,res,next)=>{
    const hotelId=req.params.hotelid;
    try {
        await Room.findByIdAndDelete(req.params.id)
        try{
            await Hotel.findByIdAndUpdate(hotelId,{$pull:{rooms:req.params.id}})
        }
        catch(error){
            next(error);
            
        }
        res.status(200).json(`Successfuly Deleted room:${req.params.id} of hotel:${req.params.hotelid}`)
    } catch (error) {
        next(error)    }

}
// ------getOneRoom

export const getOneRoom=async(req,res,next)=>{
    try{
        const room=await Room.findById(req.params.id);
        res.status(200).json(room)
    }
    catch (error) {
        next(error)   }
}
// ---------getAllRoom

export const getAllRoom=async(req,res,next)=>{
    try{
        const rooms=await Room.find();
        res.status(200).json(rooms)
    }
    catch (error) {
       next(error)    }
}

