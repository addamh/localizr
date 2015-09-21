import Ember from 'ember';

export default Ember.Controller.extend({
  languageController: Ember.inject.controller('apps.language'),
  language: Ember.computed.reads('languageController.model'),
  actions: {
    delete: function(){
      var self = this;
      swal({
          title: "Are you sure?",
          text: "This will delete this string and it will be unrecoverable.",
          type: "warning",
          showCancelButton: true,
          confirmButtonColor: "#f16958",
          confirmButtonText: "Yes, Delete it!",
          closeOnConfirm: false
        },
        function() {
          self.get('model').deleteRecord();
          self.get('model').save().then(function(r){
            self.get('languageController').notifyPropertyChange('percentComplete')
            self.transitionTo('apps.language', self.get('language.id'));
          });
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
