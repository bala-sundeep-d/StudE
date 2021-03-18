const express = require('express');
const router  = express.Router();
const { userList, importUsers } = require('../controllers/userController');

router.get('/', userList);

router.post('/', importUsers);

module.exports = router;