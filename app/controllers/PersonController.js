var express = require('express'),
	router = express.Router(),
	mongoose = require('mongoose'),
	Person = mongoose.model('Person');

module.exports = function (app) {
	app.use('/', router);
};
