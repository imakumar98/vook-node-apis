const express = require('express')

const router = express.Router()

const BookController = require('./../controllers/book.controller')

//Book Routes
router.get('/books', BookController.getAllBooks)



router.post('/api/book', async (req,res)=>{

    const book = await models.Book.create(req.body);

    res.status(201).json({
        book,
    })

})

module.exports = router