const round = require('../libs/round');

exports.tabelaSAC = function (valor, meses, entrada, juros) {
    const parcelas = [];

    valor = valor - entrada;

    const amortizacao = round(valor / meses);

    juros = juros / 100;

    for (let nParcela = 1; nParcela <= meses; nParcela++) {
        let jurosSobreSaldoDevedor =
            juros * (valor - (nParcela - 1) * amortizacao);
        let parcela = round(amortizacao + jurosSobreSaldoDevedor);
        parcelas.push(parcela);
    }
    return parcelas;
};

exports.tabelaPrice = function (valor, meses, entrada, juros) {
    const parcelas = [];

    valor = valor - entrada;
    juros = juros / 100;

    parcela =
        valor *
        ((Math.pow(1 + juros, meses) * juros) /
            (Math.pow(1 + juros, meses) - 1));
    for (let nParcela = 1; nParcela <= meses; nParcela++) {
        parcelas.push(round(parcela));
    }

    return parcelas;
};
