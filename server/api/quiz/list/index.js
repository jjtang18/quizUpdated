const app = require('../../../util/configureApi');
const connectDB = require('../../../util/db');
const Question = require('../../../models/AddQuestion');

app.get('*', (req, res) => {
  connectDB()
    .then(() => Question.find())
    .then((questionItems) => {
      res.status(200).json({
        result: questionItems
      })
    })
    .catch(error => {
      res.status(error.statusCode || 500).json({
        error: error.message,
      });
    })
});

module.exports = app;