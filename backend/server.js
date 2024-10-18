import express from "express";
import { app, server } from "./socket/socket.js";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config({ path: ".env" });
import connectDb from "./db/db.js";
import cookieParser from "cookie-parser";

// Routes Files
import userRoute from "./routes/userRoute.js";
import groupRoute from "./routes/groupRoute.js";
import inviteRoute from "./routes/InviteRoute.js";
import messageRoute from "./routes/messageRoute.js";
import favouriteContactRoute from "./routes/favouriteContactRoute.js";

// Configure CORS
const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true,
};

// Middlewares
app.use(cookieParser());
app.use(express.json());
app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/auth", userRoute);
app.use("/api/message", messageRoute);
app.use("/api/invite", inviteRoute);
app.use("/api/group", groupRoute);
app.use("/api/contact", favouriteContactRoute);

// Server running
const PORT = process.env.PORT || 3000;

server.listen(PORT, async () => {
  await connectDb();
  console.log(`Server is running at port no: ${PORT}`);
});
