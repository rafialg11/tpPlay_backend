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
    price: {
        type: Number,
        required: true
    }
})
Schema.method("toJSON", function(){
    const {__v, _id, ...object} = this.toObject()
    object.id = _id
    return object
})

module.exports = mongoose.model('Product', productSchema);



