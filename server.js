const express = require('express');
const errorMiddleware = require('./src/middlewares/error');

const routes = require('./src/routes/index');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(routes);
app.use(errorMiddleware);

module.exports = app;
