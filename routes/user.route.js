import { Router } from "express";

const userRouter = Router();

userRouter.get('/',(req, res)=>res.send('Get all users'));
userRouter.get('/:id',(req, res)=>res.send('Get user by id'));

export default userRouter;