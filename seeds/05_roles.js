const init_roles = require('../db/roles/init_seeds');
exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('users').del().then(function () {
        return knex('group_of_rights').del().then(function () {
            return knex('roles').del().then(function () {
                // Inserts seed entries
                return knex('roles').insert(init_roles);
            })
        });
    });
};
