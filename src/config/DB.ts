import mongoose from "mongoose";
import { MONGO_URL } from "./index";

export const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URL);
    console.log("✅ MongoDB Connected");
  } catch (error) {
    console.error("❌ DB Connection Failed:", error);
    process.exit(1);
  }
};
