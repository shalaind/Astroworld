const mongoose = require('./connection')

const Image = require('../models/Images')

const Review = require('../models/Reviews')



Image.deleteMany({})
    .then(() => {
        return Image.create(
                [{
                        name: "Shalain",
                        location: "Atlanta, GA",
                        imageUrl: 'http://i.ebayimg.com/images/g/ui8AAOSwHHFY~nr6/s-l1600.jpg'
                    },
                    {
                        name: "Kenya",
                        location: "Los Angeles, CA",
                        imageUrl: "https://www.billboard.com/files/styles/article_main_image/public/media/Travis-Scott-live-2017-billboard-1548.jpg"
                    },
                    {
                        name: "Karelys",
                        location: "New York, NY",
                        imageUrl: "https://media.timeout.com/images/105274258/750/422/image.jpg"
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
                        comment: 'Travis Scott is awesome! I had such a good time at this concert. There was a mosh pit and the energy was high throughout the entire night!'
                    },
                    {
                        userImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Kylie_Jenner2_%28cropped%29.png/220px-Kylie_Jenner2_%28cropped%29.png',
                        name: 'Atlien',
                        comment: 'Travis Scott is awesome! I had such a good time at this concert. There was a mosh pit and the energy was high throughout the entire night!'
                    },
                    {
                        userImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Kylie_Jenner2_%28cropped%29.png/220px-Kylie_Jenner2_%28cropped%29.png',
                        name: 'Atlien',
                        comment: 'Travis Scott is awesome! I had such a good time at this concert. There was a mosh pit and the energy was high throughout the entire night!'
                    }
                ]
            ).then((newReviews) => {
                console.log(newReviews, "success")

            })

            .then(() => mongoose.connection.close())
    });