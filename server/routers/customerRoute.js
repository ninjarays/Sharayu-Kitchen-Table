const express = require('express')
const router = express.Router()
const customerController = require('../controllers/customerController')

router
    .route('/')
    .get(customerController.getAllcustomers) // Contoller to fetch all Customers info
    .post(customerController.addCustomer) // Contoller to create a new Customer

router
    .route('/:id')
    .get(customerController.getCustomer) // Contoller to fetch a Customer info by Customer id
    .patch(customerController.updateProductrating) // Controller to Add product rating and feedback from customer
module.exports = router;