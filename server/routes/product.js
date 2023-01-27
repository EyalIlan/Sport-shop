
const express = require('express')
const {Auth} = require('../utils/middleware/auth')
const ProductController = require('../controllers/product')

const router = express.Router()

router.get('/',ProductController.getProducts)

router.post('/',Auth,ProductController.createProduct)

router.put('/:id',Auth,ProductController.updateProduct)

router.delete('/:id',Auth,ProductController.deleteProduct)








module.exports = router