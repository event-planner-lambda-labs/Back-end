exports.up = function(knex) {
  return knex.schema.createTable("member", member => {
    member.increments();

    member.string("name", 128).notNullable();

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
  return knex.schema.dropTableIfExists("member");
};
