import {Router} from 'express';
import { signupController } from '../controllers/auth.controller.js';

const authRouter = Router();

authRouter.post('/signup', signupController);
authRouter.post('/login', (req, res)=>res.send("Login route"));
authRouter.post('/logout', (req, res)=>res.send("Logout route"));

// CREATE - POST

export default authRouter;