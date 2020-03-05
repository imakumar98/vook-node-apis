const express = require('express')

const UserController = require('./../controllers/user.controller');

const router = express.Router()

//Login route
router.post('/authentication',UserController.login)


//Register route
router.post('/register', UserController.register)


module.exports = router