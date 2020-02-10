const express = require('express')

const UserController = require('./../controllers/user.controller');

const router = express.Router()

//Login route
router.post('/api/login', async function(req,res, next){
    const { email, password } = req.body;
  if (email && password) {
    
    let user = await models.User.findOne({ where: {email: email} });
    if (!user) {
      res.status(401).json({ msg: 'No such user found', user });
    }
   if (user.password === password) {
    
      let payload = { id: user.id };
      let token = jwt.sign(payload, jwtOptions.secretOrKey);
      res.json({ msg: 'ok', token: token });
    } else {
      res.status(401).json({ msg: 'Password is incorrect' });
    }
  }

})


router.post('/register', UserController.register)




//Get all user
router.get('/users', (req,res)=>{

    // const users = await models.User.findAll();

    // res.status(200).json(users);

    console.log("called users endpoint");

})


module.exports = router