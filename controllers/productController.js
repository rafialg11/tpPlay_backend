const productService = require('../services/productService');

exports.findAll = async (req, res) => {
    try {
        const videoId = req.params.videoId; 

        const products = await productService.findAll(videoId);

        res.status(200).json(products);
    } catch (err) {
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
