const CategoryService = require('./../services/category.service')
const validateCategoryInput = require('./../validations/category');
const slugify = require('./../utils/slugify')

exports.getAll = async function(req, res, next) {
    //Validate request parameters

    try {
        const categories = await CategoryService.getAll()
        
        return res.status(200).json(categories)

    } catch (e) {

        return res.status(400).json({ status: 400, message: e.message});
        
    }
}




//Create category controller
exports.create = async function(req,res, next) {

    console.log(req.body)

    const { isValid, errors } = validateCategoryInput(req.body)

    if(!isValid) {
        
        const errorResponse = {
            name: "Bad Request",
            message: "Category validation failed",
            code: 400,
            errors: errors
        }
        return res.status(400).json(errorResponse);
    }

    try {

        const slug = slugify(req.body.name)

        const newCategory = {
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