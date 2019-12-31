'use strict'

const express = require('express');
const router = express.Router();
const controller = require('../controllers/customer-controller');
const authservice = require('../services/auth-service');

router.post('/', controller.post);
router.post('/authenticate', controller.authenticate);
router.post('/refresh-token', authservice.authorize, controller.refreshToken);

module.exports = router;