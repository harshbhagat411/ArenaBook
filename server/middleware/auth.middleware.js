import jwt from 'jsonwebtoken';

/**
 * Middleware to verify JWT tokens and protect routes
 */
export const authMiddleware = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    // Check if Authorization header is present and starts with 'Bearer '
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({
        success: false,
        message: 'Access denied. No token provided'
      });
    }

    // Extract the token
    const token = authHeader.split(' ')[1];
    if (!token) {
      return res.status(401).json({
        success: false,
        message: 'Access denied. No token provided'
      });
    }

    // Verify token using JWT_SECRET
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Attach decoded token payload (userId, role) to the request object
    req.user = decoded;

    // Call the next middleware/controller
    next();
  } catch (error) {
    // Return unauthorized if token is invalid or expired
    return res.status(401).json({
      success: false,
      message: 'Invalid or expired token'
    });
  }
};

export default authMiddleware;
