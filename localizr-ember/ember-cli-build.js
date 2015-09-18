/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {});

  app.import('bower_components/bootstrap-sass/assets/stylesheets/_bootstrap.scss');

  app.import('bower_components/underscore/underscore.js');
  app.import('bower_components/FileSaver.js/FileSaver.min.js');
  app.import('bower_components/jxon/index.js');
  app.import('bower_components/vkBeautify/vkbeautify.js');

  return app.toTree();
};
