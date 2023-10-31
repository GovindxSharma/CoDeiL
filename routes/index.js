const express=require('express')

const router= express.Router();
const ControllerHome=require('../controllers/home_controller')
console.log('router is loaded')
router.get('/',ControllerHome.home)
router.use('/users',require('./users'))
router.use('/users',require('./post'))

module.exports=router;