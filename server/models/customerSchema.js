const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
    customer_name: {
        type: String,
        required: true
    },
    customer_email: {
        type: String,
        required: [true, 'Customer Email should be there!']
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
