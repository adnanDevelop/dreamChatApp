import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(
  {
    senderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    groupId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Group",
    },
    conversationId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Conversation",
    },
    // receiverId: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "User",
    // },
    message: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const Message = new mongoose.model("Message", messageSchema);
