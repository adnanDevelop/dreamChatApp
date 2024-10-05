import { Message } from "../model/messageModel.js";
import { Conversation } from "../model/conversationModel.js";
import { errorHandler, responseHandler } from "../utils/handler.js";

// Send message controller
export const sendMessage = async (req, res) => {
  try {
    const senderId = req.id;
    const receiverId = req.params.id;
    const { message } = req.body;

    // Check if conversation already exists
    let gotConversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] },
    });

    // If not, create a new conversation
    if (!gotConversation) {
      gotConversation = await Conversation.create({
        participants: [senderId, receiverId],
      });
    }

    // Create a new message
    const newMessage = await Message.create({
      senderId,
      receiverId,
      message,
    });

    // Update conversation with new message
    if (newMessage) {
      gotConversation.messages.push(newMessage._id);
      await gotConversation.save();
    }

    return responseHandler(res, 200, "Message sent successfully");
  } catch (error) {
    return errorHandler(res, 400, error.message);
  }
};

// Get message controller
export const getMessage = async (req, res) => {
  try {
    const senderId = req.id;
    const receiverId = req.params.id;

    const getMessage = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] },
    }).populate("messages");

    return responseHandler(
      res,
      200,
      getMessage.messages,
      "Data retreived successfully"
    );
  } catch (error) {
    return errorHandler(res, 400, error.message);
  }
};
