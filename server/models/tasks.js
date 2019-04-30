const mongoose  = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new Schema({
    text: {
        type: String,
        required: [true,'text is required']
    },
    created: {type: Date, default: Date.now},
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users'
    },
  
});

module.exports = mongoose.model('Tasks' , taskSchema );