import express from 'express';
import cors from 'cors';
import healthRoutes from './routes/healthRoutes.js';
import { notFound } from './middleware/notFoundMiddleware.js';
import { errorHandler } from './middleware/errorMiddleware.js';

const app = express();

// Configure Middleware
app.use(cors());
app.use(express.json());

// API Versioning & Route Registration
app.use('/api/v1', healthRoutes);

// Root route
app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Backend Running'
  });
});

// 404 Route handler
app.use(notFound);

// Global Error handler
app.use(errorHandler);

export default app;
