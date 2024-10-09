import { Group } from "../model/groupModel.js";
import { Message } from "../model/messageModel.js";
import { errorHandler, responseHandler } from "../utils/handler.js";

// Create Group Controller
export const createGroup = async (req, res) => {
  try {
    const userId = req.id;
    const { groupName, description, groupMembers } = req.body;

    const isGroupExist = await Group.findOne({ groupName });
    if (isGroupExist) {
      return responseHandler(res, 400, "Group already exist with this name");
    }

    const newGroup = await Group.create({
      groupName,
      groupAdmin: userId,
      groupMembers,
      description,
    });

    return responseHandler(res, 200, newGroup, "Group created successfully");
  } catch (error) {
    return errorHandler(res, 400, error.message);
  }
};

// Update group controller
export const updateGroup = async (req, res) => {
  try {
    const { groupId } = req.params;
    const { groupName, description, groupMembers } = req.body;

    const group = await Group.findById(groupId);
    if (!group) {
      return responseHandler(res, 403, "Group not found");
    }

    const updateGroup = await Group.updateOne(
      {
        _id: groupId,
      },
      {
        $set: {
          groupName,
          groupMembers,
          description,
        },
      }
    );

    if (updateGroup.modifiedCount !== 1) {
      return errorHandler(res, 400, "Group not updated");
    } else {
      return responseHandler(res, 200, "Group updated successfully");
    }
  } catch {
    return errorHandler(res, 400, error.message);
  }
};

// Delete Group Controller
export const deleteGroup = async (req, res) => {
  try {
    const { groupId } = req.params;
    const deleteGroup = await Group.deleteOne({ _id: groupId });

    if (deleteGroup.deletedCount !== 1) {
      return errorHandler(res, 400, "Group not deleted");
    } else {
      return responseHandler(res, 200, "Group deleted successfully");
    }
  } catch (error) {
    return errorHandler(res, 400, error.message);
  }
};

// Get all groups controller
export const getAllGroups = async (req, res) => {
  try {
    const userId = req.id;
    const groups = await Group.find({ groupAdmin: userId }).populate(
      "groupMembers"
    );

    return responseHandler(res, 200, groups, "Groups retrieved successfully");
  } catch (error) {
    return errorHandler(res, 400, error.message);
  }
};

// Send message for group
export const sendGroupMessage = async (req, res) => {
  try {
    const senderId = req.id;
    const { groupId, message } = req.body;

    // Create a new message for the group
    const newMessage = await Message.create({
      senderId,
      groupId,
      message,
    });

    // Update the group with the new message
    const group = await Group.findById(groupId);
    group.messages.push(newMessage._id);
    await group.save();

    return responseHandler(res, 200, "Group message sent successfully");
  } catch (error) {
    return errorHandler(res, 400, error.message);
  }
};

// Get messages for a specific group
export const getGroupMessages = async (req, res) => {
  try {
    const { groupId } = req.params; // Get groupId from URL parameters

    const messages = await Message.find({ groupId }).populate("senderId");

    return responseHandler(
      res,
      200,
      messages,
      "Group messages retrieved successfully"
    );
  } catch (error) {
    return errorHandler(res, 400, error.message);
  }
};
