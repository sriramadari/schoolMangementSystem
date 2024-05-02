const mongoose = require('mongoose');

const reportCardSchema = new mongoose.Schema({
    studentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student',
        required: true
    },
    grades: {
        type: [String], // Example: ['A', 'B', 'C']
        required: true
    },
    // Add more fields as needed
});

module.exports = mongoose.model('ReportCard', reportCardSchema);
