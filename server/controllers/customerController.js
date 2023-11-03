const customerSchema = require('../models/customerSchema')

// Contoller to fetch all Customers info
exports.getAllcustomers = async (req, res) => {
    try {
        const customer = await customerSchema.find();
        res.status(200).json({
            status: 'success',
            data: {
                length: customer.length,
                customer
            }
        });
    } catch (err) {
        res.status(500).json({ status: 'Fail', Message: err });
    }
}

// Contoller to create a new Customer
exports.addCustomer = async (req, res) => {
    try {
        const customer = await customerSchema.create(req.body);
        res.status(200).json({
            status: 'success',
            data: {
                customer
            }
        });
    } catch (err) {
        res.status(500).json({ status: 'Fail', Message: err });
    }
}

// Contoller to fetch a Customer info by Customer id
exports.getCustomer = async (req, res) => {
    try {
        const customer = await customerSchema.findById(req.params.id);
        res.status(200).json({
            status: 'success',
            data: {
                customer
            }
        });
    } catch (err) {
        res.status(500).json({ status: 'Fail', Message: err });
    }
}

// Controller to Add product rating and feedback from customer
exports.updateProductrating = async (req, res) => {
    try {
        const customer = await customerSchema.findByIdAndUpdate(req.params.id, {products: req.body});
        res.status(200).json({
            status: 'success',
            data: {
                customer
            }
        });
    } catch (err) {
        res.status(500).json({ status: 'Fail', Message: err });
    }
}