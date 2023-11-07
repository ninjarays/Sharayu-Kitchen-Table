const express = require('express')
const router = express.Router()
const categoryController = require('../controllers/categoryController')

router
    .route('/')
    .get(categoryController.getAllcategorys) // Contoller to fetch all Customers info
    .post(categoryController.addCategory) // Contoller to create a new Customer

router
    .route('/:id')
    .get(categoryController.getCategory) // Contoller to fetch a Customer info by Customer id
    // .patch(customerController.updateProductrating) // Controller to Add product rating and feedback from customer
module.exports = router;