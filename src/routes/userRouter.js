'use strict';

const express = require('express');

const userController = require('../controllers/userController');

/**
 *
 * /api/v1/users
 *
 */

const userRouter = express.Router();

userRouter.route('/').get(userController.getAllUsers);

module.exports = userRouter;