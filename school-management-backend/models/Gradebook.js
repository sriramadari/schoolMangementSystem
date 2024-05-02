const mongoose = require('mongoose');

const gradebookSchema = new mongoose.Schema({
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
    // Add more fields as needed
});

module.exports = mongoose.model('Gradebook', gradebookSchema);
