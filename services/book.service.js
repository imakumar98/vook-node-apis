const models = require('./../database/models')

exports.getAllBooks = async function () {

    try {
        const books = await models.Book.findAll()
        console.log("Below one are books")
        console.log(books);
        return books;
    } catch (e) {
        //Log Errors
        throw Error("Error while fetching books", e)
    }
}