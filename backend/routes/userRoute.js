import express from "express";
import {
  deleteUser,
  getAllUsers,
  login,
  logout,
  register,
} from "../controller/userController.js";
import isAuthenticated from "../middleware/isAuthenticated.js";
const router = express.Router();

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/logout").get(logout);
router.route("/delete-user/:id").delete(deleteUser);
router.route("/user").get(isAuthenticated, getAllUsers);

export default router;
