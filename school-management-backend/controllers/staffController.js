const Teacher = require('../models/Teacher');
const Administrator = require('../models/Administrator');
const SupportStaff = require('../models/SupportStaff');

// Implement controller functions for managing staff information.
// Example:
exports.getAllTeachers = async (req, res) => {
    try {
        const teachers = await Teacher.find();
        res.status(200).json(teachers);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
};
