const Image = require('../models/Images')

const imageController = {
    index: (req, res) => {
        Image.find({})
            .then((allImages) => {
                res.send(allImages)
            })
    },

    delete: (req, res) => {
        Image.findByIdAndDelete(req.params.userId)
            .then(() => {
                res.send("image was deleted")
            })
    },
    create: (req, res) => {
        Image.create(req.body)
            .then((newImage) => {
                res.send(newImage)
            })
    }
}

module.exports = imageController