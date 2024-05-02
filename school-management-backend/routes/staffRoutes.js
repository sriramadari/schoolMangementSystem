const express = require('express');
const router = express.Router();
const staffController = require('../controllers/staffController');
const authMiddleware = require('../middleware/authMiddleware');

// Example route for getting all teachers (teachers and administrators can access)
router.get('/teachers', authMiddleware, (req, res) => {
    if (!req.permissions.manageTeachers) {
        return res.status(403).json({ message: 'Permission denied' });
    }
    staffController.getAllTeachers(req, res);
});

module.exports = router;
