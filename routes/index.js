const routes = require('express').Router()


const userRoutes = require('./user.route');
const categoryRoutes = require('./category.route')
const bookRoutes = require('./book.route');
const orderRoutes = require('./order.route')

routes.use(userRoutes)
routes.use(categoryRoutes)
routes.use(bookRoutes)
routes.use(orderRoutes)

module.exports = routes