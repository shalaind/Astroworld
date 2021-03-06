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
                    },
                    {
                        name: "NaYai",
                        location: "Atlanta, GA",
                        imageUrl: "https://media.wcnc.com/assets/WCNC/images/d5464b1d-f2b2-439e-8380-ca7a41f84e0a/d5464b1d-f2b2-439e-8380-ca7a41f84e0a_750x422.jpg"
                    },
                    {
                        name: "John",
                        location: "Seattle, Wa",
                        imageUrl: "https://www.texasmonthly.com/wp-content/uploads/2018/11/Travis-Scott_209405_AstroworldFestival2018_RogerHo-1200x750.jpg"
                    },
                    {
                        name: "C'zar",
                        location: "Washingtion, D.C.",
                        imageUrl: "https://images1.houstonpress.com/imager/u/745xauto/11050845/dsc07532.jpg"
                    },
                    {
                        name: "Joseph",
                        location: "Chicago, Il",
                        imageUrl: "https://www.mynaijalyrics.com/wp-content/uploads/2018/08/IMG_20180814_224048-640x640.jpg"
                    },
                    {
                        name: "Edy",
                        location: "Charlotte, NC",
                        imageUrl: "https://ronetheboxhouston.files.wordpress.com/2018/11/15425665081746.jpg?w=1024&quality=80&strip=all&h=776"
                    },
                    {
                        name: "Ecclesia",
                        location: "Miami, FL",
                        imageUrl: "http://loyolaphoenix.com/wp-content/uploads/2018/12/image-9.18.17-PM-1-1200x863.jpeg"
                    },
                    {
                        name: "Derrick",
                        location: "Columbia, SC",
                        imageUrl: "https://sslh.ulximg.com/image/740x493/cover/1540238184_6bc78ab89a6000e3bbb6ad36d00143a8.jpg/05a546dcef1ebf9fa06181d4a398a767/1540238184_8bbc6a3767cf451caf545c8f6a747d74.jpg"
                    },
                    {
                        name: "Justin",
                        location: "Los Angeles, CA",
                        imageUrl: "https://i.imgur.com/vD2aTPZ.png"
                    },
                    {
                        name: "Jaquez",
                        location: "Charlotte, NC",
                        imageUrl: "https://i.imgur.com/qEnD4SR.png"
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
                        title: "This album is fire! 🔥 ",
                        rating: 5,
                        userImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Kylie_Jenner2_%28cropped%29.png/220px-Kylie_Jenner2_%28cropped%29.png',
                        name: "BabyStormi's Bottle",
                        comment: "Travis Scott has done it again! I've been waiting for this album to drop for months and Travis did not dissapoint!"
                    },
                    {
                        title: "Good, but not his best 😕" ,
                        rating: 2,
                        userImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Kylie_Jenner2_%28cropped%29.png/220px-Kylie_Jenner2_%28cropped%29.png',
                        name: 'TravisScottHater',
                        comment: "I've heard better from Travis Scott. There are a few bangers here but overall I would not play this whole album from start to finish."
                    },
                    {
                        title: "La Flame is back! 🙏🏾🔥✨ ",
                        rating: 5, 
                        userImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Kylie_Jenner2_%28cropped%29.png/220px-Kylie_Jenner2_%28cropped%29.png',
                        name: 'Kylie Jenner Lip Kit',
                        comment: 'Yesss! Every song is a hit! I cant wait until to see him perform live. Yosemite is the best song on the album!'
                    }
                ]
            ).then((newReviews) => {
                console.log(newReviews, "success")

            })

            .then(() => mongoose.connection.close())
    });