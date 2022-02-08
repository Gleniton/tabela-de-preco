const express = require('express');
const mainRouter = express.Router();
const financiamentoRouter = require('./financiamento');
const swaggerRouter = require('./swagger');

mainRouter.use('/api-docs', swaggerRouter);
mainRouter.use('/financiamento', financiamentoRouter);

module.exports = mainRouter;
