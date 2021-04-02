const Chapter = require('../models/chapterModel');

const fetchChapterById = (req, res) => {
    const chapterId = req.query && req.params.chapterId;
    if (!chapterId) return res.send("enter a valid commentId");
    Chapter.findOne({ _id: chapterId }, (err, data) => {
        if (err) return res.send(err);
        return res.send(data);
    });
}

const fetchChaptersBySubjectId = (req, res) => {
    const subjectId = req.query && req.query.subjectId;
    if (!subjectId) return res.send("enter a valid subjectId");
    Chapter.find({ subjectId }, (err, data) => {
        if (err) return res.send(err);
        return res.send(data);
    });
}

const createChapter = (req, res) => {
    const user = req.context.get('user');
    const currentUserId = user && user._id;
    const subjectId = req.body && req.body.subjectId;
    const description = req.body && req.body.description;
    const title = req.body && req.body.title;
    if (!description) return res.send("enter a valid description");
    if (!title) return res.send("enter a valid title");
    if (!subjectId) return res.send("enter a valid subjectId");
    Chapter.create({ subjectId, ownerId: currentUserId, description, title }, (err, data) => {
        if (err) return res.send(err);
        return res.send("inserted successfully");
    });
}

const updateChapter = (req, res) => {
    const user = req.context.get('user');
    const currentUserId = user && user._id;
    const chapterId = req.body && req.body.chapterId;
    const subjectId = req.body && req.body.subjectId;
    const description = req.body && req.body.description;
    const title = req.body && req.body.title;
    if (!chapterId) return res.send("enter a valid chapterId");
    Chapter.findOne({ _id: chapterId }, (err, chapter) => {
        if (err) return res.send("unable to fetch and update chapter");
        if (!chapter || !chapter.ownerId || chapter.ownerId !== currentUserId) {
            return res.send("User cannot update chapter");
        }
        if (subjectId) chapter.subjectId = subjectId;
        if (description) chapter.description = description;
        if (title) chapter.title = title;
        chapter.save((err1, data) => {
            if (err1) return res.send(err1);
            return res.send("updated successfully");
        });
    });
}

module.exports = {
    fetchChapterById,
    fetchChaptersBySubjectId,
    createChapter,
    updateChapter
};