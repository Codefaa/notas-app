import mongoose from "mongoose";
import { MONGODB_URL } from "./config.js";

export const connectDB = async () => {
  try {
    const uri = MONGODB_URL;
    console.log('bd: ', uri);
    await mongoose.connect(uri);
    console.log("MongoDB is connected");
  } catch (error) {
    console.error(error);
  }
};
