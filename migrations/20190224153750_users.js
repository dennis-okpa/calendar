
exports.up = function(knex, Promise) {
    return knex.schema.createTable('users', (table) => {
        table.increments();
        table.text('forename').notNullable();
        table.text('surname').notNullable();
        table.text('email').notNullable();
        table.text('username').notNullable();
        table.text('password').notNullable();
        table.dateTime('date_created').defaultTo(knex.fn.now());
        table.dateTime('date_updated').defaultTo(knex.fn.now());
        table.integer('role_fk').unsigned().notNullable();
        table.foreign('role_fk').references('id').inTable('roles');
        table.unique('email');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('users');
};
