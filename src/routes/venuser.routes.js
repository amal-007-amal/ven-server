const express = require('express');
const router  = express.Router()

const userController = require('../controller/venuser.controller');

//retrive all the users 
router.get('/users',userController.findAll)

//create new user
router.post('/createUser',userController.create)

//update the user
router.put('/updateUser',userController.update)

module.exports = router