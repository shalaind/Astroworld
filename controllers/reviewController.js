const Review = require('../models/Reviews')

const reviewController = {
    index: (req, res) => {
        Review.find({})
            .then((allReviews) => {
                res.send(allReviews)
            })
    },
   
    update: (req, res) => {
        Review.findByIdAndUpdate(req.params.reviewId, req.body)
            .then((updatedReview) => {
                updatedReview.save()
                res.send(updatedReview)
            })
    },
    delete: (req, res) => {
        Review.findByIdAndDelete(req.params.reviewId)
            .then(() => {
                res.sendStatus(200)
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