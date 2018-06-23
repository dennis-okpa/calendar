
exports.up = function(knex, Promise) {
  return knex.schema.createTable('repeat', (table) => {
    table.increments();
    table.text('type');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('repeat');
};
