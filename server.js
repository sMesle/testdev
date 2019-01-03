var express = require('express');
var bodyParser = require('body-parser');

var product = require('./routes/product'); // Imports routes for the products
var app = express();
var flash = require('connect-flash');
var session = require('express-session');
var cookieParser = require('cookie-parser');


// Set up mongoose connection
var mongoose = require('mongoose');
var dev_db_url = 'mongodb://smesle:smesle1@ds247171.mlab.com:47171/troov-dev';
var mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cookieParser('secretString'));
app.use(session({
    cookie: {
        maxAge: 60000
    }
}));
app.use(flash());
app.use('/products', product);


var port = 1234;

app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});