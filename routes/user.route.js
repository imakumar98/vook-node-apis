const express = require('express')

const UserController = require('./../controllers/user.controller');

const router = express.Router()

//Login route
router.post('/login',UserController.login)


router.post('/register', UserController.register)




//Get all user
router.get('/users', (req,res)=>{

    // const users = await models.User.findAll();

    // res.status(200).json(users);

    console.log("called users endpoint");

})


module.exports = router