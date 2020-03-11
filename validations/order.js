const validator = require('validator')
const isEmpty = require('./../utils/isEmpty')


module.exports = function validateOrderInput(data) {
    let errors = {}

    data.userId = !isEmpty(data.userId) ? data.userId : '';
    data.lineItems = !isEmpty(data.lineItems) ? data.lineItems : '';
    data.deliveryAddressId = !isEmpty(data.deliveryAddressId) ? data.deliveryAddressId : '';
    data.billingAddressId = !isEmpty(data.billingAddressId) ? data.billingAddressId : '';
    data.paymentMode = !isEmpty(data.paymentMode) ? data.paymentMode : '';
    data.finalAmount = !isEmpty(data.finalAmount) ? data.finalAmount : '';

    if(validator.isEmpty(data.userId.toString())){
        errors.userId = 'User ID is required';
    }

    if(validator.isEmpty(data.deliveryAddressId.toString())){
        errors.deliveryAddressId = 'Delivery adddress is required';
    }


   if(validator.isEmpty(data.paymentMode)){
        errors.paymentMode = 'Payment mode is required';
    }


    if(validator.isEmpty(data.billingAddressId.toString())){
        errors.billingAddressId = 'Billing adddress is required';
    }
    if(validator.isEmpty(data.finalAmount.toString())){
        errors.finalAmount = 'Final amount is required';
    }

    if(isEmpty(data.lineItems) && data.lineItems.length==0) {
        errors.lineItems = 'Please add atleast one book to line item';
    }

    return {
        errors,
        isValid : isEmpty(errors)
    }


}