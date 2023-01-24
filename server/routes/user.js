
const express = require('express')
const {Auth} = require('../utils/middleware/auth') 
const userController = require('../controllers/user')

const router = express.Router()


router.get('/',Auth,userController.getUser) // Auth

router.post('/',userController.createUser)

router.put('/',Auth,userController.editUser) //Auth

router.delete('/',Auth,userController.deleteUser) //Auth


// all user with specific argument

module.exports = router