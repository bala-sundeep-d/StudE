const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName: {
    type: 'String',
    required: true,
    trim: true
  },
  lastName: {
    type: 'String',
    required: true,
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
  }
});

module.exports = mongoose.model('User', userSchema);