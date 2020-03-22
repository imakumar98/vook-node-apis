//Import Modules
require('dotenv')
const app = require('express')()
const cors = require('cors')
const bodyParser = require('body-parser')
const passport = require('passport')


//Import Routes
const routes = require('./routes')


const PORT = process.env.PORT || 3001


//Middlewares
app.use(bodyParser.json())
app.use(passport.initialize())


//Enable cors
app.use(cors())


//Use Routes
app.get('/', (req,res)=>{
    res.send("Welcome to Vook API docs");
})
app.use('/v1',routes)


//Start Server
app.listen(PORT, ()=>{
    console.log(`Server started at port ${PORT}`)
})