const { Book } = require('./../database/models')

exports.getAll = async function () {

    try {
        const books = await Book.findAll()
        console.log("Below one are books")
        console.log(books);
        return books;
    } catch (e) {
        //Log Errors
        throw Error("Error while fetching books", e)
    }
}


//Service: create new book
exports.create = async function (newBook) {

    try {
        const book = await Book.create(newBook)
        
        return book;
        
    } catch (e) {
        throw Error(e)
    }
}