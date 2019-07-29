/*
event ID-done 
event title-done 
event host- in progress 
event members-in progress
event location-done
event time-done
event date-done
event details-done
event public-done
*/
exports.up = function (knex) {
    return knex.schema.createTable("events", events => {
        events.increments();

        events
        .string("title", 128)
        .notNullable()
        .unique();

        events
        .string("location", 128)
        .notNullable();

        events 
        .time("event_time")
        .notNullable();

        events
        .date("event_date")
        .notNullable();

        events
        .string("details", 256)
        .notNullable();

        events
        .boolean("public")
        .notNullable()
        .defaultTo(true);

        events.timestamps(true, true)

    })
};

exports.down = function (knex) {
return knex.schema.dropTableIfExists("events")
};
