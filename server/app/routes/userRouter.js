const express = require('express');
const router = express.Router();
const { userList, importUsers, getStudentByTeacherId } = require('../controllers/userController');

router.get('/', userList);

router.post('/', importUsers);

router.get('/getStudentByTeacherId', getStudentByTeacherId);
module.exports = router;