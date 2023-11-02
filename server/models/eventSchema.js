const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    product_id: {
        type: mongoose.Schema.Types.String,
        ref: 'Product'
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
        min: 1,
        max: 5,
        default: "TBD"
    },
    ratings: {
        type: Number,
        default: 0
    },
    products: [productSchema] // Embed product schema here
});

const event = mongoose.model('event', eventSchema);

module.exports = event;
