const log = require('debug')('app:controllers:financiamento');
const { tabelaPrice, tabelaSAC } = require('../services/financiamento');

exports.calcularFinanciamento = async function (req, res) {
    const { tabela, valor, meses, entrada, juros } = req.body;
    let parcelasCalculadas = [];

    switch (tabela) {
        case 'PRICE':
            parcelasCalculadas = tabelaPrice(valor, meses, entrada, juros);
            break;
        case 'SAC':
            parcelasCalculadas = tabelaSAC(valor, meses, entrada, juros);
            break;
    }
    return res.send({ parcelas: parcelasCalculadas });
};
