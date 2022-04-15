// import express module 
const express = require('express');
const router = express.Router();

// import controller 
const {index : indexController} =           require('./controllers/index');
const {game: gameController} =              require('./controllers/game');
const {userStatic : userStatiController} =  require('./controllers/user');
const userStaticLogin         =             require('./controllers/user');

router.get('/',indexController);
router.get('/game',gameController);
router.get('/users',userStatiController);
router.post('/login',userStaticLogin.login);

module.exports = router