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
    let imageUpload = req.files;
    console.log(imageUpload)
    const imagePath = `images/uploads/${req.files.imageUrl.name}`

    Image.create({
        name: req.body.username,
        location: req.body.email,
        imageUrl: imagePath
    })
            .then((newImage) => {
                res.send(newImage)
            })
    }
}

module.exports = imageController