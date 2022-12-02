exports.seed = (knex) => {
  return knex('users')
    .del()
    .then(() =>
      knex('users').insert([
        {
          auth0_id: 'auth0|123',
          car_name: 'boongboong',
          model: 'Civic',
          make: 'Honda',
          description: 'My Crappy car',
        },
        {
          auth0_id: 'auth0|456',
          car_name: 'Noisyy',
          model: 'Ignis',
          make: 'Suzuki',
          description: 'My noisy car',
        },
      ])
    )
}
