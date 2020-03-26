const knex = require('knex'); //importando o knex
const configuration = require('../../knexfile');

const conection = knex(configuration.development);

module.exports = conection; //exportando a conexão com o bd