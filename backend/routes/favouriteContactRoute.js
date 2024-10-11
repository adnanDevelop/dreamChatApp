import express from "express";
import {
  addFavourite,
  removeFavourite,
} from "../controller/favouriteContactController.js";
import isAuthenticated from "../middleware/isAuthenticated.js";

const router = express.Router();

router.route("/add-favourite/:id").post(isAuthenticated, addFavourite);
router.route("/remove-favourite/:id").put(isAuthenticated, removeFavourite);

export default router;
