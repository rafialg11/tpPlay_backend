const commentService = require('../services/commentService');

exports.findAll = async (req, res) => {
    try {
        const videoId = req.params.videoId; 

        const comments = await commentService.findAll(videoId);

        res.status(200).json(comments);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.addComment = async (req, res) => {
    try {
        const videoId = req.params.videoId;
        const comment = req.body.comment;
        const username = req.body.username;

        await commentService.addComment(videoId, comment, username);

        res.status(200).json({ message: 'Comment added successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

