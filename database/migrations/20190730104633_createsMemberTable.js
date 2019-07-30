exports.up = function(knex) {
  return knex.schema.createTable("member", member => {
    member.increments();

    member.string("name", 128).notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("member");
};
