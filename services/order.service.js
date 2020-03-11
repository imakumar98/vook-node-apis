const { Order } = require('./../database/models')

exports.create = async function (newOrder) {

    try {
        const order = await Order.create(newOrder)
        
        return order;

    } catch (e) {

        throw Error(e)
    }
}


exports.getAll = async function () {

    try {
        const categories = await Category.findAll()
        return categories;
    } catch (e) {
        throw Error(e)
    }
}