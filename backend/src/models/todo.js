const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    default: '[Blank]',
    required: true
  },
  isCompleted: {
    type: Boolean,
    default: false,
    required: true
  }
});

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;