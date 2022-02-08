const express = require('express');
const tabelaDePreco = express.Router();
const resolver = require('../libs/resolver');
const validators = require('../validators/financiamento');
const { calcularFinanciamento } = require('../controllers/financiamento');

tabelaDePreco.post('/calcular', validators.calcular, resolver(calcularFinanciamento));

module.exports = tabelaDePreco;