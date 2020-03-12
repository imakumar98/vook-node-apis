const OrderService = require('./../services/order.service')
const LineItemService = require('./../services/lineItem.service')
const MailService = require('./../services/mail.service');
const UserService = require('./../services/user.service');


const validateOrderInput = require('./../validations/order');


//Get pending orders controllers
exports.getPending = async function(req, res, next) {

    try {
        const orders = await OrderService.getPending()
        
        return res.status(200).json(orders)

    } catch (e) {

        return res.status(400).json({ status: 400, message: e.message})
        
    }
}




//Create order controller
exports.create = async function(req,res, next) {

    const { isValid, errors } = validateOrderInput(req.body)

    if(!isValid) {
        
        const errorResponse = {
            name: "Bad Request",
            message: "Order validation failed",
            code: 400,
            errors: errors
        }
        return res.status(400).json(errorResponse);
    }

    try {

        const newOrder = {
            userId: req.body.userId,
            remarks: req.body.remarks,
            deliveryDate: req.body.deliveryDate,
            deliveryAddressId: req.body.deliveryAddressId,
            billingAddressId: req.body.billingAddressId,
            status: 'PENDING',
            paymentMode: req.body.paymentMode,
            finalAmount: req.body.finalAmount,
        }

        const order = await OrderService.create(newOrder)

        const {id} = order;

        const lineItems = req.body.lineItems;

        lineItems.forEach(async (lineItem) => {
            const newLineItem = {
                orderId: id,
                bookId: lineItem.bookId,
                quantity: lineItem.quantity,
                amount: lineItem.amount
            }
            await LineItemService.create(newLineItem)
        });


        //Send mail for order confirmation

        const user = await UserService.getById(order.userId);

        const status = await MailService.orderConfirmation(id, user.name, user.email);

        if(status==202) return res.status(201).json(order)
        






        

        

    } catch(e) {

        return res.status(400).json({ status: 400, message: e.message});

    }
}