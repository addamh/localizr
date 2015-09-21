import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
      return this.store.find('language', params.language_id);
  },
  setupController(controller, model) {
    controller.set('model', model);
    this.store.find('app', model.get('app_id')).then(function(r){
      controller.set('app', r);
    });
  }
});
