exports.up = function(knex) {
  return knex.schema.createTable("events", events => {
    events.increments();

    events.string("title", 128).notNullable();

    events.string("location", 128).notNullable();

    events.time("event_time").notNullable();

    events.date("event_date").notNullable();

<<<<<<< HEAD:database/migrations/20190731164320_createsEventTable.js
    events.text("details", longtext).notNullable();
=======
    events.string("short_details", 255).notNullable();

    events.text("long_details").notNullable();
>>>>>>> 29eb3028cd9eb7ea40cacbcb4c1c8ddb7c254bea:database/migrations/20190731164320_createsEventTable.js

    events
      .boolean("public_status")
      .notNullable()
      .defaultTo(true);

    events
      .integer("host_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("users")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");

    events.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("events");
};
