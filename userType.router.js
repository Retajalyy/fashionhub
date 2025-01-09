const express = require('express');
const auth = require('../utilites/auth');
const router = express.Router();
const userTypeController = require('../controllers/usertype.controller');

router.post('/',auth.authMW,userTypeController.createUserType);
router.get('/',auth.authMW,userTypeController.getUserTypes);

module.exports= router;