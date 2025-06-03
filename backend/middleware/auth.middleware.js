import jwt from 'jsonwebtoken';
import { User } from '../models/user.model.js';

import dotenv from 'dotenv';
dotenv.config();

const authorizeMiddleware = async (req, res, next)=>{
   try {
      
      // take token, verify token, if success then return the request.

      let token;

      if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
         token = req.headers.authorization.split(' ')[1];
      }

      if(!token){
         const error = new Error('Please login - you are unauthorized');
         error.statusCode = 404;
         throw error;
      }

      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      const user = await User.findById(decoded.userId);

      if(!user){
         const error = new Error('User not Found');
         error.statusCode = 404;
         throw error;
      }

      req.user =  user;

      next();


   } catch (error) {
      next(error);
   }
}

export default authorizeMiddleware;