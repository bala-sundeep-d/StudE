const Comment = require('../models/commentModel');

const fetchCommentById = (req, res) => {
    const commentId = req.query && req.params.commentId;
    if (!commentId) return res.send("enter a valid commentId");
    Comment.findOne({ _id: commentId }, (err, data) => {
        if (err) return res.send(err);
        return res.send(data);
    });
}

const fetchCommentsByDiscussionId = (req, res) => {
    const discussionId = req.query && req.query.discussionId;
    if (!discussionId) return res.send("enter a valid discussionId");
    Comment.find({ discussionId }, (err, data) => {
        if (err) return res.send(err);
        return res.send(data);
    });
}

const createComment = (req, res) => {
    const user = req.context.get('user');
    const currentUserId = user && user._id;
    const discussionId = req.body && req.body.discussionId;
    const message = req.body && req.body.message;
    if (!discussionId) return res.send("enter a valid discussionId");
    if (!message) return res.send("enter a valid message");
    Comment.create({ discussionId, ownerId: currentUserId, message }, (err, data) => {
        if (err) return res.send(err);
        return res.send("inserted successfully");
    });
}

const updateComment = (req, res) => {
    const user = req.context.get('user');
    const currentUserId = user && user._id;
    const commentId = req.body && req.body.commentId;
    const message = req.body && req.body.message;
    if (!commentId) return res.send("enter a valid commentId");
    Comment.findOne({ _id: commentId }, (err, comment) => {
        if (err) return res.send("unable to fetch and update comment");
        if (!comment || !comment.ownerId || comment.ownerId !== currentUserId) {
            return res.send("User cannot update comment");
        }
        if (message) comment.message = message;
        comment.save((err1, data) => {
            if (err1) return res.send(err1);
            return res.send("updated successfully");
        });
    });
}

module.exports = {
    fetchCommentById,
    fetchCommentsByDiscussionId,
    createComment,
    updateComment
};