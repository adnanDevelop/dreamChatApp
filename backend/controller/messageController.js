import { Message } from "../model/messageModel.js";
import { Conversation } from "../model/conversationModel.js";
import { errorHandler, responseHandler } from "../utils/handler.js";

// Send message controller
export const sendMessage = async (req, res) => {
  try {
    const senderId = req.id;
    const receiverId = req.params.id;
    const { message } = req.body;

    // // Check if the receiver is a friend of the sender
    // const sender = await User.findById(senderId).populate("friends");
    // const isFriend = sender.friends.some(
    //   (friend) => friend._id.toString() === receiverId
    // );

    // if (!isFriend) {
    //   return errorHandler(
    //     res,
    //     403,
    //     "You can only send messages to your friends."
    //   );
    // }

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
      conversationId: gotConversation._id,
    });

    // Update conversation with new message
    if (newMessage) {
      gotConversation.messages.push(newMessage._id);
      await gotConversation.save();
    }

    return responseHandler(res, 200, newMessage, "Message sent successfully");
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
