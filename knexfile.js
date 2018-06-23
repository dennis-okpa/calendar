// Update with your config settings.

module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://postgres:postgres@localhost:5432/calendar'
  },
  test: {
    client: 'pg',
    connection: 'postgres://postgres:postgres@localhost:5432/test-calendar'
  },
};
