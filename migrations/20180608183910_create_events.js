
exports.up = function(knex, Promise) {
  return knex.schema.createTable('events', (table) => {
    table.increments();
    table.text('summary');
    table.text('description');
    table.dateTime('date');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('events');
};