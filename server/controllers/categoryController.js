const categorySchema = require('../models/categorySchema')

// Contoller to fetch all categorys info
exports.getAllcategorys = async (req, res) => {
    try {
        const category = await categorySchema.find();
        res.status(200).json({
            status: 'success',
            data: {
                length: category.length,
                category
            }
        });
    } catch (err) {
        res.status(500).json({ status: 'Fail', Message: err });
    }
}

// Contoller to create a new category
exports.addCategory = async (req, res) => {
    try {
        const category = await categorySchema.create(req.body);
        res.status(200).json({
            status: 'success',
            data: {
                category
            }
        });
    } catch (err) {
        res.status(500).json({ status: 'Fail', Message: err });
    }
}

exports.getCategory = async (req, res) => {
    try {
        const category = await categorySchema.findById(req.params.id);
        res.status(200).json({
            status: 'success',
            data: {
                category
            }
        });
    } catch (err) {
        res.status(500).json({ status: 'Fail', Message: err });
    }
}