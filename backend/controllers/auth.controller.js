import mongoose, { mongo } from "mongoose";
import { User } from "../models/user.model.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import dotenv from 'dotenv';
dotenv.config();

export const signupController = async (req,res, next) =>{

   const mongooseSession = await mongoose.startSession();
   mongooseSession.startTransaction();

   try {
      
      const {username, email, password} = req.body;

      const user = await User.findOne({email});
      if(user){
         
         await mongooseSession.abortTransaction();
         mongooseSession.endSession();
         return res.status(409).json({sucess:false, errorMessage:"User already existed"});
      }

      // pass - hash,
      // create token
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);     

      const newUsers = await User.create([{username, email, password:hashedPassword}],{session:mongooseSession});

      const token = jwt.sign({userId : newUsers[0]._id}, process.env.JWT_SECRET, {expiresIn:process.env.JWT_EXPIRY});
      
      await mongooseSession.commitTransaction();
      mongooseSession.endSession();
      
      return res.status(200).json({  
         sucess:true,
         message:"User created successfully",
         data:{
            token,
            user: newUsers[0],
         }
      });
      
   } catch (error) {
      await mongooseSession.abortTransaction();
      mongooseSession.endSession();
      next(error);
   }
}

export const loginController = async(req, res, next) =>{
   try {
      
      const {email,password} = req.body;

      const user = await User.findOne({email});

      if(!user){
         const error = new Error("User not found");
         error.statusCode= 404;
         throw error;
      }

      const isPassValid = await bcrypt.compare(password, user.password);

      if(!isPassValid){
         const error = new Error("Invalid Password");
         error.statusCode = 404;
         throw error;
      }

      const token = await jwt.sign({userId : user._id}, process.env.JWT_SECRET, {expiresIn : process.env.JWT_EXPIRY});

      res.status(200).json({
         message:"User logged in successfully",
         data:{
            token,
            user
         }
      })
   } catch (error) {
      next(error);
   }
}