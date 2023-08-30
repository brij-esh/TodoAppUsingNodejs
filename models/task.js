// Importing the mongoose module
const mongoose = require('mongoose');

// Create task schema for storing task
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
    },
    state :{
        type: 'boolean',
        required: true
    }
});
const tasks = mongoose.model('Tasks', taskSchema);
// Exporting the schema
module.exports = tasks;