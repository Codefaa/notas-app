import mongoose from "mongoose";
import { MONGODB_URI } from "./config.js";

export const connectDB = async () => {
  try {
    await mongoose.connect(`mongodb+srv://facundogarcia999:login123@cluster0.xxtmsxd.mongodb.net/username?retryWrites=true&w=majority&appName=Cluster0`);
    console.log("MongoDB is connected");
  } catch (error) {
    console.error(error);
  }
};
