const knex = require('../knex');

module.exports = {
  getAll(){
    return knex('events');
  },
  getOne(id){
    return knex('events').where('id', id).first();
  },
  getAllMonth(month, year){
    return knex('events').whereRaw('EXTRACT(month FROM "date") = ? AND EXTRACT(year FROM "date") = ?', [month, year]);
  },
  create(event){
    return knex('events').insert(event, '*');
  },
  update(id, event){
    return knex('events').where('id', id).update(event, '*');
  },
  delete(id){
    return knex('events').where('id', id).del();
  }
};