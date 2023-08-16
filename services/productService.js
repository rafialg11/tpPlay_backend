const Product = require('../models/productModel');

exports.findAll = async (videoId) => {
    try {    
        const products = await Product.find({ videoId });
        return products;
    } catch (err) {
        throw new Error(err.message);
    }
};

exports.findOne = (videoId) => {
    return Product.findOne({videoId: videoId});
};

