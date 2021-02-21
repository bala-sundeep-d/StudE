const express = require('express');
const router  = express.Router();
const { userList } = require('./userContorller');

router.get('/list', userList);

module.exports = router;