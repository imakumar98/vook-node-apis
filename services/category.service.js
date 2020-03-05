const { Category } = require('./../database/models')

exports.create = async function (newCategory) {

    try {
        const category = await Category.create(newCategory)
        
        return category;
    } catch (e) {
        throw Error("Error while creating category", e)
    }
}


exports.getAll = async function () {

    try {
        const categories = await Category.findAll()
        return categories;
    } catch (e) {
        throw Error(e)
    }
}