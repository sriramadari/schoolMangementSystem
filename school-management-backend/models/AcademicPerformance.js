const mongoose = require('mongoose');

const academicPerformanceSchema = new mongoose.Schema({
    studentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student',
        required: true
    },
    subject: {
        type: String,
        required: true
    },
    marks: {
        type: Number,
        required: true
    },
    grade: {
        type: String,
        required: true
    },
    // Add more fields as needed
});

module.exports = mongoose.model('AcademicPerformance', academicPerformanceSchema);
