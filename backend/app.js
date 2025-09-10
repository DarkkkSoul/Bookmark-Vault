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
// CORS configuration: allow production and local origins, include OPTIONS for preflight
const allowedOrigins = [
    process.env.FRONTEND_URL, // e.g. https://bookmark-vault.vercel.app
    'http://localhost:5173',
    'http://127.0.0.1:5173',
];

const corsOptions = {
    origin: function (origin, callback) {
        // allow REST tools or same-origin like curl/postman where origin may be undefined
        if (!origin || allowedOrigins.includes(origin)) {
            return callback(null, true);
        }
        return callback(new Error(`Not allowed by CORS: ${origin}`));
    },
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));
// Explicitly handle preflight requests
app.options('*', cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


app.use('/api/v1/auth', authRouter);
app.use('/api/v1/bookmark', bookmarkRouter);
app.use('/api/v1/user', userRouter);

// error handling
app.use(errorMiddleware);

app.get('/', (req, res) => {
    res.send('Welcome to bookmark vault system');
});

app.listen(port, () => {
    console.log(`App running on - http://localhost:${port}`);
    connectToDB();
});