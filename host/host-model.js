const db = require("../database/dbConfig")


module.exports = {
    get,
    add,
    find,
    findBy,
    findById,
    update,
    remove,
    intToBoolean,
    convertBoolean,
}

function get(id) {
    let host = db("host")

    if (id) {
        host.where({id})
    }
}

