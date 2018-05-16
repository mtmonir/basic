const mongoose = require('mongoose');

var mc1= new mongoose.Schema({
    name: String,
    age: Number
});

module.exports = mongoose.Model('Mc1', mc1);