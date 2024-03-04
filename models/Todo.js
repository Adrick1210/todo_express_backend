// DEPENDENCIES
const mongoose = require("./connection");

// SCHEMA
const TodoSchema = new mongoose.Schema({
  title: String,
  isComplete: Boolean,
  username: String,
});

// OBJECT
const Todo = mongoose.model("Todo", TodoSchema);

// EXPORT
module.exports = Todo;
