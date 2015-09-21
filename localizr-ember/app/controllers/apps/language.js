import Ember from 'ember';

export default Ember.Controller.extend({
  app_name: Ember.computed('model', function() {
    this.store.find('app', this.get("model.app_id")).then(function(r) {
      return r.get('name');
    });
  }),
  percentComplete: Ember.computed('model.@each.string_value', function() {
    if (this.get('model').get('localized_strings') && this.get('model').get('localized_strings').get('currentState').length > 0) {
      var values = _.map(this.get('model').get('localized_strings').get('currentState'), function(r) {
        return r._data.string_value
      });
      var empty = _.filter(values, function(v) {
        return v === null || v === '';
      })
      return Math.round((1 - empty.length / values.length) * 100);
    } else {
      return 0;
    }
  }),
  actions: {
    uploadFile: function(){
      $('#import-file').modal('show');
      this.get('model.localized_strings').reload();
    },
    makePrimary: function(){
      this.store.find('app', this.get('model').get('app_id')).then(function(r){
        r.reload();
      });
      this.get('model').set('primary', true).save();
    },
    delete: function() {
      var self = this;
      swal({
          title: "Are you sure?",
          text: "This will delete this language and it will be unrecoverable.",
          type: "warning",
          showCancelButton: true,
          confirmButtonColor: "#f16958",
          confirmButtonText: "Yes, Delete it!",
          closeOnConfirm: false
        },
        function() {
          swal.close();
          self.get('model').deleteRecord();
          self.get('model').save().then(function(r) {
            self.transitionTo('apps');
          });
          return true;
        });
    },
    export: function(format) {
      if (format === 'json') {
        var data = {};

        _.each(this.get('model.localized_strings.currentState'), function(d) {
          data[d._data.string_key] = d._data.string_value;
        });

        window.saveAs(new Blob([vkbeautify.json(JSON.stringify(data))], {
          type: 'application/json'
        }), this.get('model').get('code') + '.json');
      } else if (format === 'xml') {
        var xml = '<?xml version="1.0" encoding="utf-8"?>' + JXON.jsToString({
          resources: {
            string: _.map(this.get('model.localized_strings.currentState'), function(x) {
              return {
                "@name": x._data.string_key,
                "keyValue": x._data.string_value
              };
            })
          }
        });
        window.saveAs(new Blob([vkbeautify.xml(xml)], {
          type: 'application/xml'
        }), this.get('model').get('code') + '.xml');
      } else if (format === 'php') {
        var php = "<?php \n";
        php += "return array(\n"
        php += _.map(this.get('model.localized_strings.currentState'), function(d) {
          return "'" + d._data.string_key + "' => '" + d._data.string_value + "'";
        }).join(',\n');
        php += "\n); ?>"
        window.saveAs(new Blob([php], {
          type: 'application/php'
        }), this.get('model').get('code') + '.php');
      } else if (format === 'ios') {
        var ios = _.map(this.get('model.localized_strings.currentState'), function(d) {
          return "'" + d._data.string_key + "' = '" + d._data.string_value + "'";
        }).join('\n');
        window.saveAs(new Blob([ios], {
          type: 'application/text'
        }), this.get('model').get('code') + '.strings');
      }
    },
    newString: function() {
      var key = this.get('newKey'),
        language = parseInt(this.get('model').get('id')),
        self = this;

      if (!key) {
        return;
      }

      var localizedString = this.store.createRecord('localized-string', {
        string_key: key,
        language_id: language
      });

      localizedString.save().then(function(r) {
        self.notifyPropertyChange('percentComplete')
        self.get('model').get('localized_strings').pushObject(localizedString);
        self.set('newKey', null);
      });
    }
  }
});
