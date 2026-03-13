// require('dotenv').config();
// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const authRoutes = require('./routes/auth');

// const app = express();
// app.use(cors());
// app.use(express.json());

// // routes
// app.use('/api/auth', authRoutes);

// // health
// app.get('/', (req, res) => res.send('Auth API running'));

// // connect to mongo & start server
// const PORT = process.env.PORT || 5000;
// mongoose
//   .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => {
//     console.log('MongoDB connected');
//     app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
//   })
//   .catch(err => {
//     console.error('MongoDB connection error:', err.message);
//     process.exit(1);
//   });

  
import express from 'express'
import dotenv from 'dotenv'
import connectDb from './config/db.js'
// Importing routes
import userRoutes from './routes/auth.js'

dotenv.config()             // Load environment variables from .env file

await connectDb();                 // Connect to the database
const app = express()        // Instance of express created

app.use(express.json())     // Middleware to parse JSON bodies

//using routes
app.use('/api/auth', userRoutes);


const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  
}) 

// Express import kiya
// ↓
// Express app create ki
// ↓
// Server port define kiya
// ↓
// Server start kiya
// ↓
// Console me message show hua

