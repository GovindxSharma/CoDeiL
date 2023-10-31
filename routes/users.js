const express=require('express')

const router= express.Router();
const usersController=require('../controllers/users_controllers')
// console.log('router is loadedsd')
router.get('/profile',usersController.profile)

module.exports=router;