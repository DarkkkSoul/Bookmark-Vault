import { Bookmark } from "../models/bookmark.model.js";

export const createBookmark = async (req, res, next) =>{
   try {
      // const [name, url, category] = req.body;

      const bookmark = await Bookmark.create({
         ... req.body,
         owner:req.user._id,
      });

      res.status(200).json({
         message:'Bookmark created successfully',
         data:{
            bookmark
         }
      })
   } catch (error) {
      next(error);
   }
}

export const viewBookmark = async (req, res, next) =>{
   try {
      
      if(req.params.id !== req.user.id){
         const error = new Error("Unauthorized");
         error.statusCode = 404;
         throw error;
      }

      const bookmarks = await Bookmark.find({owner:req.params.id});   

      res.status(200).json({
         message:'Bookmarks found',
         data:{
            bookmarks
         }
      })

   } catch (error) {
      next(error);
   }
}