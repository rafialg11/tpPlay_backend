const Product = require('../models/productModel');

exports.findAll = () => {
    return Product.find();
};

exports.findOne = (videoId) => {
    return Product.findOne({videoId: videoId});
};

