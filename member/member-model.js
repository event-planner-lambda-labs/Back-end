const db = require("../database/dbConfig")

module.exports = {
    add,
    find,
    findById,
    update,
    remove,
    
}

function find() {
  return db("member").select("id", "name")
}

function findById(id) {
    return db("member")
    .select("id", "name")
    .where({id})
    .first()
}

function add(member) {
    const [id] = await db("member").insert(member)
    return findById(id);
}

function update(id, changes) {
    return db("member")
    .where({id})
    .update(changes)
    .then(()=>{
        return db("member")
        .where({id})
        .first()
    })
}

function remove(id) {
    return db("member")
    .where({id})
    .del()
}
