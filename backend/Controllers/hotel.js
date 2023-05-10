import Hotel from "../models/Hotel.js";

// ----createHotel

export const createHotel = async (req, res, next) => {
  const newHotel = new Hotel(req.body);
  try {
    const savedHotel = await newHotel.save();
    res.status(200).json(savedHotel);
  } catch (error) {
    next(error);
  }
};
// ---- HotelUpdate-----

export const updateHotel=async(req,res,next)=>{
    try {
        const updatedHotel=await Hotel.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
        res.status(200).json(updatedHotel)
    } catch (error) {
        next(error)    }

}
// -----delteHotel------

export const deleteHotel=async(req,res,next)=>{
    try {
        await Hotel.findByIdAndDelete(req.params.id,{$set:req.body})
        res.status(200).json(`Successfuly Deleted ${req.params.id}`)
    } catch (error) {
        next(error)    }

}
// ------getOneHotel

export const getOneHotel=async(req,res,next)=>{
    try{
        const hotel=await Hotel.findById(req.params.id);
        res.status(200).json(hotel)
    }
    catch (error) {
        next(error)   }
}
// ---------getAllHotel

export const getAllHotel=async(req,res,next)=>{
    try{
        const hotel=await Hotel.find();
        res.status(200).json(hotel)
    }
    catch (error) {
       next(error)    }
}
