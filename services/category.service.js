const models = require('./../database/models')

exports.createCategory = async function (categoryName) {

    try {
        const category = await models.Category.create({name: categoryName})
        
        return category;
    } catch (e) {
        throw Error("Error while creating category", e)
    }
}