const express = require('express');
const router = express.Router();
const { userList, importUsers, getUserById } = require('../controllers/userController');

router.get('/', userList);

router.post('/', importUsers);

router.get('/getUserById', getUserById);

module.exports = router;