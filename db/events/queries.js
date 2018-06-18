const knex = require('../knex');

const all = () => knex('events')
  .leftJoin('event_repeat', 'events.id', 'event_repeat.event_fk')
  .leftJoin('repeat', 'repeat_fk', 'repeat.id').orderBy('events.id');

const select = ["events.id", "summary", "description", "date"];

module.exports = {
  getAll(){
    return all().select(select);
  },
  getOne(id){
    return all().where('events.id', id).first(select);
  },
  getAllMonth(month, year){
    return all().whereRaw('EXTRACT(month FROM "date") = ? AND EXTRACT(year FROM "date") = ?', [month, year]).select(select);
  },
  create(event){
    return all().insert(event, select);
  },
  update(id, event){
    return all().where('events.id', id).update(event, select);
  },
  delete(id){
    return all().where('events.id', id).del();
  }
};