import User from "../models/User.js";

// ---- UserUpdate-----

export const updateUser=async(req,res,next)=>{
    try {
        const updatedUser=await User.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
        res.status(200).json(updatedUser)
    } catch (error) {
        next(error)    }

}
// -----delteUser------

export const delteUser=async(req,res,next)=>{
    try {
        await User.findByIdAndDelete(req.params.id,{$set:req.body})
        res.status(200).json(`Successfuly Deleted ${req.params.id}`)
    } catch (error) {
        next(error)    }

}
// ------getOneUser

export const getOneUser=async(req,res,next)=>{
    try{
        const user=await User.findById(req.params.id);
        res.status(200).json(user)
    }
    catch (error) {
        next(error)   }
}
// ---------getAllUser

export const getAllUser=async(req,res,next)=>{
    try{
        const user=await User.find();
        res.status(200).json(user)
    }
    catch (error) {
       next(error)    }
}
