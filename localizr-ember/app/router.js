import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('apps', { path: '/apps' }, function () {
    this.route("detail", { path: "/:app_id" }, function() {
      this.route('language', { path: '/language/:language_id' }, function() {
        this.route('string', { path: '/string/:string_id' });
      });
    });
  });
});

export default Router;
