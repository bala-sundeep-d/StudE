const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const commentSchema = new Schema({
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
  discussionId: {
    type: 'String',
    required: true,
    trim: true
  }
});

module.exports = mongoose.model('comment', commentSchema, 'comment');