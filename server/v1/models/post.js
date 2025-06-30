const mongoose = require('mongoose');
const { Schema } = mongoose;

const schema = Schema({
    title: String,
    content: String,
    author: String,
    date: Date
});

module.exports = mongoose.model('Post', schema);