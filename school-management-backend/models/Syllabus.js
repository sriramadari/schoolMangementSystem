const mongoose = require('mongoose');

const syllabusSchema = new mongoose.Schema({
    classId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Class',
        required: true
    },
    subject: {
        type: String,
        required: true
    },
    topics: {
        type: [String],
        required: true
    },
    // Add more fields as needed
});

module.exports = mongoose.model('Syllabus', syllabusSchema);
