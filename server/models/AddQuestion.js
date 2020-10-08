const mongoose = require('mongoose');

const QuestionSchema = new mongoose.Schema({
  quizQuestion: { type: String, required: true },
  answer1: { type: String, required: true },
  answer2: { type: String, required: true },
  answer3: { type: String, required: true },
  answer4: { type: String, required: true },
  correctAnswer: { type: String, required: true },
  correctCount: { type: Number, default: 0 },
  attemptCount: { type: Number, default: 0 }
});

module.exports = mongoose.model('Question', QuestionSchema);