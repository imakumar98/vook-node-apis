const { Order } = require('./../database/models')


//Function to create order
exports.create = async function (newOrder) {

    try {
        const order = await Order.create(newOrder)
        
        return order

    } catch (e) {

        throw Error(e)
    }
}


//Function to return all pending orders
exports.getPending = async function () {

    try {
        const pendingOrders = await Order.findAll({where: {status: 'PENDING'}})

        return pendingOrders

    } catch (e) {

        throw Error(e)
    }
}