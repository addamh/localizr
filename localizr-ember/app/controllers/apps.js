import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    newApp: function(){
      var name = this.get('newApp'),
          self = this;

      if(!name){ return; }

      var app = this.store.createRecord('app');
      app.set('name', name);

      app.save().then(function(r){
        self.set('newApp',null);
      });
    }
  }
});
