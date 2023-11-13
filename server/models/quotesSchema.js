const mongoose = require('mongoose');

const productSchema = ({
    product_id: {
        type: String
    },
    product_name: {
        type: String
    }
});

const quoteSchema = new mongoose.Schema({
    customer_name: {
        type: String,
        required: true,
    },
    customer_phone: {
        type: Number,
        required: true
    },
    customer_guest_number: {
        type: Number,
        required: true
    },
    products: [productSchema]
});

const Quotes = mongoose.model('Quotes', quoteSchema);

module.exports = Quotes;
