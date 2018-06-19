const knex = require('../knex');

module.exports = {
  getAll(){
    return knex('repeat');
  },
  getOne(id){
    return knex('repeat').where('id', id).first();
  }
};