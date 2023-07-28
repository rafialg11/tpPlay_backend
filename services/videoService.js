const Video = require('../models/videoModel');

exports.findAll = () => {
    return Video.find();
};

exports.addVideo = (thumbnail, videoUrl) => {
    const Video = new Video({
        thumbnail: thumbnail,
        videoUrl: videoUrl
    });

    return Video.save();
};
