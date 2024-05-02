const express = require('express');
const router = express.Router();
const academicController = require('../controllers/academicController');
const authMiddleware = require('../middleware/authMiddleware');

// Example route for getting academic performance (students, parents, teachers, and administrators can access)
router.get('/academic-performance', authMiddleware, (req, res) => {
    academicController.getAcademicPerformance(req, res);
});

module.exports = router;
