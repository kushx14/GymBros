const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    userid: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    name: {
        type: String
    }
});

module.exports = mongoose.model('User', userSchema);