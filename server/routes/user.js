
const express = require('express')

const router = express.Router()


router.get('/',userController.getUser)

router.post('/',userController.createUser)

router.put('/',userController.editUser)

router.delete('/',userController.deleteUser)