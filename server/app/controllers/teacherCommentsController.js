/*
Author : Nikunj Goenka
*/
const Comments = require('../models/teacherCommentsModel');
const BlueBirdPromise = require('bluebird');
const User = require('../models/userModel');
const _ = require("lodash");

const fetchRecordsByTeacherId = (req, res) => {
    const teacherId = req.query && req.query.teacherId;
    if (!teacherId) return res.send("Teacher ID is invalid");
    Comments.find({ teacherId }, (err, data) => {
        if (err) return res.send(err);
        return res.send(data);
    });
}

const fetchRecordsByStudentId = (req, res) => {
    const studentId = req.query && req.query.studentId;
    if (!studentId) return res.send("Student ID is invalid");
    Comments.find({ studentId }, (err, d) => {
        if (err) return res.send(err);
        const data = JSON.parse(JSON.stringify(d));
        BlueBirdPromise.mapSeries(data, (record, index) => new BlueBirdPromise((resolve, reject) => {
            const teacherId = record.teacherId;
            if (teacherId) {
                User.findOne({ "_id": teacherId }, (err, teacherRecord) => {
                    if (err) return reject(err);
                    data[index].teacher = teacherRecord;
                    return resolve();
                });
            } else {
                return resolve();
            }
        }))
            .then(() => res.send(data))
            .catch(err => res.send(err));
    });
}

const createTeacherComment = (req, res) => {
    const user = req.context.get('user');
    if (!user || user.role !== 'teacher') return res.send("user cannot perform this operation");
    const currentUserId = user && user._id;
    const studentId = req.body && req.body.studentId;
    const comment = req.body && req.body.comment;
    const type = req.body && req.body.type;
    if (!studentId) return res.send("Student ID is invalid");
    if (!comment) return res.send("Invalid Comment");
    if (!type) return res.send("Invalid Comment Type");
    Comments.create({ studentId, ownerId: currentUserId, teacherId: currentUserId, comment, type },
        (err, data) => {
            if (err) return res.send(err);
            return res.send("Comment Added");
        });
}

const updateTeacherComment = (req, res) => {
    const user = req.context.get('user');
    if (!user || user.role !== 'teacher') return res.send("user cannot perform this operation");
    const currentUserId = user && user._id;
    const commentId = req.body && req.body.commentId;
    const studentId = req.body && req.body.studentId;
    const comment = req.body && req.body.comment;
    const type = req.body && req.body.type;
    if (!commentId) return res.send("Invalid CommentID");
    Comments.findOne({ _id: commentId }, (err, record) => {
        if (err) return res.send("unable to fetch and update comment");
        if (!record || !record.ownerId || record.ownerId !== currentUserId) {
            return res.send("User cannot update comment");
        }
        if (studentId) record.studentId = studentId;
        if (comment) record.comment = comment;
        if (type) record.type = type;
        record.save((err1, data) => {
            if (err1) return res.send(err1);
            return res.send("updated successfully");
        });
    });
}

module.exports = {
    fetchRecordsByTeacherId,
    fetchRecordsByStudentId,
    createTeacherComment,
    updateTeacherComment
};