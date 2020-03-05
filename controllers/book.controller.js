const BookService = require('./../services/book.service')

exports.getAll = async function(req, res, next) {
    //Validate request parameters

    console.log("List of books");

    try {
        const books = await BookService.getAllBooks()
        console.log("Below one are books in controller");
        console.log(books)
        return res.status(200).json({ status: 200, data: books, message: 'Succesfully usets retrieved'})
    } catch (e) {

        return res.status(400).json({ status: 400, message: e.message});
        
    }
}


//Controller to create book
exports.create = async function(req, res, next) {
    
    console.log(req.body)

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

        const slug = slugify(req.body.name)

        const newBook = {
            name: req.body.name,
            slug: slug,
            parentId: req.body.parentId,
            image: req.body.image,
        }

        const category = await CategoryService.create(newCategory)

        return res.status(201).json(category)

    } catch(e) {

        return res.status(400).json({ status: 400, message: e.message});

    }

}