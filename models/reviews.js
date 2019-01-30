const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Review = new Schema({
    rating: Number,
    userImage: String,
    name: String,
    comment: String
})

module.exports = mongoose.model('Review', Review)