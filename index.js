//importing modules
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

//importing database configuration
const db = require('./config/mongoose_config');
const taskList = require('./models/task');

//defining server configuration port
const port = 8000;

//create server instance
const app = express();


//set server configuration/middleware properties
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'assets')));
app.use(express.urlencoded());
app.use(bodyParser.urlencoded({extended: true}));


//create get request for the home page and export all tasks to the page
app.get('/', (req, res)=>{
    taskList.find({})
    .then((data) => {
        res.render('index', {
            title:"Todo App",
            tasks: data
        });
    }).catch((err) => {
        console.log(`Error rendering data: ${err}`);
    });
});

//Post/create new task and add to the database
app.post('/create-task', (req, res)=>{
    taskList.create({
        description : req.body.description,
        category : req.body.category,
        dueDate : req.body.dueDate
    }).then((result) =>{
        console.log(`Task : ${result}`);
        return res.redirect('back');
    }).catch((err) =>{
        console.log(`Error : ${err}`);
    })
});


//delete the selected task
app.post('/delete-task', function(req, res) {
    // An array of selected IDs
    const selectedIds = req.body.selectedIds || []; 
    // Do something with the selected IDs, e.g., log them
    console.log('Selected IDs:', selectedIds);
    taskList.deleteMany({ _id : {$in: selectedIds}})
    .then((result)=>{
        console.log(`Deleted successfully: ${result.deletedCount}`);
        return res.redirect('back');
    }).catch((err)=>{
        console.log(`Failed to delete`);
        return res.redirect('back');
    })
});

//server configuration at particular port and log whether connection is established or not
app.listen(port, function(err){
    if(err){
        console.log(`Error starting in server: ${err.message}`);
        return;
    }
    console.log(`Starting in server: ${port}`);
})