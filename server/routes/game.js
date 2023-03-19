const express = require('express');

const { getGame, createGame, updateScore } = require('../controllers/GameController');

let app = express(); 

app.get('/game/:id', getGame);
app.post('/game', createGame);
app.put('/game/:id', updateScore);

module.exports = app;