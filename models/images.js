const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Image = new Schema({
    userImage: String,
    name: String,
    location: String,
    imageUrl: []
})

module.exports = mongoose.model("Image", Image)
