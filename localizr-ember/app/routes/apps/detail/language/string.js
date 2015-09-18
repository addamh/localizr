import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {;
      return this.store.find('localized-string', params.string_id);
  }
});
