const validator = require('validator')
const isEmpty = require('./../utils/isEmpty')


module.exports = function validateAddressInput(data) {
    let errors = {}

    data.userId = !isEmpty(data.userId) ? data.userId : ''
    data.type = !isEmpty(data.type) ? data.type : ''
    data.name = !isEmpty(data.name) ? data.name : ''
    data.phone = !isEmpty(data.phone) ? data.phone : ''
    data.address1 = !isEmpty(data.address1) ? data.address1 : ''
    data.city = !isEmpty(data.city) ? data.city : ''
    data.pincode = !isEmpty(data.pincode) ? data.pincode : ''

    
    if(validator.isEmpty(data.type)){
        errors.type = 'Address type is required';
    }

    if(validator.isEmpty(data.userId.toString())){
        errors.userId = 'User ID is required';
    }

    if(validator.isEmpty(data.name)){
        errors.name = 'Name is required';
    }

    if(validator.isEmpty(data.phone)){
        errors.phone = 'Phone is required';
    }

    if(validator.isEmpty(data.address1)){
        errors.address1 = 'Address 1 is required';
    }

    if(validator.isEmpty(data.city)){
        errors.city = 'City is required';
    }

    if(validator.isEmpty(data.pincode)){
        errors.pincode = 'Pincode is required';
    }



    if(!validator.isLength(data.phone,{min : 7, max : 10})){
        errors.phone = 'Invalid Phone number'
    }

    return {
        errors,
        isValid : isEmpty(errors)
    }


}