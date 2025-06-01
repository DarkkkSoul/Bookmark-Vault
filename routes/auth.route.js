import {Router} from 'express';

const authRouter = Router();

authRouter.post('/signup', (req, res)=>res.send("Signup - create user"));
authRouter.post('/login', (req, res)=>res.send("Login route"));
authRouter.post('/logout', (req, res)=>res.send("Logout route"));

// CREATE - POST

export default authRouter;