
exports.up = (knex) => {
  return knex.schema.createTable('user_car', (table) => {
    table.string('auth0_id').primary()
    table.string('car_name')
    table.string('model')
    table.string('make')
    table.string('description')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('user_car')
}
  