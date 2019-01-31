const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Image = new Schema({
    name: String,
    location: String,
    imageUrl: String
})

module.exports = mongoose.model("Image", Image)
