const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://admin:travelmate@ds227199.mlab.com:27199/travel-mate');

module.exports = {mongoose};
