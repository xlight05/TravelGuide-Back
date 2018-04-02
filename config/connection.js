const mongoose = require('mongoose');
const keys = require('./keys');

mongoose.Promise = global.Promise;
mongoose.connect(keys.mongodb.dbURI);

module.exports = {mongoose};
