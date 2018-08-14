const express = require('express')
const router = express.Router()

const DATA_TASKS = [
  {
    id: 0,
    text: 'Doing something awesome',
    createdBy: 0
  },
  {
    id: 1,
    text: 'Doing something good',
    createdBy: 1
  },
  {
    id: 2,
    text: 'Doing something cool',
    createdBy: 2
  }
]

router.get('/', function(req, res, next) {
  res.status(200).send(DATA_TASKS)
})

module.exports = router
