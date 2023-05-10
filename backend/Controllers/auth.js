import User from "../models/User.js";
import bcrypt from "bcrypt";
import { createError } from "../utils/error.js";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
dotenv.config();
export const register = async (req, res, next) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    const newUser = new User({
      username: req.body.username,
      password: hash,
      email: req.body.email,
    });
    await newUser.save();
    res.status(200).send("user has been created");
  } catch (error) {}
};
export const login = async (req, res, next) => {
  try {
    const user = await User.findOne({
      username: req.body.username,
    });
    if (!user) {
      return next(createError(400, "username is wrong"));
    }

    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (!isPasswordCorrect)
      return next(createError(400, "user password is wrong"));

    const token = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      process.env.JWT
    );

    const { password, isAdmin, ...otherdetails } = user._doc;
    res
      .cookie("access_token", token, { httpOnly: true,  })
      .status(200)
      .json({ ...otherdetails });
  } catch (error) {
    next(error);
  }
};
