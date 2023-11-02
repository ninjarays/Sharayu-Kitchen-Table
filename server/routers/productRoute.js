const express = require('express')
const router = express.Router()
const productController = require('./../controllers/productController')

router
    .route('/')
    .get(productController.getAllproduct) // Contoller to fetch all products info
    .post(productController.Addproduct) // Contoller to create a new product
router
    .route('/:id')
    .get(productController.getProduct) // Contoller to fetch a product info by product id
    .patch(productController.updateRatingproduct) // Contoller to update a product_rating & number of ratings received


module.exports = router;