/*
Author : Nikunj Goenka
*/
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TeacherCommentSchema = new Schema({
  teacherId: {
    type: 'String',
    required: true,
    trim: true
  },
  comment: {
    type: 'String',
    required: true,
    trim: true
  },
  type: {
    type: 'String',
    enum: ['TODO', 'Award', 'Notification', 'Doubt'],
    required: true,
    trim: true
  },
  studentId: {
    type: 'String',
    required: true,
    trim: true
  },
  ownerId: {
    type: 'String',
    required: true,
    trim: true
  },
  timestamp: {
    type: Date,
    required: true,
    default: Date.now
  }
});

module.exports = mongoose.model('teacherComment', TeacherCommentSchema, 'teacherComment');