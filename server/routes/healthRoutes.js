import express from 'express';

const router = express.Router();

router.get('/health', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Server running successfully',
    environment: process.env.NODE_ENV || 'development'
  });
});

export default router;
