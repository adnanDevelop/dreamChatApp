import express from "express";
import {
  addFavourite,
  deleteAllFavourite,
  getFavouriteContact,
  removeFavourite,
} from "../controller/favouriteContactController.js";
import isAuthenticated from "../middleware/isAuthenticated.js";

const router = express.Router();

router.route("/add-favourite/:id").post(isAuthenticated, addFavourite);
router.route("/remove-favourite/:id").put(isAuthenticated, removeFavourite);
router.route("/get-favourite").get(isAuthenticated, getFavouriteContact);
router.route("/delete").delete(isAuthenticated, deleteAllFavourite);

export default router;
