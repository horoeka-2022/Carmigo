import request from 'superagent'

export function createUser(user, token) {
  return request
    .post('/api/v1/users/create')
    .set('authorization', `Bearer ${token}`)
    .send(user)
}

export function updateUser(user, token) {
  return request
    .post('/api/v1/users/update')
    .set('authorization', `Bearer ${token}`)
    .send(user)
}

export function getUser(token) {
  return request
    .get('/api/v1/users')
    .set('authorization', `Bearer ${token}`)
    .then((res) => res.body)
}
