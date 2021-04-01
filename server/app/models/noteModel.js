const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const noteSchema = new Schema({
  title: {
    type: 'String',
    required: true,
    trim: true
  },
  message: {
    type: 'String',
    required: true,
    trim: true
  },
  ownerId: {
    type: 'String',
    required: true,
    trim: true
  },
  subjectId: {
    type: 'String',
    required: true,
    trim: true
  }
});

module.exports = mongoose.model('note', noteSchema, 'note');