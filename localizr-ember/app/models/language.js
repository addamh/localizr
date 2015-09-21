import DS from 'ember-data';

export default DS.Model.extend({
  app_id: DS.attr(),
  code: DS.attr('string'),
  country_code: DS.attr('string'),
  primary: DS.attr(),
  localized_strings: DS.hasMany('localized_strings'),
  parent_app: DS.belongsTo('language'),
  chartId: Ember.computed('code', function() {
    return 'language-chart-' + this.get('code') + "-" + this.get('country_code');
  }),
  percentComplete: Ember.computed('localized_strings.@each.string_value', function() {
    if (this.get('localized_strings') && this.get('localized_strings').get('currentState').length > 0) {
      var values = _.map(this.get('localized_strings').get('currentState'), function(r) {
        return r._data.string_value
      });
      var empty = _.filter(values, function(v) {
        return v === null || v === '';
      })
      return Math.round((1 - empty.length / values.length) * 100);
    } else {
      return 0;
    }
  })
});
