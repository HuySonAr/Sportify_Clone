// const express = require("express");

import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

import { clerkMiddleware } from '@clerk/express';
import fileUpload from 'express-fileupload';
import path from 'path';
import cors from 'cors';

import { connectDB } from './lib/db.js';

import userRoutes from './routes/userRoute.js';
import adminRoutes from './routes/adminRoute.js';
import authRoutes from './routes/authRoute.js';
import songRoutes from './routes/songRoute.js';
import albumRoutes from './routes/albumRoute.js';
import statRoutes from './routes/statRoute.js';


const __dirname = path.resolve();
const app = express();
const PORT = process.env.PORT;

app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
  }),
);

app.use(express.json());
app.use(clerkMiddleware());
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: path.join(__dirname, 'tmp'),
    createParentPath: true,
    limits: {
      fileSize: 10 * 1024 * 1024, //10MB max file size
    },
  }),
);

app.use('/api/users', userRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/songs', songRoutes);
app.use('/api/albums', albumRoutes);
app.use('/api/stats', statRoutes);

app.use((err, req, res, next) => {
  res.status(500).json({
    message:
      process.env.NODE_ENV === 'production'
        ? 'Internal server error'
        : err.message,
  });
});

app.listen(PORT, async () => {
  console.log('Server is running on port ' + PORT);
  await connectDB();
});

//todo: Socket io
