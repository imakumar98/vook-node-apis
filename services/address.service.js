const { Address } = require('./../database/models')

exports.create = async function (newAddress) {

    try {
        const address = await Address.create(newAddress)
        
        return address

    } catch (e) {

        throw Error(e)
    }
}

