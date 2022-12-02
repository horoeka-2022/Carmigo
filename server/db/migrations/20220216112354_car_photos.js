exports.up = (knex) => {
  return knex.schema.createTable('car_photos', (table) => {
    table.increments('id').primary()
    table.string('added_by_user').references('user_car.auth0_id')
    table.string('photo_url')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('car_photos')
}
