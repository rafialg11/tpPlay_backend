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

exports.addVideo = async (req, res) => {
    const { thumbnail, videoUrl } = req.body;
    try {
        videoToSave = await videoService.addVideo(thumbnail, videoUrl);
        res.status(201).json({message: `Created!`, videoToSave});
    }
    catch (err) {
        res.status(400).json({ message: err.message });
    }
}
