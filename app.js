const express = require ('express');
const path = require('path');
const bodyParser = require("body-parser");
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');

//Connect to Database
mongoose.connect(config.database);

// On Connection
mongoose.connection.on('connected', ()=> {
    console.log('Connected to Database ' + config.database);
});

// On Error
mongoose.connection.on('error', (err)=> {
    console.log('Databse connection error: '+err);
});

const app = express();

// Set routes
const rc1 = require('./routes/rc1');
const users = require('./routes/users');

const port = process.env.PORT || 8080;
const ip = process.env.IP;

// Use middleware for Cross Origin Reference*
app.use(cors());


// Body Parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Set static folder
app.use(express.static('public')); 
//app.use(express.static(path.join(_dirname, 'public')));
require('./config/passport')(passport);
app.use(passport.initialize());
app.use(passport.session());



// routes
app.use('/rc1', rc1);
app.use('/users', users);

//Index Route

app.get('/', (req, res)=>{
    res.send('Invalid Endpoint');
})

app.listen(port, ip,  ()=>{
    console.log("Server Started on Port "+ port + " at IP " + ip);
})