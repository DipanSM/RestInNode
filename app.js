'use strict'
var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

var auth = require('./auth.js');

var bodyParser = require('body-parser');

app.use (bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//app.use(auth);

var routes = require('./api/routes/employeeRoutes');
routes(app);

app.listen(port);

console.log('Server started on : ' + port);
