const Comment = require('../models/commentModel');

exports.findAll = async (videoId) => {
    try {    
        const comments = await Comment.find({ videoId });
        return comments;
    } catch (err) {
        throw new Error(err.message);
    }
};

exports.addComment = async (videoId, comment, username ) => {
    try {
        const newComment = new Comment({
            videoId,
            comment,
            username,            
            timestamp : Date.now()

        });
        await newComment.save();
    } catch (err) {
        throw new Error(err.message);
    }
}

