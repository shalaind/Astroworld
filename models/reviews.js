const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Review = new Schema({
    userImage: String,
    name: String,
    location: String,
    comment: String
})

module.exports = mongoose.model('Review', Review)