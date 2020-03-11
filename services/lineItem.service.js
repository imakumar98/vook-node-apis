const { LineItem } = require('./../database/models')

exports.create = async function (newLineItem) {

    try {
        const lineItem = await LineItem.create(newLineItem)
        
        return lineItem;
    } catch (e) {
        throw Error(e)
    }
}

