const mongoose = require('mongoose');

const user = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        min: 6,
        max: 30
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        min: 8,
        max: 1024 
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('user', user);