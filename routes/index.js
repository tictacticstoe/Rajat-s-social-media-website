const express = require('express');
console.log('router loaded');
const router = express.Router();
const homeController= require('../contollers/home_controller');

router.get('/',homeController.home);
router.use('/users',require('./users'));


module.exports = router;