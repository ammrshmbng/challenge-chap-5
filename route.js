// import express module 
const express = require('express');
const router = express.Router();

// import controller 
const indexController = require('./controllers/index');
const gameController = require('./controllers/game');
const {userStatic} = require('./controllers/user');

router.get('/',indexController.index);
router.get('/game',gameController.game);
router.get('/users',userStatic);

module.exports = router