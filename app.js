const express = require ('express');
const bodyParser = require("body-parser");
const rc1 = require('./routes/rc1');
const mongoose = require('mongoose');
const app = express();

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

const port = process.env.PORT || 8080;
const ip = process.env.IP;

app.use("/test", (req, res)=>{
    res.send("Hello World");
});

app.use('/rc1', rc1);

app.listen(port, ip,  ()=>{
    console.log("Server Started on Port "+ port + " at IP " + ip);
})