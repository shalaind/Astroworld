const Review = require('../models/Reviews')

const reviewController = {
    index: (req, res) => {
        Review.find({})
            .then((allReviews) => {
                res.send(allReviews)
            })
    },
   
    update: (req, res) => {
        Review.findByIdAndUpdate(req.params.userId, req.body)
            .then((updatedReview) => {
                updatedReview.save()
                res.send(updatedReview)
            })
    },
    delete: (req, res) => {
        Review.findByIdAndDelete(req.params.userId)
            .then(() => {
                res.send("it was deleted")
            })
    },
    create: (req, res) => {
        Review.create(req.body)
            .then((newReview) => {
                res.send(newReview)
            })
    }
}

module.exports = reviewController