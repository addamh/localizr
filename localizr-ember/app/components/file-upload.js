import Ember from 'ember';

export default EmberUploader.FileField.extend({
  url: Ember.computed('app_id', function() {
    return "/api/v1/languages/"+ this.get('language_id') +"/import";
  }),
  app_id: null,
  filesDidChange: function(files) {
    var uploadUrl = this.get('url');

    var CustomUploader = EmberUploader.Uploader.extend({
      ajaxSettings: function() {
        var settings = this._super.apply(this, arguments);
        var token = $('meta[name="csrf-token"]').attr('content');
        settings.headers = {
          'X-CSRF-Token': token
        }
        return settings;
      }
    });

    var uploader = CustomUploader.create({
      url: uploadUrl
    });

    uploader.on('didUpload', function(e) {
      $('#import-file').modal('hide');
    });

    if (!Ember.isEmpty(files)) {
      uploader.upload(files[0]);
    }
  }
});
