const videoService = require('../services/videoService');

exports.findAll = async (_, res) => {
    try {
        const videos = await videoService.findAll();
        res.status(200).json(videos);
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.findOne = async (req, res) => {
    try {
        const video = await videoService.findOne(req.params.id);
        res.status(200).json(video);
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
};

