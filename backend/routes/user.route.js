import { Router } from "express";
import { getUser, getUsers } from "../controllers/user.controller.js";
import authorizeMiddleware from "../middleware/auth.middleware.js";

const userRouter = Router();

userRouter.get('/',getUsers);

userRouter.get('/:id',authorizeMiddleware,getUser);

// get current logged in user
// userRouter.get('/me',authorizeMiddleware,getUser);

export default userRouter;