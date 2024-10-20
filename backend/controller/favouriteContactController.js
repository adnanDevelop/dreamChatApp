import { FavouriteContact } from "../model/favouriteContactModel.js";
import { errorHandler, responseHandler } from "../utils/handler.js";

// Favourite Contact controller
export const addFavourite = async (req, res) => {
  try {
    const userId = req.id;
    const contactId = req.params.id;

    const userFavourites = await FavouriteContact.findOne({ userId });

    if (!userFavourites) {
      await FavouriteContact.create({
        userId,
        favouriteContacts: [contactId],
      });
      return res.status(201).json({ message: "Contact added to favourites." });
    }

    if (userFavourites.favouriteContacts.includes(contactId)) {
      return res
        .status(400)
        .json({ message: "Contact is already in favourites." });
    }

    userFavourites.favouriteContacts.push(contactId);
    await userFavourites.save();

    // return responseHandler(res, 200, "Contact added to favourites.");
    return res
      .status(201)
      .json({ status: 200, message: "Contact added to favourites." });
  } catch (error) {
    errorHandler(res, 400, error.message);
  }
};

// Unfavourite Contact controller
export const removeFavourite = async (req, res) => {
  try {
    // const userId = req.id;
    const { ids } = req.body;
    const userId = req.params.id;

    const findUser = await FavouriteContact.findOne({ userId });

    if (!findUser) {
      return errorHandler(res, 404, "User's favourites not found.");
    }

    const originalLength = findUser.favouriteContacts.length;

    // Filter out all the contact IDs that are present in the array 'ids'
    findUser.favouriteContacts = findUser.favouriteContacts.filter(
      (contact) => !ids.includes(contact.toString())
    );

    await findUser.save();

    return res.status(200).json({
      message:
        originalLength > 1
          ? "Selected contacts removed successfully"
          : "Contact removed from favourites.",
    });
  } catch (error) {
    errorHandler(res, 400, error.message);
  }
};

// Get Favourite Contact controller
export const getFavouriteContact = async (req, res) => {
  try {
    const userId = req.params.id;

    const findFavouties = await FavouriteContact.findOne({ userId }).populate([
      {
        path: "favouriteContacts",
        select: "fullName userName email profilePhoto",
      },
    ]);

    if (!findFavouties) {
      return errorHandler(res, 404, "User's favourites not found.");
    } else {
      return responseHandler(res, 200, findFavouties.favouriteContacts);
    }
  } catch (error) {
    return errorHandler(res, 400, error.message);
  }
};
