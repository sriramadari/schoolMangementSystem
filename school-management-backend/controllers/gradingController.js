const Gradebook = require('../models/Gradebook');
const ReportCard = require('../models/ReportCard');

// Implement controller functions for managing grading and assessment.
// Example:
exports.getGrades = async (req, res) => {
    try {
        const grades = await Gradebook.find({ studentId: req.userId });
        res.status(200).json(grades);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
};
