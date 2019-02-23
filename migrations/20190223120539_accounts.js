
exports.up = function(knex, Promise) {
    return knex.schema.createTable('accounts', (table) => {
        table.increments();
        table.text('name').notNullable();
        table.text('description');
        table.dateTime('date_created').defaultTo(knex.fn.now());
        table.float('initial_amount').defaultTo(0);
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('accounts');
};
