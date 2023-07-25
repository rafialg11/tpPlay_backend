const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    comment: {
        type: String,
        required: true
    },
    timestamp: {
        type: Date,
        default: Date.now
    }
})
Schema.method("toJSON", function(){
    const {__v, _id, ...object} = this.toObject()
    object.id = _id
    return object
})

module.exports = mongoose.model('Comment', commentSchema);



