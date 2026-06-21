import express from 'express';
import { registerUser, loginUser, testController } from '../controllers/auth.controller.js';
import { authMiddleware } from '../middleware/auth.middleware.js';

const router = express.Router();

// Route: POST /api/auth/register
router.post('/register', registerUser);

// Route: POST /api/auth/login
router.post('/login', loginUser);

// Route: GET /api/auth/test (Protected route)
router.get('/test', authMiddleware, testController);

export default router;
