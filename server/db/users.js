const connection = require('./connection')

module.exports = {
  userExists,
  getUser,
  createUserDb,
  updateUserDb,
}

function userExists(username, db = connection) {
  return db('users')
    .where('username', username)
    .then((usersFound) => {
      return usersFound.length > 0
    })
}

function getUser(id, db = connection) {
  return db('users').where('auth0_id', id).first()
}

function createUserDb(auth0_id, firstName, db = connection) {
  return db('users').insert({ auth0_id: auth0_id, first_name: firstName })
}

function updateUserDb(auth0_id, carDescription, db = connection) {
  return db('users')
    .where('auth0_id', auth0_id)
    .update('car_description', carDescription)
}
