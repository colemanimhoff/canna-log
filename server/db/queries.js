const knex = require('./knex')

module.exports = {
    getAll() {
        return knex('cannabaceae')
    },
    getOne(id) {
        return knex('cannabaceae').where('id', id).first()
    },
    create(cannabis) {
        return knex('cannabaceae').insert(cannabis, '*')
    }
}