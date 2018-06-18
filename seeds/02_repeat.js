const init_repeat = require('../db/repeat/init_seeds');
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('repeat').del()
    .then(function () {
      // Inserts seed entries
      return knex('repeat').insert(init_repeat);
    });
};