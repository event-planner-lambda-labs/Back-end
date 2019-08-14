const db = require("../database/dbConfig");

module.exports = {
  getGroupMembers,
  add,
  find,
  findById,
  update,
  remove
};

function find() {
  return db("group").select("id", "name");
}

function getGroupMembers(id) {
  return db("group")
    .join("members", "group_id", "user_id")
    .select("user_id as user", "group_id as group", "name")
    .where({ group_id: id })
    .first();
}

function findById(id) {
  return db("group")
    .select("id", "name")
    .where({ id })
    .first();
}

async function add(group) {
  const [id] = await db("group").insert(group);
  return findById(id);
}

function update(id, changes) {
  return db("group")
    .where({ id })
    .update(changes)
    .then(() => {
      return db("group")
        .where({ id })
        .first();
    });
}

function remove(id) {
  return db("group")
    .where({ id })
    .del();
}
