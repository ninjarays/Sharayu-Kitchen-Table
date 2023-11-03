const mongoose = require('mongoose');

const productSchema = ({
    product_id: {
        type: String
    },
    product_name: {
        type: String
    }
});

const eventSchema = new mongoose.Schema({
    client: {
        type: String,
        required: true
    },
    event_name: {
        type: String,
        required: [true, 'Event Name should be there!']
    },
    event_place: {
        type: String,
        required: [true, 'Event place should be Mentioned']
    },
    event_date: {
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    event_rating: {
        type: Number,
        required: true,
        min: 0,
        max: 5,
        default: 0
    },
    ratings: {
        type: Number,
        default: 0
    },
    products: [productSchema]
});

const event = mongoose.model('event', eventSchema);

module.exports = event;
