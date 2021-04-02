const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const chapterSchema = new Schema({
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
  subjectId: {
    type: 'String',
    required: true,
    trim: true
  },
  ownerId: {
    type: 'String',
    required: true,
    trim: true
  }
});

module.exports = mongoose.model('chapter', chapterSchema, 'chapter');