import DS from 'ember-data';

export default DS.Model.extend({
  app_id: DS.attr(),
  code: DS.attr('string'),
  thing: DS.attr('string'),
  localized_strings: DS.hasMany('localized_strings')
});
