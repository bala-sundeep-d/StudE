/*
Author : Nikunj Goenka
*/
const express = require('express');
const router = express.Router();
const {
    fetchRecordsByTeacherId,
    fetchRecordsByStudentId,
    createTeacherComment,
    updateTeacherComment
} = require('../controllers/teacherCommentsController');

router.post('/addComment', createTeacherComment);

router.get('/getByTeacherId', fetchRecordsByTeacherId);

router.get('/getByStudentId', fetchRecordsByStudentId);

router.patch('/', updateTeacherComment);

module.exports = router;