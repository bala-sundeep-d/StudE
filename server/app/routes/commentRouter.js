const express = require('express');
const router  = express.Router();
const {
    fetchCommentById,
    fetchCommentsByDiscussionId,
    createComment,
    updateComment
} = require('../controllers/commentController');

router.post('/', createComment);

router.get('/', fetchCommentsByDiscussionId);

router.get('/:commentId', fetchCommentById);

router.patch('/', updateComment);

module.exports = router;