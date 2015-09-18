import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    newLanguage: function(){
      var code = this.get('newLanguage'),
          self = this,
          app_id = parseInt(this.get('model.id'));

      if(!code){ return; }

      var language = this.store.createRecord('language', { app_id: app_id });
      language.set('code', code);

      language.save().then(function(r){
        self.get('model').get('languages').pushObject(language);
        self.set('newLanguage',null);
      });
    }
  }
});
