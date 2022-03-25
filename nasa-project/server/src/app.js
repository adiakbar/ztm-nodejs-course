const express = require('express');
const cors = require('cors');

const planetsRouter = require('./router/planets/planets.router');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/planets', planetsRouter);

module.exports = app;