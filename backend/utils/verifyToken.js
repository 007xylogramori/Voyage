import jwt from "jsonwebtoken";
import { createError } from "./error.js";

export const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) {
    return next(createError(401, "you are not authenticated"));
  }
  jwt.verify(token, process.env.JWT, (err, user) => {
      if (err) return next(createError(403, "Token is not Valid"));
      req.user = user;
      next();
    });
};

export const verifyUser=(req, res, next) => {
    verifyToken(req,res,()=>{
        // to check if we are the owner of id or not or if the person is the admin
        if (req.user.id===req.params.id || req.user.isAdmin){
            console.log(req.user)
            next()
        }
        else{
            if (err) next(createError(403,"You are not authourized"))
        }
    })
  };

export const verifyAdmin=(req, res, next) => {
    verifyToken(req,res,next,()=>{
        // to check if we are the owner of id or not or if the person is the admin
        if (req.user.isAdmin){
            console.log(req.user)
            next()
        }
        else{
            if (err) next(createError(403,"You are not authourized"))
        }
    })
  };
  