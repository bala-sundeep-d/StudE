const Discussion = require('../models/discussionModel');

const fetchDiscussion = (req, res) => {
    const subjectId = req.query && req.query.subjectId;
    if (!subjectId) return res.send("enter a valid subjectId");
    Discussion.find({ subjectId }, (err, data) => {
        if (err) return res.send(err);
        return res.send(data);
    });
}

const createDiscussion = (req, res) => {
    const user = req.context.get('user');
    const currentUserId = user && user._id;
    const subjectId = req.body && req.body.subjectId;
    const title = req.body && req.body.title;
    const message = req.body && req.body.message;
    if (!subjectId) return res.send("enter a valid subjectId");
    if (!title) return res.send("enter a valid title");
    if (!message) return res.send("enter a valid message");
    Discussion.create({ subjectId, ownerId: currentUserId, title, message }, (err, data) => {
        if (err) return res.send(err);
        return res.send("inserted successfully");
    });
}

const updateDiscussion = (req, res) => {
    const user = req.context.get('user');
    const currentUserId = user && user._id;
    const discussionId = req.body && req.body.discussionId;
    const title = req.body && req.body.title;
    const message = req.body && req.body.message;
    if (!discussionId) return res.send("enter a valid discussionId");
    Discussion.findOne({ _id: discussionId }, (err, discussion) => {
        if (err) return res.send("unable to fetch and update discussion");
        if (!discussion || !discussion.ownerId || discussion.ownerId !== currentUserId) {
            return res.send("User cannot update discussion");
        }
        if (title) discussion.title = title;
        if (message) discussion.message = message;
        discussion.save((err1, data) => {
            if (err1) return res.send(err1);
            return res.send("updated successfully");
        });
    });
}

module.exports = {
    createDiscussion,
    fetchDiscussion,
    updateDiscussion
};