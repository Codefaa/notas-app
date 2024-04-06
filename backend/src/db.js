import mongoose from "mongoose";
import { MONGODB_URL } from "./config.js";

export const connectDB = async () => {
  try {
    const uri = MONGODB_URL;
    await mongoose.connect(uri);
    console.log("MongoDB conectada");
  } catch (error) {
    console.error(error);
  }
};
