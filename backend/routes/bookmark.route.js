import { Router } from "express";
import authorizeMiddleware from "../middleware/auth.middleware.js";
import { createBookmark, deleteBookmark, viewBookmark } from "../controllers/bookmark.controller.js";

const bookmarkRouter = Router();

// create
bookmarkRouter.post('/', authorizeMiddleware, createBookmark);

// show by id
bookmarkRouter.get('/user', authorizeMiddleware, viewBookmark);

// update by id
bookmarkRouter.put('/user', (req, res) => res.send("Update bookmark route by user id"));

// delete by id
bookmarkRouter.delete('/:id', deleteBookmark);

export default bookmarkRouter;