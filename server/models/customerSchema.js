const mongoose = require('mongoose');

const customer_product_rating_event = ({
    product_id: {
        type: String
    },
    product_name: {
        type: String
    },
    product_rating: {
        type: Number,
        Max: 5,
        Min: 0,
    },
    product_feedback: {
        type: String
    }
})

const customerSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    customer_name: {
        type: String,
        required: true
    },
    customer_phone: {
        type: Number,
        required: [true, 'Customer Phone Number should be there!']
    },
    customer_overall_rating: {
        type: Number,
        required: true,
        min: 1,
        max: 5,
    },
    event_id: {
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    products: [customer_product_rating_event]
});

const customer = mongoose.model('customer', customerSchema);

module.exports = customer;
