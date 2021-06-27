//Connect to database
const mongoose = require('mongoose');

//Hello
const rhymeSchema = mongoose.Schema({
    rhymeScheme: String,
    rapper: String
});

//
module.exports = mongoose.model('rhyme scheme', rhymeSchema);