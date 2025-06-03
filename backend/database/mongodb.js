import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

if(!process.env.DB_URI){
   throw new Error("DB_URI is not defined");
}

const connectToDB = async()=>{
   try {
      await mongoose.connect(process.env.DB_URI);
      console.log("DATABASE CONNECTED");
   } catch (error) {
      console.log('ERROR IN CONNECTING TO DATABASE:' ,error);
      process.exit(1);
   }
};

export default connectToDB;