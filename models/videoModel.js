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


module.exports = mongoose.model('Video', videoSchema);



