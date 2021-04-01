/**
 * @author Nikunj Goenka
 * @email nikunjgoenka@dal.ca
 * @create date 2021-03-31 21:08:15
 * @modify date 2021-03-31 21:29:41
 * @desc COntroller for subject
 */
const Subject = require('../models/subjectModel');
const User = require('../models/userModel');
const BlueBirdPromise = require('bluebird');
const _ = require('lodash');

const fetchSubjectsOfTeacher = (req, res) => {
    const teacherId = req.query && req.query.teacherId;
    if (!teacherId) return res.send("enter a valid teacherId");
    Subject.find({ teacherId }, (err, data) => {
        if (err) return res.send(err);
        return res.send(data);
    });
}

const fetchSubjectsOfStudent = (req, res) => {
    const studentId = req.query && req.query.studentId;
    if (!studentId) return res.send("enter a valid studentId");
    User.findOne({ _id: studentId }, (err, data) => {
        if (err) return res.send(err);
        if (!data || _.isEmpty(data.subjectIds)) return res.send([]);
        BlueBirdPromise.mapSeries(data.subjectIds, (subjectId) => new BlueBirdPromise((resolve, reject) => {
            Subject.findOne({ _id: subjectId }, (err, record) => {
                if (err) return reject(err);
                return resolve(record);
            });
        }))
            .then(records => res.send(records))
            .catch(err => res.send(err));
    });
}

const addSubject = (req, res) => {
    const user = req.context.get('user');
    if (!user || user.role !== 'teacher') return res.send("user cannot perform this operation");
    const currentUserId = user && user._id;
    const description = req.body && req.body.description;
    const title = req.body && req.body.title;
    if (!description) return res.send("enter a valid description");
    if (!title) return res.send("enter a valid title");
    Subject.create({ description, title, ownerId: currentUserId, teacherId: currentUserId }, (err, data) => {
        if (err) return res.send(err);
        return res.send("inserted successfully");
    });
}

const updateSubject = (req, res) => {
    const user = req.context.get('user');
    if (!user || user.role !== 'teacher') return res.send("user cannot perform this operation");
    const currentUserId = user && user._id;
    const subjectId = req.body && req.body.subjectId;
    const description = req.body && req.body.description;
    const title = req.body && req.body.title;
    if (!subjectId) return res.send("enter a valid subjectId");
    Subject.findOne({ _id: subjectId }, (err, subject) => {
        if (err) return res.send("unable to fetch and update subject");
        if (!subject || !subject.ownerId || subject.ownerId !== currentUserId) {
            return res.send("User cannot update subject");
        }
        if (description) subject.description = description;
        if (title) subject.title = title;
        subject.save((err1, data) => {
            if (err1) return res.send(err1);
            return res.send("updated successfully");
        });
    });
}

module.exports = {
    fetchSubjectsOfTeacher,
    fetchSubjectsOfStudent,
    addSubject,
    updateSubject
};