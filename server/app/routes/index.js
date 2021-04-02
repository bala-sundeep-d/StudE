const express = require('express');
const router = express.Router();
const userRouter = require('./userRouter');
const qnaRouter = require('./qnaRouter');
const teacherCommentsRouter = require('./teacherCommentsRouter');
const commentsRouter = require('./commentRouter');
const discussionsRouter = require('./discussionRouter');
const notesRouter = require('./noteRouter');
const subjectsRouter = require('./subjectRouter');
const chapterRouter = require('./chapterRouter');
const dictionaryRouter = require('./dictionaryRouter');

router.use('/users', userRouter);
router.use('/qna', qnaRouter);
router.use('/teacherComments', teacherCommentsRouter);
router.use('/comments', commentsRouter);
router.use('/discussions', discussionsRouter);
router.use('/notes', notesRouter);
router.use('/subjects', subjectsRouter);
router.use('/chapters', chapterRouter);
router.use('/dictionary', dictionaryRouter);

module.exports = router;