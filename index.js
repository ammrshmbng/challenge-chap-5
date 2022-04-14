// import express module
const express = require('express');

// initialize express
const app = express();

// import route
const route = require('./route');

// import error local module middleware
const errorPageNotFound = require('./middlewares/error');

// config port
const port  = 8000;

// set view engine
app.set('view engine','ejs');

// serving static files
app.use(express.static('public'));

// reading request body middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//routing
app.use('/',route);

// error notfound middlewares
app.use(errorPageNotFound.error);

// running server
app.listen(port,()=>{console.log('server is running')})