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
    }, 
    videoId: {
        type: String,
        required: true
    }
})


module.exports = mongoose.model('Comment', commentSchema);



