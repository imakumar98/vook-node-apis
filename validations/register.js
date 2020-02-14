const validator = require('validator')
const isEmpty = require('./../utils/isEmpty')


module.exports = function validateRegisterInput(data) {
    let errors = {}

    data.name = !isEmpty(data.name) ? data.name : ''
    data.email = !isEmpty(data.email) ? data.email : ''
    data.password = !isEmpty(data.password) ? data.password : ''

    if(!validator.isLength(data.name,{min : 2, max : 15})){
        errors.name = 'Name characters length must be between 2 and 15'
    }

    if(validator.isEmpty(data.name)){
        errors.name = 'Name field is required';
    }

    if(validator.isEmpty(data.email)){
        errors.email = 'Email field is required'
    }

    if(!validator.isEmail(data.email)){
        errors.email = 'Please enter valid email address'
    }

    if(validator.isEmpty(data.password)){
        errors.password = 'Password field is required';
    }

    return {
        errors,
        isValid : isEmpty(errors)
    }


}