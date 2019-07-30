const db = require("../database/dbConfig")


module.exports = {
    add,
    find,
    findById,
    update,
    remove,
    
}

function find() {
  return db("host").select("id", "name")
}

function findById(id) {
    return db("host")
    .select("id", "name")
    .where({id})
    .first()
}

function add(host) {
    const [id] = await db("host").insert(host)
    return findById(id);
}

function update(id, changes) {
    return db("host")
    .where({id})
    .update(changes)
    .then(()=>{
        return db("host")
        .where({id})
        .first()
    })
}

function remove(id) {
    return db("host")
    .where({id})
    .del()
}

