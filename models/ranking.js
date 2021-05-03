const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema ({
        username: { type: String, required: true },
        points: { type: Number, required: true },
});

module.exports = mongoose.model('User', User)