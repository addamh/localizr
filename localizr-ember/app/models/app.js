import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  languages: DS.hasMany('language'),
});
