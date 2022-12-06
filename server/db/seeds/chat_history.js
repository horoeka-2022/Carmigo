exports.seed = (knex) => {
  return knex('chat_history')
    .del()
    .then(() =>
      knex('chat_history').insert([
        {
          id: '1',
          me_auth0: 'auth0|123',
          me_name: 'Richard',
          you_auth0: 'auth0|456',
          you_name: 'Peter',
          me_message: 'Would you like to build a snow man?',
        },
        {
          id: '2',
          me_auth0: 'auth0|456',
          me_name: 'Peter',
          you_auth0: 'auth0|123',
          you_name: 'Richard',
          me_message: 'No',
        },
        {
          id: '3',
          me_auth0: 'auth0|123',
          me_name: 'Richard',
          you_auth0: 'auth0|456',
          you_name: 'Peter',
          me_message: 'Okay bye',
        },
      ])
    )
}
