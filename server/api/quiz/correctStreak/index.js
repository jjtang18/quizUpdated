const app = require('../../../util/configureApi');
const connectDB = require('../../../util/db');
const Question = require('../../../models/AddQuestion');

app.put('*', (req, res) => {
  connectDB()
    .then(() => {
      const { _id } = req.query;

      if (!_id) {
        throw new Error('No document id specified.');
      }

      if (req.body === 'correct') {
        return Question.findOneAndUpdate(
          { _id },
          {
            $inc: { attemptCount: 1, correctCount: 1 }
          },
          {
            useFindAndModify: true,
            new: true,
          }
        )
      }
      else {
        return Question.findOneAndUpdate(
          { _id },
          {
            $inc: { attemptCount: 1 }
          },
          {
            useFindAndModify: true,
            new: true,
          }
        )
      }
    })//check scope of below
    .then(QuestionItem => {
      res.status(200).json({
        result: QuestionItem,
      });
    })
    .catch(error => {
      res.status(error.statusCode || 500).json({
        error: error.message,
      });
    });
});

module.exports = app;