// import express module
const express = require('express');

// initializing usage of configuration file env 
require('dotenv').config();

// initialize express
const app = express();

// import route
const route = require('./route');

// import error local module middleware
const errorPageNotFound = require('./middlewares/error');

// config port
const port  = process.env.PORT;

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
app.listen(port,()=>{console.log(`server is running ${port}`)})