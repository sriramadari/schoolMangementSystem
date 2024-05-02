const express = require('express');
const router = express.Router();
const enrollmentController = require('../controllers/enrollmentController');
const authMiddleware = require('../middleware/authMiddleware');

// Example route for enrolling a student (teachers and administrators can access)
router.post('/enroll', authMiddleware, (req, res) => {
    if (!req.permissions.modify) {
        return res.status(403).json({ message: 'Permission denied' });
    }
    enrollmentController.enrollStudent(req, res);
});

module.exports = router;
