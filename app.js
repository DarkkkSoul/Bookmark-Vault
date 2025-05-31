import express from 'express';
import dotenv from 'dotenv';
import connectToDB from './database/mongodb.js';

const app = express();
dotenv.config();

const port = process.env.PORT || 5500;

app.get('/',(req, res)=>{
   res.send('Welcome to bookmark vault system');
});

app.listen(port,()=>{
   console.log(`App running on - http://localhost:${port}`);
   connectToDB();
});