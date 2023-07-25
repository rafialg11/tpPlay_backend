const Video = require('../models/Video');

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
