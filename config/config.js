var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'bus'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/bus-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'bus'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/bus-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'bus'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/bus-production'
  }
};

module.exports = config[env];
