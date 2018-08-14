const express = require('express')
const router = express.Router()

const controller = require('./controller')

router.post('/seed', controller.seed)
router.post('/register', controller.register)
router.post('/login', controller.login)
router.get('/logout', controller.logout)

router.get('/', controller.get)
router.get('/:id', controller.getOne)

module.exports = router
