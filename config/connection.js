/**
 * This is the connection to the mongo database.
 * This takes mongo URI using the key file and uses that database.
 * Also To ensure good code quality we will be using promises.
 * @type {"mongoose"}
 */


const mongoose = require('mongoose');
const keys = require('./keys');

mongoose.Promise = global.Promise;
/**
 * Security
 * We will be storing all sentsitive keys and data in a seperate file called keys.js due to security and legal reasons.
 * We will add that file to .gitignore file to prevent adding to public sites like github.
 */
mongoose.connect(keys.mongodb.dbURI);

module.exports = {mongoose};
