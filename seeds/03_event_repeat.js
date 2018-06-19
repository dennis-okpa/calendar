const init_event_repeat = require('../db/event_repeat/init_seeds');
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('event_repeat').del()
    .then(function () {
      return knex('event_repeat').insert(init_event_repeat);
    });
};
