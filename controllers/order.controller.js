const OrderService = require('./../services/order.service')
const validateOrderInput = require('./../validations/order');
const slugify = require('./../utils/slugify')

exports.getAll = async function(req, res, next) {
    //Validate request parameters

    try {
        const orders = await OrderService.getAll()
        
        return res.status(200).json(orders)

    } catch (e) {

        return res.status(400).json({ status: 400, message: e.message});
        
    }
}




//Create order controller
exports.create = async function(req,res, next) {

    console.log(req.body)

    const { isValid, errors } = validateOrderInput(req.body)

    if(!isValid) {
        
        const errorResponse = {
            name: "Bad Request",
            message: "Order validation failed",
            code: 400,
            errors: errors
        }
        return res.status(400).json(errorResponse);
    }

    try {

        console.log("Create order");

        // const slug = slugify(req.body.name)

        // const newCategory = {
        //     name: req.body.name,
        //     slug: slug,
        //     parentId: req.body.parentId,
        //     image: req.body.image,
        // }

        // const category = await CategoryService.create(newCategory)

        // return res.status(201).json(category)

    } catch(e) {

        return res.status(400).json({ status: 400, message: e.message});

    }
}