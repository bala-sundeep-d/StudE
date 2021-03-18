const express = require('express');
const router  = express.Router();
const userRouter = require('./userRouter');
const qnaRouter = require('./qnaRouter');

router.use('/users', userRouter);
router.use('/qna', qnaRouter);


module.exports = router;