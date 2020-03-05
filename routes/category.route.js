const express = require('express')
const router = express.Router()

const CategoryController = require('./../controllers/category.controller')


//Create category
router.post('/categories', CategoryController.create)

//Create category
router.get('/categories', CategoryController.getAll)



module.exports = router