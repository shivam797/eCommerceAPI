const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 8000;
const db = require('./config/mongoose');
app.use(express.urlencoded());
app.use('/', require('./routers/index'));

app.listen(port, function(err){
    if(err){
        console.log('error in connecting server:', err);
    }
    console.log('server is running on port number:', port);
})
