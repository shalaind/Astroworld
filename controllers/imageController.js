const Image = require('../models/Images')

const imageController = {
    index: (req, res) => {
        Image.find({})
            .then((allImages) => {
                res.send(allImages)
            })
    },

    delete: (req, res) => {
        Image.findByIdAndDelete(req.params.imageId)
            .then(() => {
                res.sendStatus(200)
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