exports.up = (knex) => {
  return knex.schema.createTable('users', (table) => {
    table.string('auth0_id').primary()
    table.string('first_name')
    table.string('car_description')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('users')
}
