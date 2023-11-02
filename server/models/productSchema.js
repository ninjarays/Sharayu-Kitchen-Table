const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    product_name: {
        type: String,
        required: true,
    },
    category_id: {
        type: String,
        required: true
    },
    source: {
        type: String,
        required: true,
    },
    status: {
      type: String,
      required: true,
      default: "Out of Stock"
    },
    price: {
        type: Number,
        required: true,
    },
    product_rating: {
        type: Number,
        required: true,
        min: 1,
        max: 5,
        default: "TBD"
    },
    product_image: {
        type: String,
        required: [true, "Please Provide Path of the Image"],
    },
    ratings: {
        type: Number,
        default: 0
    }
});

const product = mongoose.model('product', productSchema);

module.exports = product;
