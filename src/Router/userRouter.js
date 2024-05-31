const express = require('express')
const router = express.Router()

const userController = require('../Controllers/userController')
const userLogged = require('../Middlewares/userLogged')

router.get('/',userLogged, userController.getAllUsers)
router.get('/:id', userController.getUser)
router.post('/', userController.createUser)
router.put('/:id', userController.updateUser)
router.delete('/:id', userController.deleteUser)

module.exports = router