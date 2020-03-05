const validator = require('validator')
const isEmpty = require('./../utils/isEmpty')


module.exports = function validateCategoryInput(data) {
    let errors = {}

    data.name = !isEmpty(data.name) ? data.name : ''
    data.parentId = !isEmpty(data.parentId) ? data.parentId : 0
    data.image = !isEmpty(data.image) ? data.image : ''

    if(!validator.isLength(data.name,{min : 2, max : 20})){
        errors.name = 'Name characters length must be between 2 and 20'
    }

    if(validator.isEmpty(data.name)){
        errors.name = 'Category name field is required';
    }

    return {
        errors,
        isValid : isEmpty(errors)
    }


}