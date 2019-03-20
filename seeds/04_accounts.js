const init_accounts = require('../db/accounts/init_seeds');
exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('accounts').del().then(function () {
        // Inserts seed entries
        return knex('accounts').insert(init_accounts);
    });
};
