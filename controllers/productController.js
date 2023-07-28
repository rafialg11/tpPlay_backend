const productService = require('../services/productService');

exports.findAll = async (_, res) => {
    try {
        const product = await productService.findAll();
        res.status(200).json(product);
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.findOne = async (req, res) => {
    try {
        const product = await productService.findOne(req.params.id);
        res.status(200).json(product);
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
}
