const express = require('express');
const router = express.Router();
const userRouter = require('./userRouter');
const qnaRouter = require('./qnaRouter');
const teacherCommentsRouter = require('./teacherCommentsRouter');

router.use('/users', userRouter);
router.use('/qna', qnaRouter);
router.use('/teacherComments', teacherCommentsRouter);


module.exports = router;