//1.
const express = require('express');
const mongoose = require('mongoose'); //connect to MongoDB
const bodyParser = require('body-parser'); //allows to take any request and parse it using JSON format

//2. Create Express App
const app = express();

//5. Set up the Middleware
app.use(bodyParser.json()); 

//6. Connect to Database
mongoose.connect(
    'mongodb+srv://m001-student:m001-mongodb-basics@sandbox.ylwqg.mongodb.net/task_002',
    { useNewUrlParser: true, useUnifiedTopology: true },
    console.log('Connect to DB')
    );

//4. Create our first route
app.get('/', (req,res)=>{
    res.send('Hello World');
});

//Create the RhymeRoute route
const RhymeRoute = require('./routes/Rhyme');
app.use('/rhymes', RhymeRoute);

//3. Set up the server
app.listen(3000);