
exports.up = function(knex, Promise) {
  return knex.schema.createTable('event_repeat', (table) => {
    table.increments();
    table.integer('event_fk').unsigned().notNullable();
    table.integer('repeat_fk').unsigned().notNullable();

    table.foreign('event_fk').references('id').inTable('events');
    table.foreign('repeat_fk').references('id').inTable('repeat');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('event_repeat');
};
