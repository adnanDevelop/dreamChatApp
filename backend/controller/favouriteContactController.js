import { User } from "../model/userModel.js";
import { errorHandler, responseHandler } from "../utils/handler.js";

// Favourite Contact controller
export const addFavourite = async (req, res) => {
  try {
    const userId = req.id;
    const contactId = req.params.id;

    const getUser = await User.findById({ _id: userId });
    const isContactExist = getUser.favouriteContacts.includes(contactId);

    if (!isContactExist) {
      getUser.favouriteContacts.push(contactId);
      await getUser.save();
      return responseHandler(res, 200, "Contact added successfully");
    } else {
      return errorHandler(res, 400, "Contact already exist");
    }
  } catch (error) {
    errorHandler(res, 400, error.message);
  }
};

// Unfavourite Contact controller
export const removeFavourite = async (req, res) => {
  try {
    const userId = req.id;
    const contactId = req.params.id;

    const findUser = await User.findById({ _id: userId });
    const isContactExist = findUser.favouriteContacts.includes(contactId);

    if (isContactExist) {
      findUser.favouriteContacts = findUser.favouriteContacts.filter(
        (contact) => contact !== contactId
      );
      await findUser.save();
      return responseHandler(res, 200, "Contact removed successfully");
    } else {
      return errorHandler(res, 400, "Contact not exist");
    }
  } catch (error) {
    errorHandler(res, 400, error.message);
  }
};
