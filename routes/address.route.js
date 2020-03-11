const express = require('express')
const router = express.Router()

const AddressController = require('./../controllers/address.controller')


//Create address route
router.post('/addresses', AddressController.create)


module.exports = router