const knex = require('../knex');

const select = ["events.id", "summary", "description", "date", "repeat.id as type"];

const all = () => knex('events')
  .join('event_repeat', 'events.id', 'event_fk')
  .join('repeat', 'repeat_fk', 'repeat.id')
  .select(select)
  .orderBy('events.id');

const getEventData = ({summary, description, date}) => ({
  summary, description, date
});

const getNoRepeat = (firstDay, lastDay) => all().whereRaw('date BETWEEN ? AND ?', [firstDay, lastDay]);

module.exports = {
  getAll(){
    return all();
  },
  getOne(id){
    return all().where('events.id', id).first();
  },
  getAllMonth(month, year){
    return all().whereRaw('EXTRACT(month FROM "date") = ? AND EXTRACT(year FROM "date") = ?', [month, year]);
  },
  getNoRepeats(firstDay, lastDay){
    return all().whereRaw('date BETWEEN ? AND ?', [firstDay, lastDay]).andWhere('repeat.id', 0);
  },
  getRepeats(lastDay){
    return all().whereRaw('date <= ?', [lastDay]).andWhereNot('repeat.id', 0);
  },
  createBatch(events){
    events.forEach(event => {
      this.create(event);
    });
  },
  create(event){
    const eventData = getEventData(event);
    const { type } = event;
    if(event.id !== undefined) eventData.id = event.id;
    return knex("events")
      .insert(eventData, 'id')
      .then(function (response) {
        const id = response[0];
        return knex('event_repeat')
          .insert({event_fk: id, repeat_fk: type}, 'event_fk')
          .then(function(){
          return all()
            .where('events.id', id)
            .first();
        });
      });
  },
  update(id, event){
    const eventData = getEventData(event);
    const { type } = event;
    return knex("events")
      .where('id', id)
      .update(eventData)
      .then(function () {
        return knex('event_repeat')
          .where('event_fk', id)
          .update({repeat_fk: type})
          .then(function(){
          return all()
            .where('events.id', id)
            .first();
        });
      });
  },
  delete(id){
    return knex("event_repeat")
      .where('event_fk', id)
      .del()
      .then(function () {
        return knex('events')
          .where('events.id', id)
          .del()
      });
  }
};