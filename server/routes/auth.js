
const express = require('express')
const LoginController = require('../controllers/auth')
const {Auth} = require('../utils/middleware/auth')
const router = express.Router()


router.post('/login',LoginController.Login)

router.post('/logout',Auth,LoginController.LogOut)


module.exports = router