const app = require('../../util/configureApi');
const Question = require('../../models/AddQuestion');
const connectDB = require('../../util/db');

app.post('*', (req, res) => {
  connectDB()
    .then(() => {
      return Question.create(req.body);
    })
    .then(questionItem => {
      res.status(200).json({
        result: questionItem,
      });
    })
    .catch(error => {
      res.status(error.statusCode || 500).json({
        error: error.message,
      });
    });
});

module.exports = app;