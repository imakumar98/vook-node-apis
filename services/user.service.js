const models = require('./../database/models')

const bcrypt = require('bcrypt')

const jwt = require('jsonwebtoken')

const { saltRound, secret } = require('./../config/config');

exports.register = async function (newUser) {

    try {
        const hashedPassword = await hashPassword(newUser.password);
        const user = await models.User.create({name: newUser.name, email: newUser.email, password: hashedPassword})
        return user;
    } catch (e) {
        throw Error(e)
    }

}


exports.login = async function (email, password) {

    let user = await models.User.findOne({ where: {email: email} });
    
    if (!user) throw Error("User not found");

    
    bcrypt.compare(password,user.password, async (err, result)=>{
        if(result==true) {
            let payload = { id: user.id };
            let token = jwt.sign(payload, secret);
            return {
                message: 'Ok',
                token: token
            }
        }else {
            throw Error("Incorrect Password!!")
        }
       
        
    })
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


async function compare (password) {

    const saltRounds = 12;
  
    const hashedPassword = await new Promise((resolve, reject) => {
      bcrypt.hash(password, saltRounds, function(err, hash) {
        if (err) reject(err)
        resolve(hash)
      });
    })
  
    return hashedPassword
}