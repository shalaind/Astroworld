const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Image = new Schema({
    imageUrl: String
})

module.exports = mongoose.model("Image", Image)
