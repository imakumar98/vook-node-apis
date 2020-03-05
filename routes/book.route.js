const express = require('express')

const router = express.Router()

const BookController = require('./../controllers/book.controller')

//Book Routes
router.get('/books', BookController.getAll)



router.post('/book', BookController.create)

module.exports = router