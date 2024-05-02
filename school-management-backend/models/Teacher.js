const mongoose = require('mongoose');

const administratorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    // Add more fields as needed
});

module.exports = mongoose.model('Administrator', administratorSchema);
