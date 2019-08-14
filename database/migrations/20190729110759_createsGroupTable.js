exports.up = function(knex) {
  return knex.schema.createTable("group", group => {
    group.increments();

    group
      .string("name", 128)
      .notNullable()
      .unique();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("group");
};
