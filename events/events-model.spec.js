const db = require("../database/dbConfig");
const Events = require("./events-model");

describe("events model", () => {
  beforeEach(() => {
    return db("events").truncate();
  });
});

describe("add", () => {
  it("should insert event info into the db", async () => {
    await Events.add({
      title: "test title",
      location: "address test",
      event_time: "08:30:00",
      event_date: "2019-08-16",
      short_details: "sh dt",
      long_details: "long details",
      host_id: 1
    });

    const events = await db("events");
    expect(events).toHaveLength(1);
  });
});

describe("find", () => {
  it("should return list of events", async () => {
    await Events.find();

    const events = await db("events");
    expect(events).toHaveLength(1);
  });
});
