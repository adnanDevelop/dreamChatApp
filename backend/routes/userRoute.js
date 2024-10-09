import express from "express";
import {
  deleteUser,
  getAllUsers,
  login,
  logout,
  register,
  requestPasswordReset,
  resetPassword,
  updateUser,
} from "../controller/userController.js";
import isAuthenticated from "../middleware/isAuthenticated.js";
const router = express.Router();

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/logout").get(logout);
router.route("/update-user/:id").put(updateUser);
router.route("/delete-user/:id").delete(deleteUser);
router.route("/user").get(isAuthenticated, getAllUsers);
router.route("/request-password-reset").post(requestPasswordReset);
router.route("/reset-password").post(resetPassword);

export default router;
