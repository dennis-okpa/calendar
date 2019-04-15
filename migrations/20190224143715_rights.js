
exports.up = function(knex, Promise) {
    return knex.schema.createTable('rights', (table) => {
        table.increments();
        table.text('name').notNullable();
        table.boolean('system');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('rights');
};
