const environment = process.env.NODE_ENV || 'development';
const config = require('../knexfile');
const environmentConfig = config[environment.trim()];
const knex = require('knex');
const connection = knex(environmentConfig);
module.exports = connection;