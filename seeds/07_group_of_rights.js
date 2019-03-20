const init_group_of_rights = require('../db/groupOfRights/init_seeds');
exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('group_of_rights').del().then(function () {
        // Inserts seed entries
        return knex('group_of_rights').insert(init_group_of_rights);
    });
};
