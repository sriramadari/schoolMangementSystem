const express = require('express');
const router = express.Router();
const gradingController = require('../controllers/gradingController');
const authMiddleware = require('../middleware/authMiddleware');

// Example route for getting grades (students, parents, teachers, and administrators can access)
router.get('/grades', authMiddleware, (req, res) => {
    gradingController.getGrades(req, res);
});

module.exports = router;
