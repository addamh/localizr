import Ember from 'ember';

export default Ember.Controller.extend({
  languageController: Ember.inject.controller('apps.detail.language'),
  language: Ember.computed.reads('languageController.model'),
  actions: {
    delete: function(){
      var self = this;
      this.get('model').deleteRecord();
      this.get('model').save().then(function(r){
        self.get('languageController').notifyPropertyChange('percentComplete')
        self.transitionTo('apps.detail.language', self.get('language.id'));
      });
    },
    save: function(){
      var self = this;
      this.get('model').save().then(function(r){
        self.get('languageController').notifyPropertyChange('percentComplete');
      });
    }
  }
});
