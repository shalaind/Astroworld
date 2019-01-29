const express = require('express')
const app = express()
const routes = require('./routes/index')
const fileUpload = require('express-fileupload');
require('./lib/models')(app);

app.use(express.urlencoded({
    extended: true
}))

app.use(express.json())

app.use(fileUpload());

app.use(express.static(__dirname + '/client/build/'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/client/build/index.html')
})

app.use('/', routes)

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log(`Server is listening on PORT: ${PORT}`)
})