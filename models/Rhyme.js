//Connect to database
const mongoose = require('mongoose');

//
const rhymeSchema = mongoose.Schema({
    rhymeScheme: String,
    rapper: String
});

//
module.exports = mongoose.model('rhymeScheme', rhymeSchema);