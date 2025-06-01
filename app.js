import express from 'express';
import dotenv from 'dotenv';
import connectToDB from './database/mongodb.js';
import authRouter from './routes/auth.route.js';
import bookmarkRouter from './routes/bookmark.route.js';
import userRouter from './routes/user.route.js';

const app = express();
dotenv.config();

const port = process.env.PORT || 5500;


app.use('/api/v1/auth', authRouter);
app.use('/api/v1/bookmark', bookmarkRouter);
app.use('/api/v1/user', userRouter);


app.get('/',(req, res)=>{
   res.send('Welcome to bookmark vault system');
});

app.listen(port,()=>{
   console.log(`App running on - http://localhost:${port}`);
   connectToDB();
});