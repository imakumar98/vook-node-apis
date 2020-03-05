const routes = require('express').Router()


const userRoutes = require('./user.route');
const categoryRoutes = require('./category.route')
const bookRoutes = require('./book.route');

routes.use(userRoutes)
routes.use(categoryRoutes)
routes.use(bookRoutes)

module.exports = routes