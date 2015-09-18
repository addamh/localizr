import DS from 'ember-data';

export default DS.Model.extend({
  app: DS.belongsTo('app'),
  code: DS.attr('string'),
  localized_strings: DS.hasMany('localized_strings')
});
