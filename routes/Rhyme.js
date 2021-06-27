const express = require('express');
const Rhyme = require('../models/Rhyme');
//
const router = express.Router();
//
const rhyme = require('../models/Rhyme');

//Set the route
router.get('/', async (req,res) =>{
    const getRhyme = await Rhyme.find();
    res.json(getRhyme);
});

//Submit the post
router.post('/', async (req,res) =>{
    const newRhyme = new Rhyme({
        rhymeScheme: req.body.rhymeScheme,
        rapper: req.body.rapper
    });
    const savedRhyme = await newRhyme.save();
    res.json(savedRhyme);
});

//
module.exports = router;