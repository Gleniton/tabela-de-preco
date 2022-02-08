const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../../docs/swagger.json');

exports.swaggerUiServe = swaggerUi.serve;
exports.swaggerDocumentSetup = swaggerUi.setup(swaggerDocument);
