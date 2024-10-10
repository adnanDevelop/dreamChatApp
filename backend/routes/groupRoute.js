import express from "express";
import {
  createGroup,
  deleteGroup,
  getAllGroups,
  getGroupMessages,
  sendGroupMessage,
  updateGroup,
} from "../controller/groupController.js";
import isAuthenticated from "../middleware/isAuthenticated.js";
const router = express.Router();

router.route("/create").post(isAuthenticated, createGroup);
router.route("/update").put(isAuthenticated, updateGroup);
router.route("/delete/:id").delete(isAuthenticated, deleteGroup);
router.route("/get-groups").get(isAuthenticated, getAllGroups);
router.route("/send-message/:id").post(isAuthenticated, sendGroupMessage);
router.route("/get-message/:id").get(isAuthenticated, getGroupMessages);

export default router;
