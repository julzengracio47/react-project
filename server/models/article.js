const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const articleSchema = new Schema({
    title: String,
    content: String,
    img: { data:Buffer, contentType: String}
});

module.exports = mongoose.model('article', articleSchema);