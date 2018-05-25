const cannabaceae = require('../cannabaceae')

exports.seed = (knex, Promise) => {
  return knex('cannabaceae').del()
    .then(() => {
      return knex('cannabaceae').insert(cannabaceae)
    })
}
