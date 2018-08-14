const express = require('express')
const router = express.Router()

const controller = require('./controller')
const authController = require('../auth/controller')

router.post('/seed', controller.seed)
router.post('/register', controller.register)
router.post('/login', controller.login)
router.get('/logout', controller.logout)

router.get('/checktoken', authController.checkToken, authController.get)

router.get('/', authController.checkToken, controller.get)
router.get('/:id', controller.getOne)

module.exports = router
