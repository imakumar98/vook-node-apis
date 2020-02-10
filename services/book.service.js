const models = require('./../database/models')

exports.getAllBooks = async function () {

    try {
        const books = await models.Book.findAll()
        return books;
    } catch (e) {
        //Log Errors
        throw Error("Error while fetching books", e)
    }
}