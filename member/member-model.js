const db = require("../database/dbConfig");

module.exports = {
  add,
  find,
  findById,
  update,
  remove
};

function find() {
  return db("members")
    .join("group", "user_id", "group_id")
    .select("user_id", "group_id")
    .where({ group_id: id });
}

function findById(user_id) {
  return db("members")
    .select("user_id", "group_id")
    .where({ user_id });
}

async function add(member) {
  const [user_id] = await db("members").insert(member);
  return findById(user_id);
}

function update(id, changes) {
  return db("members")
    .where({ id })
    .update(changes)
    .then(() => {
      return db("members")
        .where({ id })
        .first();
    });
}

function remove(id) {
  return db("members")
    .where({ id })
    .del();
}
