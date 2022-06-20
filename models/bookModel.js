const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BookSchema = new Schema({
    title: {type: String, required: true, minlength: 3, maxlength: 64},
    author: {type: String, required: true, minlength: 3, maxlength: 64},
    genre: {type: String, required: true, minlength: 3, maxlength: 32},
    read: {type: Boolean, required: true, default: false},
    review: {type: String, required: false, minlength: 0, maxlength: 280},
    rating: {type: Number, min: 0, max: 5}
})

module.exports = mongoose.model('Book', BookSchema)