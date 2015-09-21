import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel: function() {
   Ember.$.getJSON('/api/v1/csrf').then(function(r){
     $('head').append('<meta name="csrf-token" content="'+r.authenticity_token+'" />');
   });
  },
  model(){
    return this.store.findAll('app');
  },
  setupController: function(controller, model){
    controller.set('model', model);
    Ember.run.schedule('afterRender', this, function () {
      $(".metismenu").metisMenu();
    });

  }
});
