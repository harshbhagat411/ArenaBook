import bcrypt from 'bcryptjs';
import User from '../models/user.model.js';
import generateToken from '../utils/generateToken.js';

/**
 * @desc    Register a new user
 * @route   POST /api/auth/register
 * @access  Public
 */
export const registerUser = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    // Validate all required fields (handling missing fields and empty strings)
    if (!name || !email || !password || !name.trim() || !email.trim() || !password.trim()) {
      return res.status(400).json({
        success: false,
        message: 'All fields are required'
      });
    }

    const trimmedEmail = email.trim().toLowerCase();

    // Check whether email already exists
    const existingUser = await User.findOne({ email: trimmedEmail });
    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: 'User already exists'
      });
    }

    // Generate salt and hash the password using bcryptjs
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new user with hashed password
    const newUser = new User({
      name: name.trim(),
      email: trimmedEmail,
      password: hashedPassword
    });

    // Save user in MongoDB
    await newUser.save();

    // Return success response with status 201 Created
    return res.status(201).json({
      success: true,
      message: 'User registered successfully',
      data: {
        _id: newUser._id,
        name: newUser.name,
        email: newUser.email,
        role: newUser.role
      }
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @desc    Login user
 * @route   POST /api/auth/login
 * @access  Public
 */
export const loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    // Validate required fields (handling missing fields and empty strings)
    if (!email || !password || !email.trim() || !password.trim()) {
      return res.status(400).json({
        success: false,
        message: 'Email and password are required'
      });
    }

    const trimmedEmail = email.trim().toLowerCase();

    // Find user by email
    const user = await User.findOne({ email: trimmedEmail });
    if (!user) {
      return res.status(401).json({
        success: false,
        message: 'Invalid email or password'
      });
    }

    // Compare entered password with hashed password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: 'Invalid email or password'
      });
    }

    // Generate JWT token
    const token = generateToken(user);

    // Return success response with status 200 OK
    return res.status(200).json({
      success: true,
      message: 'Login successful',
      token,
      data: {
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role
      }
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @desc    Test protected route
 * @route   GET /api/auth/test
 * @access  Protected (Requires JWT)
 */
export const testController = async (req, res, next) => {
  try {
    return res.status(200).json({
      success: true,
      message: 'Protected route accessed successfully',
      user: req.user
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @desc    Get current user profile
 * @route   GET /api/auth/me
 * @access  Protected (Requires JWT)
 */
export const getCurrentUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.userId).select('-password');

    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found'
      });
    }

    return res.status(200).json({
      success: true,
      data: user
    });
  } catch (error) {
    next(error);
  }
};

