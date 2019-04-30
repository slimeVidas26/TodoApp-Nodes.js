const mongoose  = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: [true,'name is required']
    },
    title: {
        type: String,
        required: [true,'title is required']
    },
    desc: {
        type: String,
        required: [true,'description is required']
    },
});

module.exports = mongoose.model('Users' , userSchema );