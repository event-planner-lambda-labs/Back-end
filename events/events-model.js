const db = require("../database/dbConfig")

module.exports = {
    getGroupMembers,
    add,
    find,
    findById,
    update,
    remove,
    
}

function find() {
  return db("events").select("id", "name")
}

function getGroupMembers(id) {
    return db("events")
    .join("member", "events.member_id", "member.id")
    .where("events.id",id)
    .first()
}

function findById(id) {
    return db("events")
    .select("id", "name")
    .where({id})
    .first()
}

function add(events) {
    const [id] = await db("events").insert(events)
    return findById(id);
}

function update(id, changes) {
    return db("events")
    .where({id})
    .update(changes)
    .then(()=>{
        return db("events")
        .where({id})
        .first()
    })
}

function remove(id) {
    return db("events")
    .where({id})
    .del()
}