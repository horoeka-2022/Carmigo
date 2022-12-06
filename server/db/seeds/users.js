exports.seed = (knex) => {
  return knex('users')
    .del()
    .then(() =>
      knex('users').insert([
        {
          auth0_id: 'auth0|123',
          first_name: 'boongboong',
          car_description: 'My Crappy car',
        },
        {
          auth0_id: 'auth0|456',
          first_name: 'Noisyy',
          car_description: 'My noisy car',
        },
      ])
    )
}
