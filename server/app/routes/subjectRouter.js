/**
 * @author Nikunj Goenka
 * @email nikunjgoenka@dal.ca
 * @create date 2021-03-31 21:09:47
 * @modify date 2021-03-31 21:54:53
 * @desc Routes for Subjects will be added here
 */
const express = require('express');
const router = express.Router();
const {
    fetchSubjectsOfTeacher,
    fetchSubjectsOfStudent,
    addSubject,
    updateSubject
} = require('../controllers/subjectController');

router.post('/addSubject', addSubject);

router.get('/getByTeacherId', fetchSubjectsOfTeacher);

router.get('/getByStudentId', fetchSubjectsOfStudent);

router.patch('/', updateSubject);

module.exports = router;