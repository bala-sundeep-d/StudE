const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const discussionSchema = new Schema({
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

module.exports = mongoose.model('discussion', discussionSchema, 'discussion');