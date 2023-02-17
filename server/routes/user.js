
const express = require('express')
const {Auth} = require('../utils/middleware/auth') 
const {Admin} = require('../utils/middleware/admin')
const userController = require('../controllers/user')

const router = express.Router()


router.get('/',Auth,userController.getUser) // Auth

router.post('/',userController.createUser)

router.put('/',Auth,userController.editUser) //Auth

router.delete('/',Auth,userController.deleteUser) //Auth


// ADMIN

router.get('/getAlltUsers',Auth,Admin,userController.getUsers)

router.put('/:id',Auth,Admin,userController.editUsers)


module.exports = router