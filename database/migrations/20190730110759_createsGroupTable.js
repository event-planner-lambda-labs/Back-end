exports.up = function(knex) {
  return knex.schema.createTable("group", group => {
    group.increments();

    group
      .string("name", 128)
      .notNullable()
      .unique();

      group
      .integer("member_id")
      .unsigned()
      .references("id")
      .inTable("member")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
  });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("group");
};
