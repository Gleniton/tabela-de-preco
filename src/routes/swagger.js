const swaggerRouter = require('express').Router();
const { swaggerUiServe, swaggerDocumentSetup } = require('../libs/swagger.js');

swaggerRouter.use(swaggerUiServe, swaggerDocumentSetup);

module.exports = swaggerRouter;
