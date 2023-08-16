const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const videoSchema = new Schema({
    urlImgThumbnail: {
        type: String,
        required: true
    },
    videoUrl: {
        type: String,
        required: true
    },
    videoTitle: {
        type: String,
        required: true
    },
    videoOwner: {
        type: String,
        required: true
    },
    videoViews: {
        type: Number,
        required: true
    },
})


module.exports = mongoose.model('Video', videoSchema);



