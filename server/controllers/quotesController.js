const quoteSchema = require('../models/quotesSchema')
const quoteMailer = require('../mail/quotesMailer')

// Contoller to fetch all Quotes info
exports.getAllquotes = async (req, res) => {
    try {
        const quote = await quoteSchema.find();
        res.status(200).json({
            status: 'success',
            data: {
                length: quote.length,
                quote
            }
        });
    } catch (err) {
        res.status(500).json({ status: 'Fail', Message: err });
    }
}

// Contoller to create a new Quote
exports.addQuotes = async (req, res) => {
    try {
        const quote = await quoteSchema.create(req.body);
        await quoteMailer.quoteMail(req.body)

        res.status(200).json({
            status: 'success',
            data: {
                quote
            }
        });
    } catch (err) {
        res.status(500).json({ status: 'Fail', Message: err });
    }
}
