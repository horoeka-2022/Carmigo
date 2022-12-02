exports.seed = (knex) => {
  return knex('car_photos')
    .del()
    .then(() => {
      return knex('car_photos').insert([
        { id: 1, photo_url: '/images/1', added_by_user: 1 },
        { id: 2, photo_url: '/images/2', added_by_user: 2 },
        { id: 3, photo_url: '/images/3', added_by_user: 1 },
      ])
    })
}
