const express = require('express')
const router = express.Router()
const imageController = require('../controllers/imageController')
const reviewController = require('../controllers/reviewController')


//show reviews 
router.get('/api/review', reviewController.index)
//add a review 
router.post('/api/review', reviewController.create)
//edit the review 
router.patch('/api/review/:reviewId', reviewController.update)
//delete the review 
router.delete('/api/review/:reviewId', reviewController.delete)

//show images 
router.get('/api/image', imageController.index)
//add an image 
router.post('/api/image/upload', imageController.create)
//delete an image 
router.delete('/api/image/:imageId', imageController.delete)


module.exports = router







