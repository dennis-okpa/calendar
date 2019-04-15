const init_events = require('../db/events/init_seeds');
exports.seed = function(knex, Promise) {
  return knex('event_repeat').del().then(function(){
    return knex('events').del().then(function(){
      return knex('events').insert(init_events);
    });
  });
};