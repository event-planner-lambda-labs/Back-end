const db = require("../database/dbConfig");
module.exports = {
  getGroupMembers,
  add,
  find,
  findById,
  update,
  remove,
  convertBoolean
};

function intToBoolean(int) {
  return int === 1 ? true : false;
}

function convertBoolean(events) {
  const result = {
    ...events,
    public: intToBoolean(events.public)
  };
  return result;
}

function find() {
  return db("events").select("*");
}

function getGroupMembers(id) {
  return db("events")
    .join("member", "events.member_id", "member.id")
    .where("events.id", id)
    .first();
}

function findById(id) {
  return db("events")
    .select("id", "*")
    .where({ id })
    .first();
}

async function add(events) {
  const [id] = await db("events").insert(events);
  return findById(id);
}

function update(id, changes) {
  return db("events")
    .where({ id })
    .update(changes)
    .then(() => {
      return db("events")
        .where({ id })
        .first();
    });
}

function remove(id) {
  return db("events")
    .where({ id })
    .del();
}
