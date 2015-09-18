import DS from 'ember-data';

export default DS.ActiveModelAdapter.extend({
  namespace: 'api/v1',
  pathForType: function(type) {
    $(function() {
        var token = $('meta[name="csrf-token"]').attr('content');
        return $.ajaxPrefilter(function(options, originalOptions, xhr) {
            return xhr.setRequestHeader('X-CSRF-Token', token);
        });
    });

    var url;
    if(type === 'localized-string'){
      url = 'strings';
    } else {
      url = this._super.apply(this, arguments);
    }

    return url;
  }
});
