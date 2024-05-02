const AcademicPerformance = require('../models/AcademicPerformance');
const Syllabus = require('../models/Syllabus');

// Implement controller functions for managing academic-related information such as class schedules, syllabi, and academic performance tracking.
// Example:
exports.getAcademicPerformance = async (req, res) => {
    try {
        const academicPerformance = await AcademicPerformance.find({ studentId: req.userId });
        res.status(200).json(academicPerformance);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
};

