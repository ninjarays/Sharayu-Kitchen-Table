const eventSchema = require('../models/eventSchema')
const productSchema = require('../models/productSchema');

// Contoller to Get all the events
exports.getAllevent = async (req, res) => {
    try {
        const event = await eventSchema.find();
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

// Contoller to Create a New event
exports.Addevent = async (req, res) => {
    try {
        const products = req.body.products;
        const productIds = products.map(product => product.product_id);
        
        // Fetch product names based on product ids
        const productNames = await productSchema.find({ _id: { $in: productIds } }, 'product_name');

        // Add the product names to req.body
        for (let i = 0; i < products.length; i++) {
            products[i].product_name = productNames.find(product => product._id.toString() === products[i].product_id).product_name;
        }

        const event = await eventSchema.create(req.body);
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

// Contoller to fetch a event info by event id
exports.getEvent = async (req, res) => {
    try {
        const event = await eventSchema.findById(req.params.id);
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

// Contoller to update event_rating and number of ratings received from customers
exports.updateRatingevent = async (req, res) => {
    try {
        const event = await eventSchema.findByIdAndUpdate( req.params.id, { $set: { event_rating: req.body.event_rating }, $inc: { ratings: 1 }  }, { new: true });
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