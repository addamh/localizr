import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  languages: DS.hasMany('language'),
  primaryLanguage: Ember.computed('languages', function(){
    var langs = this.get('languages');
    return langs.filterProperty({primary: true});
  })
});
