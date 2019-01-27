const Image = require('../models/Images')

const Review = require('../models/Reviews')

const mongoose = require('./connection')


Image.deleteMany({})
    .then(() => {
        return Image.create(
                [{
                        userImage: 'https://upload.wikimedia.org/wikipedia/commons/4/43/Kylie_Jenner2_%28cropped%29.png',
                        name: "Shalain",
                        location: "shalaind@gmail.com",
                        imageUrl: ['http://i.ebayimg.com/images/g/ui8AAOSwHHFY~nr6/s-l1600.jpg', 'https://www.billboard.com/files/styles/article_main_image/public/media/Travis-Scott-live-2017-billboard-1548.jpg', 'https://media.timeout.com/images/105274258/750/422/image.jpg']
                    },
                    {
                        userImage: 'https://upload.wikimedia.org/wikipedia/commons/4/43/Kylie_Jenner2_%28cropped%29.png',
                        name: "Kenya",
                        location: "kenyaj@gmail.com",
                        imageUrl: ["http://i.ebayimg.com/images/g/ui8AAOSwHHFY~nr6/s-l1600.jpg", "https://www.billboard.com/files/styles/article_main_image/public/media/Travis-Scott-live-2017-billboard-1548.jpg"]
                    },
                    {
                        userImage: 'https://upload.wikimedia.org/wikipedia/commons/4/43/Kylie_Jenner2_%28cropped%29.png',
                        name: "Karelys",
                        location: "karelyss@gmail.com",
                        imageUrl: ["http://i.ebayimg.com/images/g/ui8AAOSwHHFY~nr6/s-l1600.jpg", "https://s3.amazonaws.com/ssglobalcdn/performers/wide/travis-scott.jpg", "https://media.timeout.com/images/105274258/750/422/image.jpg"]
                    }
                ]
            ).then((newImages) => {
                console.log(newImages, "success")

            })

            .then(() => mongoose.connection.close())
    });


Review.deleteMany({})
    .then(() => {
        return Review.create(
                [{
                        userImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Kylie_Jenner2_%28cropped%29.png/220px-Kylie_Jenner2_%28cropped%29.png',
                        name: 'Atlien',
                        location: 'Lousville, Kentucky, KFC Yum Center',
                        comment: 'Travis Scott is awesome! I had such a good time at this concert. There was a mosh pit and the energy was high throughout the entire night!'
                    },
                    {
                        userImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Kylie_Jenner2_%28cropped%29.png/220px-Kylie_Jenner2_%28cropped%29.png',
                        name: 'Atlien',
                        location: 'Lousville, Kentucky, KFC Yum Center',
                        comment: 'Travis Scott is awesome! I had such a good time at this concert. There was a mosh pit and the energy was high throughout the entire night!'
                    },
                    {
                        userImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Kylie_Jenner2_%28cropped%29.png/220px-Kylie_Jenner2_%28cropped%29.png',
                        name: 'Atlien',
                        location: 'Lousville, Kentucky, KFC Yum Center',
                        comment: 'Travis Scott is awesome! I had such a good time at this concert. There was a mosh pit and the energy was high throughout the entire night!'
                    }
                ]
            ).then((newReviews) => {
                console.log(newReviews, "success")

            })

            .then(() => mongoose.connection.close())
    });