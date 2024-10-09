import mongoose from "mongoose";

const groupSchema = new mongoose.Schema({
  groupName: { type: String, required: true },
  groupAdmin: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  groupMembers: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  description: { type: String },
  messages: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Message",
    },
  ],
});

export const Group = new mongoose.model("Group", groupSchema);
