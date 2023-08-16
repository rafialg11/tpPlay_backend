const Video = require('../models/videoModel');

exports.findAll = () => {
    return Video.find();
};

exports.findOne = (id) => {
    return Video.findById(id);
}