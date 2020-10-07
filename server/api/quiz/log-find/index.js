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

      if (req.body === "true") {
        return Question.findOneAndUpdate(
          { _id },
          {
            $inc: { attemptCount: 1 },
            //if error check here 
            //increment attempt count
            // find a way to determine if user answered correctly to increment correctCount

            $inc: { correctCount: 1 }
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
            //if error check here 
            //increment attempt count
            // find a way to determine if user answered correctly to increment correctCount
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