'use strict'

const express = require('express');
const router = express.Router();
const controller = require('../controllers/order-controller');
const authservice = require('../services/auth-service');

router.get('/', authservice.authorize, controller.get);
router.post('/', authservice.authorize, controller.post);

module.exports = router;