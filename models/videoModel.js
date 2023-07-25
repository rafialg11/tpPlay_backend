const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const videoSchema = new Schema({
    thumbnail: {
        type: String,
        required: true
    },
    videoUrl: {
        type: String,
        required: true
    }
})
Schema.method("toJSON", function(){
    const {__v, _id, ...object} = this.toObject()
    object.id = _id
    return object
})

module.exports = mongoose.model('Video', videoSchema);



