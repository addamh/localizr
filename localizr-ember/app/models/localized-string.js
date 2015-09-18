import DS from 'ember-data';

export default DS.Model.extend({
  string_key: DS.attr('string'),
  string_value: DS.attr('string'),
  language_id: DS.attr(),
  notes: DS.attr(),
  incomplete: Ember.computed('string_value', function(){
    return this.get('string_value') === null ? true : false;
  })
});
