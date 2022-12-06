const express = require('express')
const { checkJwt, updateUser, getUser } = require('../auth0')
const { createUserDb, updateUserDb } = require('../db/users')

const router = express.Router()

//GET /api/v1/users
router.get('/', checkJwt, (req, res) => {
  const auth0_id = req.user?.sub

  if (!auth0_id) {
    res.send(null)
  } else {
    getUser(auth0_id)
      .then((user) => {
        res.json(user ? user : null)
      })
      .catch((err) => res.status(500).send(err.message))
  }
})

//POST /api/v1/users/update
router.post('/update', checkJwt, async (req, res) => {
  const auth0_id = req.user?.sub
  const { carDescription } = req.body
  const userDetails = {
    addedPhotos: true,
  }
  updateUser(auth0_id, userDetails)
    .then((metadata) => {
      console.log(metadata)
    })
    .catch((err) => res.status(500).send(err.message))
  try {
    await updateUserDb(auth0_id, carDescription)
    res.sendStatus(200)
  } catch (err) {
    res.status(500).send(err.message)
  }
})

//POST /api/v1/users/create
router.post('/create', checkJwt, async (req, res) => {
  const auth0_id = req.user?.sub
  const { firstName } = req.body
  const userDetails = {
    firstName,
  }
  updateUser(auth0_id, userDetails)
    .then((metadata) => {
      console.log(metadata)
    })
    .catch((err) => res.status(500).send(err.message))

  await createUser(auth0_id, firstName)
})

module.exports = router
