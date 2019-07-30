exports.up = function(knex) {
  return knex.schema.createTable("host", host => {
    host.increments();

    host.string("name", 128).notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("host");
};
