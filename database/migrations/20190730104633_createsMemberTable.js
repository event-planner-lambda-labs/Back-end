exports.up = function(knex) {
<<<<<<< HEAD
  return knex.schema.createTable("member", member => {
    member.increments();

    member.string("name", 128).notNullable();
=======
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
>>>>>>> 29eb3028cd9eb7ea40cacbcb4c1c8ddb7c254bea
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("members");
};
