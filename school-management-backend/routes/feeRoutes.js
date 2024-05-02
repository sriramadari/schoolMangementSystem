const express = require('express');
const router = express.Router();
const feeController = require('../controllers/feeController');
const authMiddleware = require('../middleware/authMiddleware');

// Example route for getting fees (students, parents, teachers, and administrators can access)
router.get('/fees', authMiddleware, (req, res) => {
    feeController.getFees(req, res);
});

module.exports = router;
