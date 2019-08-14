const db = require("../database/dbConfig");

module.exports = {
  add,
  find,
  findById,
  update,
  remove
};

function find() {
  return db("users").select("id", "username", "email");
}

function findById(id) {
  return db("users")
    .select("*")
    .where({ id })
    .first();
}

async function add(user) {
  const [id] = await db("users")
    .insert(user)
    .returning("id");
  console.log(id);
  return findById(id);
}

function update(id, changes) {
  return db("users")
    .where({ id })
    .update(changes)
    .then(() => {
      return db("users")
        .where({ id })
        .first();
    });
}

function remove(id) {
  return db("users")
    .where({ id })
    .del();
}
