const routes = require('express').Router()

// const router = express.Router()

const bookRoutes = require('./book.route');
const userRoutes = require('./user.route');

routes.use(bookRoutes);
routes.use(userRoutes);

module.exports = routes