const AddressService = require('./../services/address.service')
const validateAddressInput = require('./../validations/address');

//Create address controller
exports.create = async function(req,res, next) {

    const { isValid, errors } = validateAddressInput(req.body)

    if(!isValid) {
        
        const errorResponse = {
            name: "Bad Request",
            message: "Address validation failed",
            code: 400,
            errors: errors
        }
        return res.status(400).json(errorResponse);
    }

    try {

        

        const newAddress = {
            type: req.body.type,
            userId: req.body.userId,
            name: req.body.name,
            phone: req.body.phone,
            address1: req.body.address1,
            address2: req.body.address2,
            city: req.body.city,
            pincode: req.body.pincode
        }


        console.log(newAddress);

        const address = await AddressService.create(newAddress)

        return res.status(201).json(address)

    } catch(e) {

        return res.status(400).json({ status: 400, message: e.message});

    }
}