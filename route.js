// import express module 
const express = require('express');
const router = express.Router();

// import controller 
const {index : indexController} = require('./controllers/index');
const {game: gameController} = require('./controllers/game');
const {userStatic : userStatiController} = require('./controllers/user');

router.get('/',indexController);
router.get('/game',gameController);
router.get('/users',userStatiController);

module.exports = router