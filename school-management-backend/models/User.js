const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['student', 'teacher', 'administrator', 'parent'],
        required: true
    }
});

let UserModel;
try {
    UserModel = mongoose.model('User');
} catch (error) {
    UserModel = mongoose.model('User', userSchema);
}

module.exports = UserModel
