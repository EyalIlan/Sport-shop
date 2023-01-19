
const express = require('express')

const router = express.Router()


router.get('/',userController.getUser) // Auth

router.post('/',userController.createUser)

router.put('/',userController.editUser) //Auth

router.delete('/',userController.deleteUser) //Auth


// all user with specific argument