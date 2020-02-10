const models = require('./../database/models')

const bcrypt = require('bcrypt')

const saltRound = require('./../config/config');


exports.register = function (newUser) {

    bcrypt.hash(newUser.password, saltRound, async (err, hash)=>{
        try {
            const user = await models.User.create({name: newUser.name, email: newUser.email, password: hash})
            console.log(user)
            return user;
        } catch (e) {
            throw Error("Error while registering user", e)
        }
    })
}