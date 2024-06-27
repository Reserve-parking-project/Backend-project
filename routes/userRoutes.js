const express = require('express');
const userController = require('./../controllers/userController');

const router = express.Router();

router.route('/register').post(userController.userRegistration);
router.route('/login').post(userController.userAuthorization);

module.exports = router;
