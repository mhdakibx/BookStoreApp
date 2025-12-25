// প্রথমেই environment variables load করা
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();

import express from "express";
import mongoose from "mongoose";

import bookRoute from './route/book.route.js';
import userRoute from './route/user.route.js';

const app = express();
// 👉 Middleware
app.use(cors());
app.use(express.json());

// 👉 MongoDB connect
mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.log("MongoDB connection error:", err));

// 👉 Routes
app.use('/book', bookRoute);
app.use('/user', userRoute);

// Server start
const PORT = process.env.PORT || 4001;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
