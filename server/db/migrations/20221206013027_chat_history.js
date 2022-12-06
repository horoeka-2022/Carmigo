exports.up = (knex) => {
  return knex.schema.createTable('chat_history', (table) => {
    table.increments('id')
    table.string('me_auth0').references('user_car.auth0_id')
    table.string('me_name')
    table.string('you_auth0').references('user_car.auth0_id')
    table.string('you_name')
    table.string('me_message')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('chat_history')
}
