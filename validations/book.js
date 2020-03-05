const validator = require('validator')
const isEmpty = require('./../utils/isEmpty')


module.exports = function validateRegisterInput(data) {
    let errors = {}

    data.title = !isEmpty(data.title) ? data.title : ''
    data.author = !isEmpty(data.author) ? data.author : ''
    data.publisher = !isEmpty(data.publisher) ? data.publisher : ''
    data.price = !isEmpty(data.price) ? data.price : null
    data.categoryId = !isEmpty(data.categoryId) ? data.categoryId : ''
    data.image = !isEmpty(data.image) ? data.image : ''

    if(validator.isEmpty(data.title)){
        errors.title = 'Title field is required';
    }

    if(validator.isEmpty(data.categoryId.toString())){
        errors.categoryId = 'Category ID field is required';
    }

    if(validator.isEmpty(data.price.toString())){
        errors.price = 'Price field is required'
    }

    if(validator.isEmpty(data.image)){
        errors.image = 'Image field is required'
    }

   

    return {
        errors,
        isValid : isEmpty(errors)
    }


}