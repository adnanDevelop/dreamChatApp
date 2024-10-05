import { errorHandler } from "../utils/handler.js";
export const sendMessage = async (req, res) => {
  try {
    


  } catch (error) {
    return errorHandler(res, 400, error.message);
  }
};
