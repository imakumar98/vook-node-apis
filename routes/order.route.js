const express = require('express')
const router = express.Router()

const OrderController = require('./../controllers/order.controller')


//Create order
router.post('/orders', OrderController.create)

//Get Orders
router.get('/orders', OrderController.getAll)



module.exports = router