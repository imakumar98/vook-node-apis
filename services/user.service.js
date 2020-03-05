const models = require('./../database/models')

const bcrypt = require('bcrypt')

const jwt = require('jsonwebtoken')

const { saltRound, secret } = require('./../config/config');

exports.register = async function (newUser) {

    try {
        const hashedPassword = await hashPassword(newUser.password);
        const user = await models.User.create({name: newUser.name, email: newUser.email, password: hashedPassword})
        const createdUser = {
            id: user.id,
            name: user.name,
            email: user.email,
            updatedAt: user.updatedAt,
            createdAt: user.createdAt
        }
        return createdUser;
    } catch (e) {
        throw e
    }

}


exports.login = async function (email, password) {

    try {

        const user = await models.User.findOne({ where: {email: email} })

        const isSame = await compare(password, user.password)

        if(isSame==true) {
            let payload = { id: user.id, name: user.name, email: user.email };
            let token = jwt.sign(payload, secret);
            return token;
        }else {
            throw Error("Incorrect password!!")
        }

    } catch(e) {
        throw e
    }


}


exports.isExists = async function(email) {

    let user = await models.User.findOne({ where: {email: email} })

    return user
}




async function hashPassword (password) {

    const saltRounds = 12;
  
    const hashedPassword = await new Promise((resolve, reject) => {
      bcrypt.hash(password, saltRounds, function(err, hash) {
        if (err) reject(err)
        resolve(hash)
      });
    })
  
    return hashedPassword
}


async function compare (password1, password2) {

    const isSame = await new Promise((resolve, reject) => {
        bcrypt.compare(password1, password2, function(err, result) {
            if(err) reject(err)
            resolve(result)
        })
    })

    return isSame;



}