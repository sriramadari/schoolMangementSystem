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
});
if (!mongoose.models.Administrator) {
    const Administrator = mongoose.model('Administrator', administratorSchema);
    module.exports = Administrator;
} else {
    module.exports = mongoose.model('Administrator');
}



