/**
 * This is the connection to the mongo database.
 * This takes mongo URI using the key file and uses that database.
 * Also To ensure good code quality we will be using promises.
 * @type {"mongoose"}
 */

const mongoose = require('mongoose');
const keys = require('./keys');

mongoose.Promise = global.Promise;
mongoose.connect(keys.mongodb.dbURI);

module.exports = {mongoose};
