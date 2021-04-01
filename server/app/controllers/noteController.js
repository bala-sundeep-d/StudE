const Note = require('../models/noteModel');

const fetchNote = (req, res) => {
    const subjectId = req.query && req.query.subjectId;
    if (!subjectId) return res.send("enter a valid subjectId");
    Note.find({ subjectId }, (err, data) => {
        if (err) return res.send(err);
        return res.send(data);
    });
}

const createNote = (req, res) => {
    const user = req.context.get('user');
    const currentUserId = user && user._id;
    const subjectId = req.body && req.body.subjectId;
    const title = req.body && req.body.title;
    const message = req.body && req.body.message;
    if (!subjectId) return res.send("enter a valid subjectId");
    if (!title) return res.send("enter a valid title");
    if (!message) return res.send("enter a valid message");
    Note.create({ subjectId, ownerId: currentUserId, title, message }, (err, data) => {
        if (err) return res.send(err);
        return res.send("inserted successfully");
    });
}

const updateNote= (req, res) => {
    const user = req.context.get('user');
    const currentUserId = user && user._id;
    const noteId = req.body && req.body.noteId;
    const title = req.body && req.body.title;
    const message = req.body && req.body.message;
    if (!noteId) return res.send("enter a valid noteId");
    Note.findOne({ _id: noteId }, (err, note) => {
        if (err) return res.send("unable to fetch and update Note");
        if (!note || !note.ownerId || note.ownerId !== currentUserId) {
            return res.send("User cannot update note");
        }
        if (title) note.title = title;
        if (message) note.message = message;
        note.save((err1, data) => {
            if (err1) return res.send(err1);
            return res.send("updated successfully");
        });
    });
}

module.exports = {
    createNote,
    fetchNote,
    updateNote
};