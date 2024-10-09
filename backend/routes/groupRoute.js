import express from "express";
import {
  createGroup,
  deleteGroup,
  getAllGroups,
  updateGroup,
} from "../controller/groupController.js";
import isAuthenticated from "../middleware/isAuthenticated.js";
const router = express.Router();

router.route("/create").post(isAuthenticated, createGroup);
router.route("/update").put(isAuthenticated, updateGroup);
router.route("/delete/:id").delete(isAuthenticated, deleteGroup);
router.route("/get-groups").get(isAuthenticated, getAllGroups);

export default router;
