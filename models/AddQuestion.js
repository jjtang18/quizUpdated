const mongoose = require('mongoose');

const QuestionSchema = new mongoose.Schema({
  quizQuestion: { type: String, required: true },
  answer1: { type: String, required: true },
  answer2: { type: String, required: true },
  answer3: { type: String, required: true },
  answer4: { type: String, required: true},
  correctAnswer: { type: String, required: true},
});

module.exports = mongoose.model('Question', QuestionSchema);