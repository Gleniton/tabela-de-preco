const log = require('debug')('app:middlewares:error');

module.exports = async function (err, req, res, next) {
    log(err);
    let customErr = null;
    res.status(err.status || 500);

    if (err?.type === 'entity.parse.failed') {
        customErr = {
            errors: [
                'JSON mal formado'
            ]
        };
    }

    res.send(customErr || err);
};
