import express from "express";
import { getMessage, sendMessage } from "../controller/messageController.js";
import isAuthenticated from "../middleware/isAuthenticated.js";

const router = express.Router();

router.route("/send/:id").post(isAuthenticated, sendMessage);
router.route("/get-messages/:id").get(isAuthenticated, getMessage);

export default router;
