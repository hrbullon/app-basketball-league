const express = require('express');

const app = express();

app.use( require('./game') );

module.exports = app;