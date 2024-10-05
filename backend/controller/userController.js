import { User } from "../model/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { errorHandler, responseHandler } from "../utils/handler.js";

// Register Controller
export const register = async (req, res) => {
  try {
    const { fullName, userName, email, password, gender } = req.body;
    console.log(req.body);
    if (!fullName || !userName || !email || !password || !gender) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json({ message: "User with this email already exists" });
    }

    const hashPassword = await bcrypt.hash(password, 10);
    const malePicture = `https://avatar.iran.liara.run/public/boy?username=${userName}`;
    const femalePicture = `https://avatar.iran.liara.run/public/girl?username=${userName}`;

    const newUser = await User.create({
      fullName,
      userName,
      email,
      password: hashPassword,
      gender,
      profilePhoto: gender === "male" ? malePicture : femalePicture,
    });
    res.status(201).json({ message: "User created successfully", newUser });
  } catch (error) {
    return errorHandler(res, 400, error.message);
    // return res.status(400).json({ message: error.message });
  }
};

// Login Controller
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const isUserExist = await User.findOne({ email });

    if (!isUserExist) {
      return res.status(404).json({ message: "Invalid email address" });
    }

    const comparePassword = await bcrypt.compare(
      password,
      isUserExist.password
    );

    if (!comparePassword) {
      return res.status(404).json({ message: "Invalid password" });
    }

    // generate token
    const generateToken = jwt.sign(
      {
        userId: isUserExist._id,
      },
      process.env.SECRET_KEY,
      { expiresIn: "1d" }
    );

    const userData = {
      _id: isUserExist._id,
      fullName: isUserExist.fullName,
      userName: isUserExist.userName,
      email: isUserExist.email,
      profilePhoto: isUserExist.profilePhoto,
      gender: isUserExist.gender,
    };

    // login user
    return res
      .status(200)
      .cookie("token", generateToken, {
        maxAge: 1 * 24 * 60 * 60 * 1000,
        httpsOnly: true,
        sameSite: "strict",
      })
      .json({
        message: `Welcome back ${isUserExist?.fullName}`,
        data: userData,
        status_code: 200,
      });
  } catch (error) {
    console.log(error, "Error while loging user");
    return errorHandler(res, 400, error.message);
  }
};

// Delete User Controller
export const deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const deleteUser = await User.deleteOne({ _id: userId });
    if (deleteUser.deletedCount !== 1) {
      return errorHandler(res, 400, "User not deleted");
    } else {
      return responseHandler(res, 200, "User deleted successfully");
    }
  } catch (error) {
    return errorHandler(res, 400, error.message);
  }
};

// Logout Controller
export const logout = async (req, res) => {
  try {
    return res
      .status(200)
      .cookie("token", "", { maxAge: 0 })
      .json({ message: "Logout successfully", status: 200 });
  } catch (error) {
    console.log("error while logout user", error.message);
    return errorHandler(res, 400, error.message);
  }
};

// Get all User except login user
export const getAllUsers = async (req, res) => {
  try {
    const userId = req.id;
    console.log(userId, "loggedIn user");

    const users = await User.find({ _id: { $ne: userId } }).select("-password");
    return responseHandler(res, 200, users, "Data retreived successfully");
  } catch (error) {
    return errorHandler(res, 400, error.message);
    // res.status(400).json({ message: error.message });
  }
};
