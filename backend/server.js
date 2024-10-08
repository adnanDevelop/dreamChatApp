import cors from "cors";
import express from "express";
const app = express();
import dotenv from "dotenv";
dotenv.config({ path: ".env" });
import connectDb from "./db/db.js";
import cookieParser from "cookie-parser";

// Routes Files
import userRoute from "./routes/userRoute.js";
import messageRoute from "./routes/messageRoute.js";

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

// Server running
const PORT = process.env.PORT || 3000;

app.listen(PORT, async () => {
  await connectDb();
  console.log(`Server is running at port no: ${PORT}`);
});
