exports.up = function(knex) {
  return knex.schema.createTable("group", group => {
    group.increments();

    group
      .string("name", 128)
      .notNullable()
      .unique();
<<<<<<< HEAD:database/migrations/20190730110759_createsGroupTable.js

    group
      .integer("member_id")
      .unsigned()
      .references("id")
      .inTable("member")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
=======
>>>>>>> 29eb3028cd9eb7ea40cacbcb4c1c8ddb7c254bea:database/migrations/20190729110759_createsGroupTable.js
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("group");
};
