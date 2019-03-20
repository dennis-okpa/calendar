
exports.up = function(knex, Promise) {
    return knex.schema.createTable('roles', (table) => {
        table.increments();
        table.text('name').notNullable();
        table.boolean('system');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('roles');
};
