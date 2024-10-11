import mongoose from "mongoose";

const favouriteContactSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  favouriteContacts: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
});

export const FavouriteContact = new mongoose.model(
  "FavouriteContact",
  favouriteContactSchema
);
