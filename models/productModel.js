const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    productUrl: {
        type: String,
        required: true
    },
    productImg: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    videoId: {
        type: String,
        required: true
    }
})


module.exports = mongoose.model('Product', productSchema);



