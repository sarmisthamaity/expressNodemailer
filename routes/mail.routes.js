const express = require('express');
const router = express.Router();
const mailController = require('../controller/mailer.controller');

router.post('/', mailController.mailSender);

module.exports = router;
