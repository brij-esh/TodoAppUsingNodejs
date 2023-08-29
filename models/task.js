const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    description : {
        type: 'string',
        required: true
    },
    category : {
        type: 'string',
        required : true
    },
    dueDate : {
        type: 'string',
        required : true
    }
});

const tasks = mongoose.model('Tasks', taskSchema);
module.exports = tasks;