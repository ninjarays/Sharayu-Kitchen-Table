const express = require('express')
const router = express.Router()
const quotesController = require('../controllers/quotesController')

router
    .route('/')
    .get(quotesController.getAllquotes) // Contoller to fetch all Customers info
    .post(quotesController.addQuotes) // Contoller to create a new Customer

// router
//     .route('/:id')
//     .get(categoryController.getCategory) // Contoller to fetch a Customer info by Customer id
    // .patch(customerController.updateProductrating) // Controller to Add product rating and feedback from customer
module.exports = router;