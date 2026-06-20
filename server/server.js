import dotenv from 'dotenv';
// Load environment variables immediately before other imports
dotenv.config();

import { connectDB } from './config/db.js';
import app from './app.js';

const startServer = async () => {
  // Connect to MongoDB Atlas
  await connectDB();

  const PORT = process.env.PORT || 5000;

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};

startServer();
