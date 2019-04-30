console.clear();

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 3000;
// const path = require('path');
var morgan = require('morgan');

const api = require('./server/routes/api');


//app.use(express.static(path.join(__dirname,'dist')));

// CORS 
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');      
    // intercept OPTIONS method
    if ('OPTIONS' == req.method) {
      res.status(200).end();
    }
    else {
      next();
    }
});

// body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

//morgan
app.use(morgan('combined'));

app.use('/api' , api);

// mongoose
const mongoose = require('mongoose');
// register to error and connect events before making connection
mongoose.connection.on('error',(e) => console.log('Db Connect Error:',e));
mongoose.connection.on('connected',() => {
    console.log('Db Connected to:',mongoose.connection.name);
    // start server since db is properly connected
    app.listen(PORT, () => {
        console.log(`Node listening on localhost:${PORT}`);
    });
});
// actually connect to db
mongoose.connect('mongodb://localhost:27017/videoplayer',{useNewUrlParser: true});

// app.get('*' ,(req,res)=>{
//     res.sendFile(path.join(__dirname,'dist/index.html'));
// });
// return error if got here with no valid route
app.use('**', (req, res) => {
    console.log('Unknown request');
    res.status('404').send("404 Unknown Request");
});

