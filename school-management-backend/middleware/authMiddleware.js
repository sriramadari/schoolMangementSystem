// middleware/authMiddleware.js
const jwt = require('jsonwebtoken');
const config = require('../config/config');
const User = require('../models/User');

module.exports = async (req, res, next) => {
    const token = req.header('Authorization');

    if (!token) {
        return res.status(401).json({ message: 'Authorization denied' });
    }

    try {
        const decoded = jwt.verify(token, config.secretKey);
        const user = await User.findById(decoded.userId);

        if (!user) {
            return res.status(401).json({ message: 'User not found' });
        }

        req.user = user;

        // Check user role and set permissions accordingly
        if (user.role === 'student' || user.role === 'parent') {
            // Students and parents can only view information
            req.permissions = { view: true, modify: false };
        } else if (user.role === 'teacher') {
            // Teachers can modify student information
            req.permissions = { view: true, modify: true };
        } else if (user.role === 'administrator') {
            // Administrators have all rights
            req.permissions = { view: true, modify: true, manageTeachers: true };
        }

        next();
    } catch (error) {
        console.error(error.message);
        res.status(401).json({ message: 'Token is not valid' });
    }
};
