
exports.up = function(knex, Promise) {
    return knex.schema.createTable('group_of_rights', (table) => {
        table.increments();
        table.integer('role_fk').unsigned().notNullable();
        table.integer('right_fk').unsigned().notNullable();
        table.foreign('role_fk').references('id').inTable('roles');
        table.foreign('right_fk').references('id').inTable('rights');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('group_of_rights');
};
