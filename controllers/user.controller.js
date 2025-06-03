import { User } from "../models/user.model.js";

export const getUsers = async (req, res, next)=>{
   try {

      const users = await User.find();

      res.status(200).json({
         message:'Users fetched successfully',
         data:{
            users
         }
      })
   } catch (error) {
      next(error);
   }
}

export const getUser = async (req, res, next) =>{
   try {
      
      const user = await User.findById(req.params.id);

      // to get current logged in user
      // const user = req.user;

      if(!user){
         const error = new Error ('User not Found');
         error.statusCode = 404;
         throw error;
      }

      res.status(200).json({
         message:'User fetched successfully',
         data:{
            user
         }
      })
   } catch (error) {
      next(error);
   }
}