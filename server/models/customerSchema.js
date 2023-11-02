const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
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
    }
});

const customer = mongoose.model('customer', customerSchema);

module.exports = customer;
