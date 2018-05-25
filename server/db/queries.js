const knex = require('./knex')

module.exports = {
    getAll() {
        return knex('cannabaceae')
    },
    getOne(id) {
        return knex('cannabaceae').where('id', id).first()
    }
}