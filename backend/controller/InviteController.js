// import crypto from "crypto";
import crypto from "crypto";
import nodemailer from "nodemailer";
import { User } from "../model/userModel.js";
import { Invitation } from "../model/invitationModel.js";

// Invitation controller
export const sendInvite = async (req, res) => {
  const senderId = req.id;
  const { email, message } = req.body;

  try {
    // If  email is already registered
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already registered." });
    }

    // Generating unique token
    const token = crypto.randomBytes(32).toString("hex");

    // Create invitation in database
    await Invitation.create({
      senderId,
      email,
      message,
      token,
    });

    // Send the invitation email
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const inviteLink = `http://localhost:3000/register?inviteToken=${token}`;
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "You're Invited to Join Our Chat App",
      text: `${message}\nClick the link to join: ${inviteLink}`,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Invitation sent successfully!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error sending invite." });
  }
};
