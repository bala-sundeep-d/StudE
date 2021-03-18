const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName: {
    type: 'String',
    required: true,
    trim: true
  },
  lastName: {
    type: 'String',
    trim: true
  },
  userId: {
    type: 'String',
    required: true,
    trim: true,
    unique: true
  },
  password: {
    type: 'String',
    required: true,
    trim: true
  },
  role: {
    type: 'String',
    enum : ['student','teacher'],
    required: true,
    trim: true
  },
  instituteId: {
    type: 'String',
    required: true,
    trim: true
  },
  subjectIds: [{
    type: 'String'
  }]
});

module.exports = mongoose.model('user', userSchema, 'user');