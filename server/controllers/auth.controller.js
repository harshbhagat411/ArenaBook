import User from '../models/user.model.js';

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

    // Create new user (Storing password in plain text as requested for this step)
    const newUser = new User({
      name: name.trim(),
      email: trimmedEmail,
      password: password // Plain text password (bcrypt is in Step 2)
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
