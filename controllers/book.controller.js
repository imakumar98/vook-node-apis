const BookService = require('./../services/book.service')
const validateBookInput = require('./../validations/book')

exports.getAll = async function(req, res, next) {
    try {
        const books = await BookService.getAll()
        return res.status(200).json({ total: books.length, data: books})
    } catch (e) {

        return res.status(400).json({ status: 400, message: e.message});
        
    }
}


//Controller to create book
exports.create = async function(req, res, next) {

    const { isValid, errors } = validateBookInput(req.body)

    if(!isValid) {
        
        const errorResponse = {
            name: "Bad Request",
            message: "Book validation failed",
            code: 400,
            errors: errors
        }
        return res.status(400).json(errorResponse);
    }

    try {

        const slug = slugify(req.body.title) + '-' +new Date().getTime();

        const newBook = {
            title: req.body.title,
            author: req.body.author,
            publisher: req.body.publisher,
            price: req.body.price,
            categoryId: req.body.categoryId,
            slug: slug,
            image: req.body.image,
        }

        const book = await BookService.create(newBook)

        return res.status(201).json(book)

    } catch(e) {

        return res.status(400).json({ status: 400, message: e.message});

    }

}