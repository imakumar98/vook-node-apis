const routes = require('express').Router()


const userRoutes = require('./user.route')
const categoryRoutes = require('./category.route')
const bookRoutes = require('./book.route')
const orderRoutes = require('./order.route')
const addressRoutes = require('./address.route')

routes.use(userRoutes)
routes.use(categoryRoutes)
routes.use(bookRoutes)
routes.use(orderRoutes)
routes.use(addressRoutes)

module.exports = routes