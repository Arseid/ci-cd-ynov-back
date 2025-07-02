const mongoose = require('mongoose');
const { Schema } = mongoose;

const schema = Schema({
    title: String,
    content: String,
    author: String,
	date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Post', schema);