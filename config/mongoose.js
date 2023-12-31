require('dotenv').config();
const mongoose = require('mongoose');
// mongoose.connect('mongodb://0.0.0.0/eCommerce');
mongoose.connect(process.env.MongoUri);
const db = mongoose.connection;

db.on('error', console.error.bind(console,'error in connecting db'));

db.once('open', function(){
    console.log('successfully connected to db');
});
module.export = db;
