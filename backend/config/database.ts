import mongoose from "mongoose";

const connectToDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI as string);
    console.log("Database connected ✅");
  } catch (err) {
    console.log(err);
  }
};

export default connectToDB;