/* Author: Prashant Sanjay Sarvi */
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const qnaSchema = new Schema({
  question: {
    type: 'String',
    required: true,
    trim: true
  },
  answer: {
    type: 'String',
    required: true,
    trim: true
  },
  ownerId: {
    type: 'String',
    required: true,
    trim: true
  },
  chapterId: {
    type: 'String',
    required: true,
    trim: true
  }
});

module.exports = mongoose.model('content', qnaSchema, 'content');