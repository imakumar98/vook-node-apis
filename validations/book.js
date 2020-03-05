const validator = require('validator')
const isEmpty = require('./../utils/isEmpty')


module.exports = function validateRegisterInput(data) {
    let errors = {}

    data.title = !isEmpty(data.title) ? data.title : ''
    data.author = !isEmpty(data.author) ? data.author : ''
    data.publisher = !isEmpty(data.publisher) ? data.publisher : ''
    data.price = !isEmpty(data.price) ? data.price : ''
    data.categoryId = !isEmpty(data.categoryId) ? data.categoryId : ''
    data.image = !isEmpty(data.image) ? data.image : ''

    if(validator.isEmpty(data.title)){
        errors.title = 'Title field is required';
    }

    if(validator.isEmpty(data.categoryId)){
        errors.categoryId = 'Category ID field is required';
    }

    if(validator.isEmpty(data.price)){
        errors.price = 'Price field is required'
    }

   

    return {
        errors,
        isValid : isEmpty(errors)
    }


}