exports.up = function(knex) {
  return knex.schema.createTable("users", user => {
    user.increments();

    user
      .string("username", 128)
      .notNullable()
      .unique();

    user
      .string("email", 128)
      .notNullable()
      .unique();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("users");
};
