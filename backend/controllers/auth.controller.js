import mongoose from "mongoose";
import { User } from "../models/user.model.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import dotenv from 'dotenv';
dotenv.config();

export const signupController = async (req, res, next) => {

    const mongooseSession = await mongoose.startSession();
    mongooseSession.startTransaction();

    try {

        const { username, email, password } = req.body;

        const user = await User.findOne({ email });
        if (user) {
            await mongooseSession.abortTransaction();
            mongooseSession.endSession();
            return res.status(409).json({ sucess: false, errorMessage: "User already exists" });
        }

        // pass - hash,
        // create token
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUsers = await User.create([{ username, email, password: hashedPassword }], { session: mongooseSession });

        const token = jwt.sign({ userId: newUsers[0]._id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRY });

        await mongooseSession.commitTransaction();
        mongooseSession.endSession();

        return res.status(200).json({
            sucess: true,
            message: "User created successfully",
            data: {
                token,
                user: newUsers[0],
            }
        });

    } catch (error) {
        await mongooseSession.abortTransaction();
        mongooseSession.endSession();
        next(error);
    }
}

export const loginController = async (req, res, next) => {
    try {

        const { email, password } = req.body;

        const user = await User.findOne({ email });

        if (!user) {
            const error = new Error("User not found");
            error.statusCode = 404;
            throw error;
        }

        const isPassValid = await bcrypt.compare(password, user.password);

        if (!isPassValid) {
            const error = new Error("Invalid Password");
            error.statusCode = 404;
            throw error;
        }

        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRY });

        // Send token as an HTTP-only cookie
        // This is crucial for security: HTTP-only cookies cannot be accessed by JavaScript in the browser.
        // 'secure: true' means the cookie will only be sent over HTTPS. Use 'false' for development with HTTP.
        // 'sameSite: "Lax"' helps mitigate CSRF attacks.

        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production', // true in prod, false locally
            maxAge: 86400000,
            // sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'Lax',
            path: '/',
        });

        res.status(200).json({
            message: "Logged in successfully",
            data: {
                token,
                user
            }
        })
    } catch (error) {
        next(error);
    }
}

export const logoutController = async (req, res, next) => {
    try {

        res.clearCookie('token', {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            // sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'Lax',
            path: '/', // Very important: must match the default path
        });


        res.status(200).json({ message: 'Logged out successfully' });

    } catch (error) {
        next(error);
    }
}