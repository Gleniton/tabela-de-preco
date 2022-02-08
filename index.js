require('dotenv').config();
const log = require('debug')('app');
const { PORT } = process.env;

const app = require('./server.js');

const server = app.listen(PORT || 3000, function () {
    log('Express server listening on port ' + server.address().port);
});

module.exports = server;