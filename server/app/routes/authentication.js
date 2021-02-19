const express = require('express');
const router  = express.Router();
const { signin } = require('../controllers/signin');

router.use('/', signin);

module.exports = router;