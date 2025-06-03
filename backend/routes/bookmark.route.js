import { Router } from "express";
import authorizeMiddleware from "../middleware/auth.middleware.js";
import { createBookmark, viewBookmark } from "../controllers/bookmark.controller.js";

const bookmarkRouter = Router();

// create
bookmarkRouter.post('/', authorizeMiddleware, createBookmark );

// show by id
bookmarkRouter.get('/user/:id', authorizeMiddleware, viewBookmark);

// update by id
bookmarkRouter.put('user/:id', (req, res)=>res.send("Update bookmark route by user id"));

// delete by id
bookmarkRouter.delete('user/:id', (req, res)=>res.send("Delete bookmark route by user id"));

export default bookmarkRouter;