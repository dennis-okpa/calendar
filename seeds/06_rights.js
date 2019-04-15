const init_rights = require('../db/rights/init_seeds');
exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('group_of_rights').del().then(function () {
        return knex('rights').del().then(function () {
            // Inserts seed entries
            return knex('rights').insert(init_rights);
        });
    });
};
