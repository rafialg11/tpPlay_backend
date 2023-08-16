module.exports = (app) => {
    const product = require('../controllers/productController')
    const router = require('express').Router()

    router.get('/:id', product.findAll)
    // router.get('/:id', product.findOne)
    app.use('/api/products', router)
}