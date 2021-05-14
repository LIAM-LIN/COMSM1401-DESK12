const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create a schema
const userSchema = new Schema({
    username: { type: String, required: true, unique: true },
    points: { type: Number, required: true },
    rightNum: { type: Number, required: true },
    wrongNum: { type: Number, required: true }
}, { collection: 'user' });

const User = mongoose.model('User', userSchema);

module.exports = User;