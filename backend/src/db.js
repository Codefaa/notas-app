import mongoose from "mongoose";


export const connectDB = async () => {
  try {
    const uri = process.env.MONGODB_URL;
    await mongoose.connect(uri);
    console.log("MongoDB is connected");
  } catch (error) {
    console.error(error);
  }
};
