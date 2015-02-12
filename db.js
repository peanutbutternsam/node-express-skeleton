var mongoose = require('mongoose');

mongoose.connect('if using mongolab, put your link here');

module.exports = mongoose.connection;