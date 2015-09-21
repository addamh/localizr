/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {});

  app.import('bower_components/bootstrap-sass/assets/stylesheets/_bootstrap.scss');
  app.import('bower_components/metisMenu/dist/metisMenu.css');
  app.import('bower_components/world-flags-sprite/stylesheets/flags16.css');
  app.import('bower_components/world-flags-sprite/stylesheets/flags32.css');
  app.import('bower_components/sweetalert/dist/sweetalert.css');

  app.import('bower_components/bootstrap-sass/assets/javascripts/bootstrap.min.js');
  app.import('bower_components/underscore/underscore.js');
  app.import('bower_components/FileSaver.js/FileSaver.min.js');
  app.import('bower_components/jxon/index.js');
  app.import('bower_components/vkBeautify/vkbeautify.js');
  app.import('bower_components/metisMenu/dist/metisMenu.js');
  app.import('bower_components/Chart.js/Chart.min.js');
  app.import('bower_components/sweetalert/dist/sweetalert.min.js');
  app.import('bower_components/ember-uploader/dist/ember-uploader.js');

  return app.toTree();
};
