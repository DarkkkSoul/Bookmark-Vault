import {Router} from 'express';
import { loginController, signupController } from '../controllers/auth.controller.js';

const authRouter = Router();

authRouter.post('/signup', signupController);
authRouter.post('/login', loginController);
authRouter.post('/logout', (req, res)=>res.send("Logout route"));

// CREATE - POST

export default authRouter;