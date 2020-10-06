const connectDB  = require('../util/db');
const Question = require('../models/AddQuestion');

const data = require('./data');

const seed = () => {
    connectDB()
    .then(() => {
        return Question.find().estimatedDocumentCount();
    })
    .then(cacheCount => {
        if (cacheCount > 0) {
            throw new Error("Question Collection is not empty.");
        }
        return Question.create(data);
    })
    .then(() => console.log('DB Seeded.'))
    .catch(error => {
        console.log('Error while seeding database', error);
    })
    .finally(() => process.exit());
}

seed();