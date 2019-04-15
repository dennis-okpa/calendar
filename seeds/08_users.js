const init_users = require('../db/users/init_seeds');
exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('users').del().then(function () {
        // Inserts seed entries
        return knex('users').insert(init_users);
    });
};
