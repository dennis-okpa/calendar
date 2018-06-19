const init_repeat = require('../db/repeat/init_seeds');
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('event_repeat').del().then(function(){
    return knex('repeat').del().then(function(){
      return knex('repeat').insert(init_repeat);
    });
  });
};