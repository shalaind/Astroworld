const Image = require('../models/Images')

const Review = require('../models/Reviews')

const mongoose = require('./connection')

const concertGoerImg2 = new Image({

    imageUrl: 'https://news.deviantnoise.com/wp-content/uploads/2017/05/travis-scott-show-fans-jump-from-balcony.jpg'

})

const concertGoerImg1 = new Image({

    imageUrl: 'https://www.billboard.com/files/styles/article_main_image/public/media/Travis-Scott-live-2017-billboard-1548.jpg'

})

const concertGoer = new Review({

    userImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Kylie_Jenner2_%28cropped%29.png/220px-Kylie_Jenner2_%28cropped%29.png',

    name: 'Atlien',

    location: 'Lousville, Kentucky, KFC Yum Center',

    comment: 'Travis Scott is awesome! I had such a good time at this concert. There was a mosh pit and the energy was high throughout the entire night!',

    images: [concertGoerImg1, concertGoerImg2]

})


Review.remove({})

    .then(() => Image.remove({}))

    .then(() => Image.insertMany([concertGoerImg1, concertGoerImg2]))

    .then(() => concertGoer.save())

    .then(() => console.log('Successful Save'))

    .then(() => mongoose.connection.close())