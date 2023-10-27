// DEPENDENCIES 
const express = require('express')
const app = express()


// CONFIGURATION
require('dotenv').config()
const PORT = process.env.port
console.log(PORT)

// MIDDLEWARE
// app.set('views', __dirname + '/views') 
// app.set('view engine', 'jsx')
// app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
// app.use(express.urlencoded({extended: true}))
// app.use(methodOverride('_method'))

// LISTEN
app.listen(PORT, () => {
    console.log('listening on port', PORT)
})