var express = require('express'),
  logger = require('morgan'),
  bodyParser = require('body-parser'),
  path = require('path');

var rootPath = path.normalize(__dirname + '/../');

module.exports = function(app) {
  app.use(logger('dev'));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));

  app.use(express.static(rootPath + '/dist'));
};
