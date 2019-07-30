exports.up = function(knex) {
  return knex.schema.createTable("host", host => {
    host.increments();

    host
      .string("name", 128)
      .notNullable()
     

      host
      .integer("group_id")
      .unsigned()
      .references("id")
      .inTable("group")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");

  });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("host");
};
