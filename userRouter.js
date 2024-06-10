var express = require('express')
const router = express.Router()

var userController = require('../App/Apis/Controllers/userControllers')

router.post('/register',userController.register)

router.post('/authenticate',userController.authenticate)

module.exports = router