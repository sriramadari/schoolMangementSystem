const Fee = require('../models/Fee');

// Implement controller functions for managing fee-related information.
// Example:
exports.getFees = async (req, res) => {
    try {
        const fees = await Fee.find({ studentId: req.userId });
        res.status(200).json(fees);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
};
