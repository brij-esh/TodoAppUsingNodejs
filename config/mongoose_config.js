//call the mongoose module
const mongoose = require('mongoose');

//create connection
mongoose.connect('mongodb://localhost/todo_app_db');

//acquire connection if connected
const db = mongoose.connection;

//check if connection failed
db.on('error', err =>{
    console.log(`There was an error connecting to database: ${err.message}`);
    return;
});

//check if connection was done successfully
db.on('open', ()=>{
    console.log(`Database connection established`);
})