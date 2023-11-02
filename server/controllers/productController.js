const productSchema = require('../models/productSchema')

// Contoller to fetch all products info
exports.getAllproduct = async (req, res) => {
    try {
        const event = await productSchema.find();
        res.status(200).json({
            status: 'success',
            data: {
                length: event.length,
                event
            }
        });
    } catch (err) {
        res.status(500).json({ status: 'Fail', Message: err });
    }
}

// Contoller to create a new product
exports.Addproduct = async (req, res) => {
    try {
        const event = await productSchema.create(req.body);
        res.status(200).json({
            status: 'success',
            data: {
                event
            }
        });
    } catch (err) {
        res.status(500).json({ status: 'Fail', Message: err });
    }
}

// Contoller to fetch a product info by product id
exports.getProduct = async (req, res) => {
    try {
        const product = await productSchema.findById(req.params.id);
        res.status(200).json({
            status: 'success',
            data: {
                product
            }
        });
    } catch (err) {
        res.status(500).json({ status: 'Fail', Message: err });
    }
}

// Contoller to update a product_rating & number of ratings received
exports.updateRatingproduct = async (req, res) => {
    try {
        const product = await productSchema.findByIdAndUpdate(
            req.params.id,
            { 
                $set: { product_rating: req.body.product_rating },
                $inc: { ratings: 1 } 
            },
            { new: true }
        );
        res.status(200).json({
            status: 'success',
            data: {
                product
            }
        });
    } catch (err) {
        res.status(500).json({ status: 'Fail', Message: err });
    }
}
