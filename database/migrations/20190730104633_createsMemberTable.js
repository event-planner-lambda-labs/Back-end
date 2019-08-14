exports.up = function(knex) {
  return knex.schema.createTable("members", member => {
    member
      .integer("user_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("users")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");

    member
      .integer("group_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("group")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("members");
};
