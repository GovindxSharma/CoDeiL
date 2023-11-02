const express=require('express')

const router= express.Router();
const usersController=require('../controllers/users_controllers')
// const postController=require('../controllers/post_controllers')
// console.log('router is loadedsd')
router.get('/profile',usersController.profile)
router.get('/post',usersController.post);
router.get('/sign_in',usersController.signin);
router.get('/sign_up',usersController.signup)
router.post('/create',usersController.create);
router.post('/create-session',usersController.createSession)

module.exports=router;