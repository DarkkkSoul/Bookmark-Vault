import mongoose from "mongoose";

const bookmarkSchema = new mongoose.Schema({
   name: {
      type:String,
      required:true
   },
   url:{
      type:String,
      required:true,
   },
   category: {
      type:String,
      enum:['sports','entertainment','news','cooking', 'crafts','all','education'],
      required:true,
      default:'entertainment',
   },
   owner:{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required:true,
      index:true,
   },

},{timestamps:true});

export const Bookmark = mongoose.model('Bookmark',bookmarkSchema);

// name, url, category, user, 