import { Router } from 'express';
import { loginController, logoutController, signupController } from '../controllers/auth.controller.js';

const authRouter = Router();

authRouter.post('/signup', signupController);
authRouter.post('/login', loginController);
authRouter.post('/logout', logoutController);

// CREATE - POST

export default authRouter;
