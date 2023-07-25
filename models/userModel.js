const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    //add profile picture here
    profilePicture: {
        type: String,
        required: false
    }    
})
Schema.method("toJSON", function(){
    const {__v, _id, ...object} = this.toObject()
    object.id = _id
    return object
})

module.exports = mongoose.model('User', userSchema);



