import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import authRoute from "./routes/auth.js"
import userRoute from "./routes/users.js"
import roomRoute from "./routes/rooms.js"
import hotelRoute from "./routes/hotels.js"
dotenv.config();
const app = express();

const connectdb = async () => {
  await mongoose
    .connect(process.env.MONGO)
    .then((e) => {
      console.log("connected to the database");
    })
    .catch((e) => {
      console.log("--------failed\n", e);
    });
};

// middlewares
// -----error handling middleware


app.use(cookieParser())
app.use(express.json())
app.use((req,res,next)=>{
  res.setHeader("Access-Control-Allow-Origin","http://localhost:3000");
  res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
})
app.use("/auth",authRoute);
app.use("/users",userRoute);
app.use("/rooms",roomRoute);
app.use("/hotel",hotelRoute);

app.use((err,req,res, next)=>{
  const errStatus=err.status||500;
  const errMsg=err.message||"something went wrong";
  return res.status(errStatus).json({
    success:false,
    status:errStatus,
    message:errMsg,
    stack:err.stack
  })
})

app.listen(8800, () => {
  connectdb();
  console.log("listening on  port 8800");
});
