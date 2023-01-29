
const express = require('express')
const {Auth} = require('../utils/middleware/auth')
const {Admin} = require('../utils/middleware/admin')
const ProductController = require('../controllers/product')

const router = express.Router()

router.get('/',ProductController.getProducts)

router.get('/:id',ProductController.getSpecificProduct)

router.post('/',Auth,ProductController.createProduct)

router.put('/:id',Auth,Admin,ProductController.updateProduct)

router.delete('/:id',Auth,Admin,ProductController.deleteProduct)


// 





module.exports = router