const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const videoSchema = new Schema({
    urlImgThumbnail: {
        type: String,
        required: true
    }
})


module.exports = mongoose.model('Video', videoSchema);



