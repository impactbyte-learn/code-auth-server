const express = require('express')
const router = express.Router()

const DATA_USERS = [
  {
    id: 0,
    email: 'alpha@example.com',
    password: 'alphapassword'
  },
  {
    id: 1,
    email: 'beta@example.com',
    password: 'betapassword'
  },
  {
    id: 2,
    email: 'gamma@example.com',
    password: 'gammapassword'
  }
]

router.get('/', function(req, res, next) {
  res.status(200).send(DATA_USERS)
})

module.exports = router
