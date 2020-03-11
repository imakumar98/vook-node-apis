//Import Modules
require('dotenv')
const app = require('express')()
const bodyParser = require('body-parser')
const passport = require('passport')


//Import Routes
const routes = require('./routes')


const PORT = process.env.PORT || 3000


//Middlewares
app.use(bodyParser.json())
app.use(passport.initialize())



//Use Routes
app.use('/v1',routes)


//Start Server
app.listen(PORT, ()=>{
    console.log(`Server started at port ${PORT}`)
})