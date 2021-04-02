/**
 * @author Nikunj Goenka
 * @email nikunjgoenka@dal.ca
 * @create date 2021-03-31 21:09:24
 * @modify date 2021-03-31 21:10:28
 * @desc Model for Subject
 */
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const subjectSchema = new Schema({
  title: {
    type: 'String',
    required: true,
    trim: true
  },
  description: {
    type: 'String',
    required: true,
    trim: true
  },
  ownerId: {
    type: 'String',
    required: true,
    trim: true
  },
  teacherId: {
    type: 'String',
    required: true,
    trim: true
  }
});

module.exports = mongoose.model('subject', subjectSchema, 'subject');