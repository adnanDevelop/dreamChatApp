import express from "express";
import {
  addFavourite,
  removeFavourite,
  getFavouriteContact,
} from "../controller/favouriteContactController.js";
import isAuthenticated from "../middleware/isAuthenticated.js";

const router = express.Router();

router.route("/add-favourite/:id").post(isAuthenticated, addFavourite);
router.route("/remove-favourite/:id").put(isAuthenticated, removeFavourite);
router.route("/get-favourite/:id").get(isAuthenticated, getFavouriteContact);

export default router;
