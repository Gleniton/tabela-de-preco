const { body, validationResult } = require('express-validator');
const log = require('debug')('app:validators:financiamento');

exports.calcular = [
    body('tabela')
        .isString()
        .notEmpty()
        .isIn(['PRICE', 'SAC'])
        .withMessage('Valores permitidos para tabela são PRICE e SAC'),
    body('valor')
        .isDecimal({ decimal_digits: '0,2', locale: 'en-US' })
        .toFloat()
        .withMessage('Valor inválido'),
    body('meses')
        .isInt({ min: 1, max: 360 })
        .toInt()
        .withMessage('Meses inválidos'),
    body('entrada')
        .isDecimal({ decimal_digits: '0,2', locale: 'en-US' })
        .toFloat()
        .withMessage('Entrada inválido'),
    body('juros')
        .isDecimal({ decimal_digits: '0,4', locale: 'en-US' })
        .toFloat()
        .withMessage('Juros inválido'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            log(errors);
            return res
                .status(400)
                .json({ errors: errors.array().map((err) => `${err.msg}`) });
        }

        next();
    },
];
