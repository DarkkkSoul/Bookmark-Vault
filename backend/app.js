import express from 'express';
import dotenv from 'dotenv';
import connectToDB from './database/mongodb.js';
import authRouter from './routes/auth.route.js';
import bookmarkRouter from './routes/bookmark.route.js';
import userRouter from './routes/user.route.js';
import errorMiddleware from './middleware/error.middleware.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';

const app = express();
dotenv.config();

const port = process.env.PORT || 5500;

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(cors({
    origin: process.env.FRONTEND_URL || 'http://localhost:5173',
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/bookmark', bookmarkRouter);
app.use('/api/v1/user', userRouter);

// error handling
app.use(errorMiddleware);

app.get('/', (req, res) => {
    res.send('Welcome to bookmark vault system');
});

module.exports = app;