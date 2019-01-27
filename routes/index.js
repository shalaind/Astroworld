const express = require('express')
const router = express.Router()
const imageController = require('../controllers/imageController')
const reviewController = require('../controllers/reviewController')


//show reviews 
router.get('/api/review', reviewController.show)
//add a review 
router.post('/api/review/add', reviewController.create)
//edit the review 
router.patch('/api/review/:id', reviewController.update)
//delete the review 
router.delete('/api/review/:id', reviewController.delete)

//show images 
router.get('/api/image', imageController.show)
//add an image 
router.post('/api/image/add', imageController.create)
//delete an image 
router.delete('/api/image/:id', imageController.delete)


module.exports = router







