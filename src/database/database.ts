import { connect } from "mongoose";
let monURI = "mongodb://localhost:27017/proj-js-v2-rbclone";

const connectDB = async () => {
  try {
    await connect(monURI);
    console.log("MongoDB Connected...");
  } catch (err) {
    console.error(err.message);
    // Exit process with failure
    process.exit(1);
  }
};

export default connectDB;