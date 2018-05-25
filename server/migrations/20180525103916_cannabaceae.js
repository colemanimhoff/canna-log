exports.up = function(knex, Promise) {
    return knex.schema.createTable('cannabaceae', (table) => {
        table.increments()
        table.text('name')
        table.text('strain')
        table.text('description')
        table.float('strength')
        table.text('imgUrl')
        table.float('rating')
    })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('cannabaceae')
}