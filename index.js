import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import authRouter from './route/auth.route.js';
import cookieParser from 'cookie-parser';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;
app.use(express.json());
app.use(cookieParser());
app.use("/api/auth",authRouter);


app.listen(port, () => {
  connectDB();
  console.log(`Server is running on port ${port}`);
});
