import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    delete: function() {
      var self = this;
      swal({
          title: "Are you sure?",
          text: "This will delete this app and it will be unrecoverable.",
          type: "warning",
          showCancelButton: true,
          confirmButtonColor: "#f16958",
          confirmButtonText: "Yes, Delete it!",
          closeOnConfirm: false
        },
        function() {
          swal.close();
          self.get('model').deleteRecord();
          self.get('model').save().then(function(r) {
            self.transitionTo('apps');
          });
        });
    },
    newLanguage: function() {
      var code = this.get('newLanguage'),
        self = this,
        app_id = parseInt(this.get('model.id'));

      if (!code) {
        return;
      }

      var language = this.store.createRecord('language', {
        app_id: app_id
      });

      var code_split = code.split('-');
      if (code_split.length > 1) {
        language.set('code', code_split[0]);
        language.set('country_code', code_split[1]);
      } else {
        language.set('code', code);
        language.set('country_code', code);
      }


      language.save().then(function(r) {
        self.get('model').get('languages').pushObject(language);
        self.set('newLanguage', null);
      });
    }
  }
});
