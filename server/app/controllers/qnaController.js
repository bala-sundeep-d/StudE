/* Author: Prashant Sanjay Sarvi */
const QnA = require('../models/qnaModel');

const fetchQnA = (req, res) => {
    const chapterId = req.query && req.query.chapterId;
    if (!chapterId) return res.send("enter a valid chapterId");
    QnA.find({ chapterId }, (err, data) => {
        if (err) return res.send(err);
        return res.send(data);
    });
}

const addQnA = (req, res) => {
    const user = req.context.get('user');
    if (!user || user.role !== 'teacher') return res.send("user cannot perform this operation");
    const currentUserId = user && user._id;
    const chapterId = req.body && req.body.chapterId;
    const question = req.body && req.body.question;
    const answer = req.body && req.body.answer;
    if (!chapterId) return res.send("enter a valid chapterId");
    if (!question) return res.send("enter a valid question");
    if (!answer) return res.send("enter a valid answer");
    QnA.create({ chapterId, question, answer, ownerId: currentUserId }, (err, data) => {
        if (err) return res.send(err);
        return res.send("inserted successfully");
    });
}

const updateQnA = (req, res) => {
    const user = req.context.get('user');
    if (!user || user.role !== 'teacher') return res.send("user cannot perform this operation");
    const currentUserId = user && user._id;
    const qnaId = req.body && req.body.qnaId;
    const question = req.body && req.body.question;
    const answer = req.body && req.body.answer;
    if (!qnaId) return res.send("enter a valid qnaId");
    QnA.findOne({ _id: qnaId }, (err, content) => {
        if (err) return res.send("unable to fetch and update content");
        if (!content || !content.ownerId || content.ownerId !== currentUserId) {
            return res.send("User cannot update content");
        }
        if (question) content.question = question;
        if (answer) content.answer = answer;
        content.save((err1, data) => {
            if (err1) return res.send(err1);
            return res.send("updated successfully");
        });
    });
}

module.exports = {
	fetchQnA,
    addQnA,
    updateQnA
};