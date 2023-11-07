const mongoose = require('mongoose');

const product_in_category = ({
    product_id: {
        type: String
    },
    product_name: {
        type: String
    }
})

const categorySchema = new mongoose.Schema({
    category_id: {
        type: String,
        required: true,
    },
    source: {
        type: String,
        required: true,
    },
    products: [product_in_category]
});

const category = mongoose.model('category', categorySchema);

module.exports = category;
