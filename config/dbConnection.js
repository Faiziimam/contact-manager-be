import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const connect = await mongoose.connect(
      process.env.CONNECTION_STRING 
    );
    console.log("DB connection established!!",connect.connection.host,connect.connection.name)
  } catch (error) {
    process.exit(1)
  }
}  