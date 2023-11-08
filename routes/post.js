const express = require('express');
const router = express.Router();


const postsController = require('../controllers/post_controllers');

router.post('/create', postsController.post);


module.exports = router; 