const express    = require('express');
const mongoose   = require('mongoose');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const jwt    = require('jsonwebtoken');
const dotenv = require('dotenv');
const cp = require('cookie-parser');

dotenv.config();
const app	= express();
app.use(cp());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json({}));
app.use(express.static(__dirname+'../client/build/'));


app.use(require('./app/routes'));


const PORT = process.env.PORT || 8080;

app.listen(PORT,function(){
	console.log('server is running on ' + PORT);
});