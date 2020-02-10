const BookService = require('./../services/book.service')

exports.getAllBooks = async function(req, res, next) {
    //Validate request parameters

    try {
        const books = await BookService.getAllBooks()
        return res.status(200).json({ status: 200, data: books, message: 'Succesfully usets retrieved'})
    } catch (e) {

        return res.status(400).json({ status: 400, message: e.message});
        
    }
}